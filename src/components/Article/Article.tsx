export interface ArticleProps {
  children: React.ReactNode;
}

export const Article = ({ children }: ArticleProps) => {
  return <article>{children}</article>;
};
