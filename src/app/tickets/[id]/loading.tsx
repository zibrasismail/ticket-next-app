import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[150px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>

      <Separator className="my-6" />

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-7 w-[200px]" />
            </CardTitle>
            <CardDescription>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[80px]" />
              </div>
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[80px]" />
              <Skeleton className="h-6 w-[150px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-[90px]" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-[100px]" />
                <Skeleton className="h-8 w-[100px]" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-[120px]" />
              <Skeleton className="h-8 w-[120px]" />
            </div>
            <Skeleton className="h-8 w-[100px]" />
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
