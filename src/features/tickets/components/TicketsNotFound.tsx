"use client"

import { Button } from "@/components/ui/button"
import { Ticket } from "lucide-react"

export default function TicketsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] animate-fade-up opacity-0" 
         style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
      <div className="rounded-full bg-muted p-4 mb-4">
        <Ticket className="h-12 w-12 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">No Tickets Available</h2>
      <p className="text-muted-foreground text-center mb-6 max-w-md">
        There are currently no tickets available. Please check back later for new events.
      </p>
      <Button 
        variant="outline" 
        onClick={() => window.location.reload()}
        className="gap-2"
      >
        Refresh Page
      </Button>
    </div>
  )
}
