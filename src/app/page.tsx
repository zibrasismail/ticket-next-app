"use client"

import { Separator } from "@/components/ui/separator"
import { TicketCard } from "@/features/tickets/components/TicketCard"
import TicketsNotFound from "@/features/tickets/components/TicketsNotFound"
import { TicketSkeleton } from "@/features/tickets/components/TicketSkeleton"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { Ticket } from "@/features/tickets/types"
import { getTickets } from "@/features/tickets/queries/get-tickets"

export default function HomeClient() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await getTickets()
        setTickets(data)
      } catch (error) {
        console.error('Error fetching tickets:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTickets()
  }, [])

  if (loading) {
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

  if (tickets.length === 0) {
    return <TicketsNotFound />
  }

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
  )
}
