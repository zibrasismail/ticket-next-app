import { Clock, CheckCircle2, CircleDot, LucideIcon } from "lucide-react"
import { TicketStatus } from "../types"

export const statusConfig: Record<TicketStatus, {
  icon: LucideIcon,
  color: string,
  bgColor: string
}> = {
  'OPEN': {
    icon: CircleDot,
    color: "text-white dark:text-white",
    bgColor: "bg-blue-500"
  },
  'PROGRESS': {
    icon: Clock,
    color: "text-white dark:text-white",
    bgColor: "bg-yellow-500"
  },
  'DONE': {
    icon: CheckCircle2,
    color: "text-white dark:text-white",
    bgColor: "bg-green-500"
  }
}
