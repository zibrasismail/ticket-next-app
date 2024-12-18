import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTicket } from "@/features/tickets/queries/get-ticket";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TicketPage({ params }: PageProps) {
  const { id } = await params;
  const ticket = await getTicket(id);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div
        className="container max-w-4xl animate-fade-up opacity-0"
        style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl">{ticket.name}</CardTitle>
            <CardDescription className="text-xl font-semibold">
              ${ticket.price}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg">{ticket.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Link href="/">
              <Button variant="outline">Back</Button>
            </Link>
            <Link href={`/tickets/${ticket.id}/purchase`}>
              <Button className="transition-transform duration-200 hover:scale-105">
                Purchase Ticket
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
