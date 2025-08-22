import { Skeleton } from "@/components/ui/skeleton";

export function ChordSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Skeleton className="h-[250px] w-[250px] rounded-lg" />
      </div>
      
      <div className="flex justify-center">
        <Skeleton className="h-12 w-32 rounded-lg" />
      </div>
      
      <div className="space-y-3">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}