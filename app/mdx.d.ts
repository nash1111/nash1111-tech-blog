declare module "*.mdx" {
  export const frontmatter: { title: string; description: string };

  export default function (props: Record<string, never>): JSX.Element;
}
