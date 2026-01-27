export interface Frontmatter {
  title: string;
  description: string;
  published: string;
  thumbnail?: string;
  tags?: string[];
}

declare module "*.mdx" {
  export const frontmatter: Frontmatter;

  export default function (props: Record<string, never>): JSX.Element;
}
