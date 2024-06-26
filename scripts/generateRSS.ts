import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "app", "routes");

const getFrontmatters = () => {
  const files = ["blog.pragent.mdx", "blog.fuga.mdx"];
  const frontmatters = files.map((file) => {
    const filePath = path.join(blogDir, file);
    console.log(`Reading file: ${filePath}`); // デバッグ用のログ
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      console.log(data);
      return data;
    } else {
      console.error(`File not found: ${filePath}`);
      return null;
    }
  }).filter(Boolean); // nullを除外
  console.log(frontmatters);
  return frontmatters;
};

getFrontmatters();
