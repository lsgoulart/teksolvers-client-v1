import Files from "@/components/files/index"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function InputCardInfosCliente({ className }) {
  return (
    <Card className={cn('w-[450px]', className)}>
      <CardHeader>
        <CardTitle>Evidências</CardTitle>
        <CardDescription>Preencha os campos abaixo para complementar o seu chamado</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Files />
        </form>
      </CardContent>
    </Card>
  )
}