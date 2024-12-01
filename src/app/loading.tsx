import { Separator } from "@/components/ui/separator"
import { TicketSkeleton } from "@/features/tickets/components/TicketSkeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-[120px]" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TicketSkeleton key={index} />
        ))}
      </div>
    </main>
  )
}
