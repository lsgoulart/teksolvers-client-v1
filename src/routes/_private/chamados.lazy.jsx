import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

import {
  MoreHorizontal
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent
} from "@/components/ui/tabs";
import mock from '@/mock/tickets.json';
import { Link } from '@tanstack/react-router';
import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const Route = createLazyFileRoute('/_private/chamados')({
  component: MyTickets
})

export function MyTickets() {
  console.log(mock)
  return (
    <>
      <Helmet>
        <title>TekSolvers - Meus Chamados</title>
      </Helmet>

      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            {/*<TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
               <TabsTrigger value="active">Abertos</TabsTrigger>
              <TabsTrigger value="draft">Encerrados</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Arquivados
              </TabsTrigger>
            </TabsList> */}
            <div className="ml-auto flex items-center gap-2">
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filtrar
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Abertos
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Em andamento</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Concluídos
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu> */}

              {/* <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Criar ticket
                </span>
              </Button> */}
            </div>
          </div>

          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Tickets</CardTitle>
                <CardDescription>
                  Veja abaixo os tickets criados para você.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="">#</span>
                      </TableHead>
                      <TableHead>Titulo</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Prioridade
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Criado em
                      </TableHead>
                      <TableHead>
                        <span>Ações</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mock.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="hidden sm:table-cell text-xs">
                          {item.numero}
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.titulo}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{item.status}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">{item.prioridade}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell space-x-2">
                          {format(new Date(item.data_criacao), 'dd-MM-yyyy')}
                          <p className="text-xs text-muted-foreground">{formatDistance(
                            new Date(item.data_criacao),
                            new Date(),
                            { addSuffix: true, locale: ptBR }
                          )}</p>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Link to={`/chamado/${item.numero}/consultor`}>Ver como consultor</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Link to={`/chamado/${item.numero}/cliente`}>Ver como cliente</Link>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Exibindo <strong>1-{mock.length}</strong> de <strong>{mock.length}</strong>{" "}
                  tickets
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}


