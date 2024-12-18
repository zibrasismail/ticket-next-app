"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Ticket } from "../types";
import { statusConfig } from "../config/status";

interface TicketCardProps {
  ticket: Ticket;
  index: number;
}

export function TicketCard({ ticket, index }: TicketCardProps) {
  const StatusIcon = statusConfig[ticket.status].icon;

  return (
    <Card
      className="w-full opacity-0 animate-fade-up hover:shadow-lg transition-shadow duration-300"
      style={{
        animationDelay: `${(index + 1) * 0.2}s`,
        animationFillMode: "forwards",
      }}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{ticket.name}</CardTitle>
          <div
            className={cn(
              "px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-2",
              statusConfig[ticket.status].bgColor,
              statusConfig[ticket.status].color
            )}
          >
            <StatusIcon className="w-3.5 h-3.5" />
            {ticket.status}
          </div>
        </div>
        <CardDescription>${ticket.price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{ticket.content}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="transition-transform duration-200 hover:scale-105"
        >
          <Link
            href={`/tickets/${ticket.id}`}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
