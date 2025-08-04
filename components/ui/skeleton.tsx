export function Skeleton({ width = '100%', height = '1rem' }: { width?: string; height?: string }) {
  return (
    <div
      className="bg-gray-300 dark:bg-gray-700 animate-pulse rounded"
      style={{ width, height }}
    ></div>
  );
}
