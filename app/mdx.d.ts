declare module "*.mdx" {
  export const frontmatter: {
    title: string;
    description: string;
    published: string;
  };

  export default function (props: Record<string, never>): JSX.Element;
}
