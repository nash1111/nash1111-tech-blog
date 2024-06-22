declare module "*.mdx" {
  export const frontmatter: {
    title: string;
    description: string;
    published: string;
    thumbnail?: string;
    tags?: string[];
  };

  export default function (props: Record<string, never>): JSX.Element;
}
