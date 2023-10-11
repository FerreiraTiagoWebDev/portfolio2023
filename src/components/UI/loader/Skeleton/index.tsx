import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function SkeletonLoader({ count, ...props }: SkeletonProps) {
  return (
    <Skeleton
      baseColor="#f8f8f8"
      count={count}
      highlightColor="#eee"
      {...props}
    />
  );
}
