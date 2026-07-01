"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuSend, LuMapPin, LuMail, LuLoader, LuCheck, LuTriangleAlert } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personal } from "@/data/personal";
import { SECTION_IDS } from "@/constants";
import type { ContactFormErrors, ContactFormValues } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/motion";
import { buildMailto, cn, validateContactForm } from "@/utils";

const EMPTY: ContactFormValues = { name: "", email: "", subject: "", message: "" };

type Status = "idle" | "submitting" | "success" | "error";

const contactInfo = [
  { icon: LuMail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FaGithub, label: "GitHub", value: "@tehmina11-dev", href: personal.github },
  { icon: FaLinkedin, label: "LinkedIn", value: "Tehmina Dev", href: personal.linkedin },
  { icon: LuMapPin, label: "Location", value: personal.location },
];

/** Contact — validated form with success/error states + contact details. */
export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof ContactFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    try {
      // No backend wired up — simulate a request, then hand off to the
      // user's mail client as a graceful, dependency-free fallback.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      window.location.href = buildMailto(
        personal.email,
        values.subject,
        `Hi Tehmina,\n\n${values.message}\n\n— ${values.name} (${values.email})`
      );
      setValues(EMPTY);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id={SECTION_IDS.contact} className="container-section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a role, a project, or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Info column */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <div className="glass-card p-7">
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form or reach me directly through any of these
              channels. I usually reply within a day.
            </p>
            <ul className="mt-6 space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-3 transition-colors hover:border-primary/40">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium">{value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        {/* Form column */}
        <motion.form
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          noValidate
          className="glass-card p-7 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              placeholder="Your name"
              value={values.name}
              onChange={update("name")}
              error={errors.name}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={update("email")}
              error={errors.email}
            />
          </div>
          <div className="mt-5">
            <Field
              id="subject"
              label="Subject"
              placeholder="What's this about?"
              value={values.subject}
              onChange={update("subject")}
              error={errors.subject}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your idea, role, or project..."
              value={values.message}
              onChange={update("message")}
              aria-invalid={Boolean(errors.message)}
              className={cn(
                "w-full resize-none rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/40",
                errors.message ? "border-red-500/60" : "border-border focus:border-primary/50"
              )}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              leftIcon={
                status === "submitting" ? (
                  <LuLoader className="h-5 w-5 animate-spin" />
                ) : (
                  <LuSend className="h-5 w-5" />
                )
              }
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <StatusPill
                  key="success"
                  icon={<LuCheck className="h-4 w-4" />}
                  className="border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                >
                  Message ready — opening your mail app!
                </StatusPill>
              )}
              {status === "error" && (
                <StatusPill
                  key="error"
                  icon={<LuTriangleAlert className="h-4 w-4" />}
                  className="border-red-500/40 bg-red-500/10 text-red-400"
                >
                  Something went wrong. Please try again.
                </StatusPill>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/** Labelled text input with inline validation message. */
function Field({
  id,
  label,
  error,
  type = "text",
  ...props
}: {
  id: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/40",
          error ? "border-red-500/60" : "border-border focus:border-primary/50"
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function StatusPill({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
        className
      )}
    >
      {icon}
      {children}
    </motion.span>
  );
}
