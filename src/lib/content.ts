import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export function isPublicPost(post: Post) {
  return post.data.status === "published" && post.data.visibility === "public";
}

export async function getPublicPosts() {
  const posts = await getCollection("posts", isPublicPost);

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
