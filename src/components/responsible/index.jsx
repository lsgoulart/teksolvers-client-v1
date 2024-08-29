import * as React from "react";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


const list = [
  {
    avatar: 'https://github.com/shadcn.png',
    value: "junior",
    label: "Consultor júnior",
  },
  {
    avatar: 'https://github.com/shadcn.png',
    value: "pleno",
    label: "Consultor pleno",
  },
  {
    avatar: 'https://github.com/shadcn.png',
    value: "senior",
    label: "Consultor sênior",
  },
  {
    avatar: 'https://github.com/shadcn.png',
    value: "specialist",
    label: "Consultor especialista",
  }
]

export default function Responsible() {
  const [selected, setSelected] = React.useState([])

  const handleRemove = (responsible) => {
    setSelected(s => s.filter(t => t !== responsible))
  }

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="responsavel">Responsáveis</Label>
      <div className="flex space-x-2">
        <ComboboxPopover selected={selected} onSelectResponsible={(responsible) => setSelected(state => [...state, responsible])} />
      </div>

      <div className="flex gap-2 flex-wrap">
        {selected.map((responsible) => (
          <Badge key={responsible.value} variant="secondary" className="rounded-2xl p-0.5">
            <Avatar className="w-8 h-8">
              <AvatarImage src={responsible.avatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="pl-2">{responsible.label}</p>
            <Cross2Icon className="w-3 mx-2 cursor-pointer" onClick={() => handleRemove(responsible)}/>
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function ComboboxPopover({ selected, onSelectResponsible }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="w-full flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="md"
            className="w-full h-9 justify-start px-4"
          >
            Adicionar responsável
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Buscar responsável" />
            <CommandList>
              <CommandEmpty>Resposável não encontrado.</CommandEmpty>
              <CommandGroup>
                {list.filter((responsible) => !selected?.includes(responsible)).map((responsible) => (
                  <CommandItem
                    key={`command_${responsible.value}`}
                    value={responsible.value}
                    className="flex gap-2"
                    onSelect={(value) => {
                      onSelectResponsible(
                        list.find((responsible) => responsible.value === value) ||
                        null
                      )
                      setOpen(false)
                    }}
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>{responsible.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}