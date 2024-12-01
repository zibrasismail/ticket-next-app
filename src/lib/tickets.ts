export type TicketStatus = 'OPEN' | 'PROGRESS' | 'DONE'

export type Ticket = {
  id: number
  name: string
  price: number
  content: string
  status: TicketStatus
}

export const tickets: Ticket[] = [
  { 
    id: 1, 
    name: "Concert A", 
    price: 50, 
    content: "Amazing live performance",
    status: 'OPEN'
  },
  { 
    id: 2, 
    name: "Theater Show B", 
    price: 30, 
    content: "Dramatic play",
    status: 'PROGRESS'
  },
  { 
    id: 3, 
    name: "Sports Event C", 
    price: 75, 
    content: "Exciting match",
    status: 'DONE'
  },
]
