import { Ticket } from "../types";
import { tickets } from "../data/tickets";

export async function getTicket(id: string): Promise<Ticket | undefined> {
  // Simulate API delay
  // throw new Error("Failed to fetch ticket");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tickets.find((t) => t.id === parseInt(id));
}
