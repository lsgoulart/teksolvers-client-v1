import Files from "@/components/files/index"
import Responsible from "@/components/responsible/index"
import Tags from "@/components/tags/index"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function InputCardInfos({ className }) {
  return (
    <Card className={cn('w-[450px]', className)}>
      <CardHeader>
        <CardTitle>Ações</CardTitle>
        <CardDescription>Veja abaixo as informações complementares que lhe ajudarão a resolver este chamado.</CardDescription>
      </CardHeader>
      <div className="p-5">
        <Label htmlFor="nivel">Complexidade</Label>
        <Tabs defaultValue="n1">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="n1">Nível 1</TabsTrigger>
            <TabsTrigger value="n2">Nível 2</TabsTrigger>
            <TabsTrigger value="n3">Nível 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tipo">Tipo</Label>
              <Select>
                <SelectTrigger id="tipo">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="incidente">Incidente</SelectItem>
                  <SelectItem value="suporte">Suporte</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="prioridade">Prioridade</Label>
              <Select>
                <SelectTrigger id="prioridade">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="baixa">Baixa</SelectItem>
                  <SelectItem value="media">Média</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Files />

            <Tags />

            <Responsible />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}