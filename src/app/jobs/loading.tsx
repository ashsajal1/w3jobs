import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full flex items-start">
      <section className="w-full p-4 flex flex-col gap-2">
        <Skeleton className="w-full h-[100px] rounded" />
        <Skeleton className="w-full h-[100px] rounded" />
        <Skeleton className="w-full h-[100px] rounded" />
        <Skeleton className="w-full h-[100px] rounded" />
        <Skeleton className="w-full h-[100px] rounded" />
        <Skeleton className="w-full h-[100px] rounded" />
        <Skeleton className="w-full h-[100px] rounded" />
      </section>
      <section className="w-full p-4 hidden md:block">
        <Skeleton className="w-[full] h-screen mt-0 rounded" />
      </section>
    </div>
  )
}
