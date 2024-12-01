"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ticket, Ban } from "lucide-react"

export default function TicketNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] animate-fade-up opacity-0" 
         style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
      <div className="rounded-full bg-muted p-4 mb-4 relative">
        <Ticket className="h-12 w-12 text-muted-foreground" />
        <Ban className="h-12 w-12 text-destructive/60 absolute inset-0 m-auto" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Ticket Not Found</h2>
      <p className="text-muted-foreground text-center mb-6 max-w-md">
        The ticket you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={() => window.history.back()}
          className="gap-2"
        >
          Go Back
        </Button>
        <Button asChild>
          <Link href="/" className="gap-2">
            All Tickets
          </Link>
        </Button>
      </div>
    </div>
  )
}
