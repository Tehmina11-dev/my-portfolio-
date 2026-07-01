import {
  TbBrandOpenai,
  TbVectorTriangle,
  TbDatabaseSearch,
  TbApi,
} from "react-icons/tb";
import { LuSparkles, LuSearch } from "react-icons/lu";
import type { AICapability } from "@/types";

/**
 * Cards for the "Working with AI & Vector Databases" section.
 * Highlights hands-on, modern AI engineering skills.
 */
export const aiCapabilities: AICapability[] = [
  {
    id: "ai-features",
    title: "AI-Powered Features",
    description:
      "Designed and shipped intelligent features — AI chat assistants, smart suggestions, and content generation — that feel native to the product.",
    icon: LuSparkles,
    tags: ["LLM", "Chat Assistant", "UX"],
  },
  {
    id: "weaviate",
    title: "Weaviate Vector Database",
    description:
      "Integrated Weaviate to store and query high-dimensional embeddings, powering fast, scalable similarity search over real application data.",
    icon: TbVectorTriangle,
    tags: ["Weaviate", "Vector DB", "Scalability"],
  },
  {
    id: "semantic-search",
    title: "Semantic Search",
    description:
      "Built semantic search that understands meaning, not just keywords — surfacing the most relevant results from messages and documents.",
    icon: LuSearch,
    tags: ["Search", "Relevance", "Retrieval"],
  },
  {
    id: "embeddings",
    title: "Embeddings & Vector Search",
    description:
      "Generated and indexed embeddings to represent text numerically, enabling nearest-neighbor retrieval and context-aware AI responses.",
    icon: TbDatabaseSearch,
    tags: ["Embeddings", "kNN", "RAG"],
  },
  {
    id: "ai-apis",
    title: "Connecting AI APIs",
    description:
      "Wired AI provider APIs into production apps — handling streaming, prompt design, rate limits, and graceful error states end to end.",
    icon: TbApi,
    tags: ["API", "Streaming", "Integration"],
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation",
    description:
      "Combined vector retrieval with LLMs so answers are grounded in real data — reducing hallucinations and improving trustworthiness.",
    icon: TbBrandOpenai,
    tags: ["RAG", "Grounding", "Context"],
  },
];
