
import { ContentCard } from "~/components/ContentCard";
import { diaries } from "~/lib/diary";

export default function DiaryListComponent() {

    return (
        <div className="p-10 flex flex-wrap gap-4 w-full justify-center">
            {diaries.map(diary => (
                <ContentCard key={diary.path} path={diary.path} frontmatter={diary.data.frontmatter} />
            ))}
        </div>
    );
}