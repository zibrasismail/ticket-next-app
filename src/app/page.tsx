import { Separator } from "@/components/ui/separator";
import { TicketCard } from "@/features/tickets/components/TicketCard";
import TicketsNotFound from "@/features/tickets/components/TicketsNotFound";
import { getTickets } from "@/features/tickets/queries/get-tickets";

export default async function Home() {
  const tickets = await getTickets();

  if (tickets.length === 0) {
    return <TicketsNotFound />;
  }

  console.log("home page");

  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Tickets</h2>
          <p className="text-sm text-muted-foreground">
            Browse through available tickets
          </p>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tickets.map((ticket, index) => (
          <TicketCard key={ticket.id} ticket={ticket} index={index} />
        ))}
      </div>
    </main>
  );
}
