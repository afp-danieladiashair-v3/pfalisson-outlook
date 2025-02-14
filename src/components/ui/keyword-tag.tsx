
import { Keyword } from "@/types/common";

interface KeywordTagProps {
  keyword: Keyword;
  className?: string; // Adicionando className como prop opcional
}

export const KeywordTag = ({ keyword, className }: KeywordTagProps) => (
  <div className={`flex items-center gap-1 text-primary-500 ${className || ''}`}>
    <keyword.icon className="w-4 h-4" />
    <span className="text-sm">{keyword.text}</span>
  </div>
);
