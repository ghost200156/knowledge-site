import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    status: z.enum(["draft", "published"]).default("draft"),
    visibility: z.enum(["private", "public"]).default("private"),
    type: z.enum(["essay", "note", "project", "map", "log"]).default("note"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
