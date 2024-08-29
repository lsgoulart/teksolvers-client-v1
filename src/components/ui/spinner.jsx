import { cn } from "@/lib/utils";

export default function Spinner({className}) {
  return (
    <div className={cn('w-4 h-4 border-2 border-blue-500 rounded-full animate-spin border-t-transparent', className)} />
  )
}