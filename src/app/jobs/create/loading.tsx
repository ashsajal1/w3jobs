import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return (
        <div className="p-2 grid grid-cols-1 gap-2">
            <Skeleton className="w-full h-[40px] rounded" />
            <Skeleton className="w-full h-[40px] rounded" />
            <div className="flex items-center gap-2">
                <Skeleton className="w-full h-[40px] rounded" />
                <Skeleton className="w-full h-[40px] rounded" />
            </div>
            <Skeleton className="w-full h-[400px] rounded" />
            <Skeleton className="w-full h-[400px] rounded" />
            <div className="flex items-center gap-2">
                <Skeleton className="w-full h-[40px] rounded" />
                <Skeleton className="w-full h-[40px] rounded" />
            </div>
            <Skeleton className="w-full h-[40px] rounded" />
            <Skeleton className="w-full h-[40px] rounded" />
        </div>
    )
}
