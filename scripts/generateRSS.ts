import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Feed } from "feed";

const blogDir = path.join(process.cwd(), "app", "routes");

const getFrontmatters = () => {
  const files = fs.readdirSync(blogDir).filter((file) =>
    file.startsWith("blog.") && file.endsWith(".mdx")
  );
  const frontmatters = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return { ...data, file };
  });
  return frontmatters;
};

const generateRSS = () => {
  const frontmatters = getFrontmatters();
  const feed = new Feed({
    title: "My Blog",
    description: "This is my personal blog",
    id: "http://example.com/",
    link: "http://example.com/",
    language: "en",
    image: "http://example.com/image.png",
    favicon: "http://example.com/favicon.ico",
    copyright: "All rights reserved 2023, My Blog",
    updated: new Date(),
    generator: "Feed for Node.js",
    feedLinks: {
      json: "http://example.com/json",
      atom: "http://example.com/atom",
    },
    author: {
      name: "Author Name",
      email: "author@example.com",
      link: "http://example.com/author",
    },
  });

  frontmatters.forEach((frontmatter) => {
    feed.addItem({
      title: frontmatter.title,
      id: `http://example.com/blog/${frontmatter.file.replace(".mdx", "")}`,
      link: `http://example.com/blog/${frontmatter.file.replace(".mdx", "")}`,
      description: frontmatter.description,
      content: frontmatter.content,
      author: [
        {
          name: "Author Name",
          email: "author@example.com",
          link: "http://example.com/author",
        },
      ],
      date: new Date(frontmatter.published),
    });
  });

  fs.writeFileSync(path.join(process.cwd(), "public", "rss.xml"), feed.rss2());
  console.log("RSS feed generated!");
};

generateRSS();
