export interface ColumnProps {
  children: React.ReactNode;
}

export const Column = ({ children }: ColumnProps) => {
  return <div>{children}</div>;
};

Column.displayName = "Columns.Column";
