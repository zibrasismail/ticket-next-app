import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="container max-w-4xl">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-9 w-[300px]" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-6 w-[100px]" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-[90%]" />
              <Skeleton className="h-5 w-[80%]" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Skeleton className="h-10 w-[100px]" />
            <Skeleton className="h-10 w-[150px]" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
