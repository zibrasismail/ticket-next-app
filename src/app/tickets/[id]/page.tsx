"use client"

import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { tickets } from "@/lib/tickets"
import { use } from "react"

export default function TicketPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const resolvedParams = use(params)
  const ticket = tickets.find(t => t.id === parseInt(resolvedParams.id))
  
  if (!ticket) {
    notFound()
  }

  return (
    <div className="container max-w-4xl animate-fade-up opacity-0" 
         style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
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
          <Button 
            variant="outline" 
            onClick={() => router.back()}
          >
            Back
          </Button>
          <Button 
            className="transition-transform duration-200 hover:scale-105"
            onClick={() => router.push(`/tickets/${ticket.id}/purchase`)}
          >
            Purchase Ticket
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}