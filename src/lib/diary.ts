import * as postEffectTSPart1 from "~/routes/diary.effectts_part1.mdx";

export const diaries = [
  { path: "/diary/effectts_part1", data: postEffectTSPart1 },
];
export function getDiaryDataByPath(path: string) {
  const diary = diaries.find((diary) => diary.path === path);
  return diary ? diary.data : null;
}
