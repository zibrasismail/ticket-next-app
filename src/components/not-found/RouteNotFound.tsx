"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function RouteNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] animate-fade-up opacity-0" 
         style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
      <div className="rounded-full bg-muted p-4 mb-4">
        <FileQuestion className="h-12 w-12 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Page Not Found</h2>
      <p className="text-muted-foreground text-center mb-6 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
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
            Home Page
          </Link>
        </Button>
      </div>
    </div>
  )
}
