export type ColumnType<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
  align?: "left" | "center" | "right";
};

export interface GlobalTableProps<T> {
  columns: ColumnType<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  maxHeight?: number;
  className?: string;
}
