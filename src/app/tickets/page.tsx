"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function TicketsPage() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [content, setContent] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ name, price, content })
    // Reset form and redirect to home
    setName("")
    setPrice("")
    setContent("")
    router.push("/")
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Create New Ticket</h1>
      <Card className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>New Ticket</CardTitle>
            <CardDescription>Fill in the details for the new ticket</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Event Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Event Description</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Create Ticket</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

