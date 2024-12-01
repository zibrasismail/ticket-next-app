import { Ticket } from "../types"
import { tickets } from "../data/tickets"

export async function getTickets(): Promise<Ticket[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  return tickets
}