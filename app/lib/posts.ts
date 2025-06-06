import * as postFirst from "~/routes/blog.nexttoremix.mdx";
import * as postHowTaskPageCreated from "~/routes/blog.howtaskpagecreated.mdx";
import * as postWhatICareAbout from "~/routes/blog.whaticareabout.mdx";
import * as postPrAgent from "~/routes/blog.pragent.mdx";
import * as postGitSettingsOnVSCode from "~/routes/blog.gitsettingsonvsc.mdx";
import * as postShuttleAxum from "~/routes/blog.shuttleaxum.mdx";
import * as postE2EWithIphone from "~/routes/blog.e2ewithiphone.mdx";
import * as postAddedRSS from "~/routes/blog.addedrss.mdx";
import * as postAddShadcn from "~/routes/blog.addshadcnonremix.mdx";
import * as postOouiPart1 from "~/routes/blog.ooui_part1.mdx";
import * as postGhExtensionPart1 from "~/routes/blog.ghextension_part1.mdx";
import * as postStopTooMuchReview from "~/routes/blog.stoptoomuchreview.mdx";
import * as postOouiPart2 from "~/routes/blog.ooui_part2.mdx";
import * as depsLessUiPart1 from "~/routes/blog.depslessui_part1.mdx";
import * as mySaaSStack from "~/routes/blog.my_saas_stack.mdx";
import { M } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

export const posts = [
  { path: "/blog/nexttoremix", data: postFirst },
  { path: "/blog/howtaskpagecreated", data: postHowTaskPageCreated },
  { path: "/blog/whaticareabout", data: postWhatICareAbout },
  { path: "/blog/pragent", data: postPrAgent },
  { path: "/blog/gitsettingsonvsc", data: postGitSettingsOnVSCode },
  { path: "/blog/shuttleaxum", data: postShuttleAxum },
  { path: "/blog/e2ewithiphone", data: postE2EWithIphone },
  { path: "/blog/addedrss", data: postAddedRSS },
  { path: "/blog/addshadcnonremix", data: postAddShadcn },
  { path: "/blog/ooui_part1", data: postOouiPart1 },
  { path: "/blog/ghextension_part1", data: postGhExtensionPart1 },
  { path: "/blog/stoptoomuchreview", data: postStopTooMuchReview },
  { path: "/blog/ooui_part2", data: postOouiPart2 },
  { path: "/blog/depslessui_part1", data: depsLessUiPart1 },
  { path: "/blog/my_saas_stack", data: mySaaSStack },
];
export function getPostDataByPath(path: string) {
  const post = posts.find((post) => post.path === path);
  return post ? post.data : null;
}
