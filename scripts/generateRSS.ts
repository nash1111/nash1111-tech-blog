import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Feed } from "feed";
import {
  AUTHOR_NAME,
  DEFAULT_OGP,
  DOMAIN,
  FAVICON,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "~/lib/const";
import { Frontmatter } from "~/mdx";

const blogDir = path.join(process.cwd(), "app", "routes");

const getFrontmatters = (): (Frontmatter & { file: string })[] => {
  const files = fs.readdirSync(blogDir).filter((file) =>
    file.startsWith("blog.") && file.endsWith(".mdx")
  );
  const frontmatters = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return { ...data, file } as Frontmatter & { file: string };
  });
  return frontmatters;
};

const generateFeeds = () => {
  const frontmatters = getFrontmatters();
  const feed = new Feed({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    id: DOMAIN,
    link: DOMAIN,
    language: "jp",
    image: `${DOMAIN}/${DEFAULT_OGP}`,
    favicon: `${DOMAIN}/${FAVICON}`,
    copyright: `All rights reserved 2023, ${AUTHOR_NAME}`,
    updated: new Date(),
    generator: "Feed for Node.js",
    feedLinks: {
      json: `${DOMAIN}/json`,
      atom: `${DOMAIN}/atom`,
    },
    author: {
      name: AUTHOR_NAME,
    },
  });

  frontmatters.forEach((frontmatter) => {
    feed.addItem({
      title: frontmatter.title,
      id: `${DOMAIN}/${
        frontmatter.file.replace(".mdx", "").replace(/\./g, "/")
      }`,
      link: `${DOMAIN}/${
        frontmatter.file.replace(".mdx", "").replace(/\./g, "/")
      }`,
      description: frontmatter.description,
      content: frontmatter.tags?.map((tag) => `<p>${tag}</p>`).join(""),
      author: [
        {
          name: AUTHOR_NAME,
          email: "",
          link: `${DOMAIN}/${AUTHOR_NAME}`,
        },
      ],
      date: new Date(frontmatter.published),
    });
  });

  fs.writeFileSync(path.join(process.cwd(), "public", "rss.xml"), feed.rss2());
  fs.writeFileSync(
    path.join(process.cwd(), "public", "feed.json"),
    feed.json1(),
  );
  fs.writeFileSync(
    path.join(process.cwd(), "public", "atom.xml"),
    feed.atom1(),
  );
};

generateFeeds();
