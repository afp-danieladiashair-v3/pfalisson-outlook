
import { Keyword } from "@/types/common";

interface KeywordTagProps {
  keyword: Keyword;
}

export const KeywordTag = ({ keyword }: KeywordTagProps) => (
  <div className="flex items-center gap-1 text-primary-500">
    <keyword.icon className="w-4 h-4" />
    <span className="text-sm">{keyword.text}</span>
  </div>
);
