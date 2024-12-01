import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function TicketSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-2">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-8 w-8 rounded-full" />
      </CardFooter>
    </Card>
  )
}
