export type TicketStatus = 'OPEN' | 'PROGRESS' | 'DONE'

export type Ticket = {
  id: number
  name: string
  price: number
  content: string
  status: TicketStatus
}
