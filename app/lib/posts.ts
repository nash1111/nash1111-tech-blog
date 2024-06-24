import * as postFirst from "~/routes/blog.nexttoremix.mdx";
import * as postHowTaskPageCreated from "~/routes/blog.howtaskpagecreated.mdx";
import * as postWhatICareAbout from "~/routes/blog.whaticareabout.mdx";
import * as postPrAgent from "~/routes/blog.pragent.mdx";
export const posts = [
  { path: "/blog/nexttoremix", data: postFirst },
  { path: "/blog/howtaskpagecreated", data: postHowTaskPageCreated },
  { path: "/blog/whaticareabout", data: postWhatICareAbout },
  { path: "/blog/pragent", data: postPrAgent },
];
export function getPostDataByPath(path: string) {
  const post = posts.find((post) => post.path === path);
  return post ? post.data : null;
}
