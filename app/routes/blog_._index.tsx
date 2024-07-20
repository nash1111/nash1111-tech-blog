
import { ContentCard } from "~/components/ContentCard";
import { posts } from "~/lib/posts";

export default function BlogListComponent() {

    return (
        <div className="p-10 flex flex-wrap gap-4 w-full justify-center">
            {posts.map(post => (
                <ContentCard key={post.path} path={post.path} frontmatter={post.data.frontmatter} />
            ))}
        </div>
    );
}