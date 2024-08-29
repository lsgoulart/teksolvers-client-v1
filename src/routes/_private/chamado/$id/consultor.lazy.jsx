import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

import InputCardInfos from '@/components/input-card-infos/index';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Spinner from '@/components/ui/spinner';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import items from '@/mock/tickets.json';
import { Check, SendIcon } from 'lucide-react';
import { useMemo } from 'react';

import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const Route = createLazyFileRoute('/_private/chamado/$id/consultor')({
  component: TicketConsultor
})

function TicketConsultor() {
  const { id } = Route.useParams();
  console.log(id)

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    console.log('submit', e.target.description.value);
  }

  const mock = useMemo(() => {
    return items.find(item => item.numero === id);
  }, [id])

  return (
    <>
      <Helmet>
        <title>TekSolvers - #{mock.numero}</title>
      </Helmet>

      <main className="grid flex-1 max-w-7xl m-auto items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="main">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="main">Histórico</TabsTrigger>
              <TabsTrigger value="assistants">Assistentes A.I</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="main" className="grid grid-cols-[minmax(auto,65%)_minmax(auto,450px)] gap-2 items-start">
            <Card>
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {mock.titulo}
                  </CardTitle>
                  <div className="flex gap-2 mt-0">
                    <p className="text-xs text-muted-foreground">{mock.numero} - <span className="text-xs text-muted-foreground">{format(new Date(mock.data_criacao), 'dd-MM-yyyy')}</span></p>
                  </div>
                </div>
                <Badge variant="secondary">{mock.status}</Badge>
              </CardHeader>

              <CardContent className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-16rem)] pt-0 pr-0">
                <ScrollArea className="h-full flex flex-col pr-4">
                  {mock.mensagens.map((item, i) => (
                    <Card x-chunk="dashboard-01-chunk-0" key={`card_${i}`} className={`mb-4 ${i % 2 === 0 ? 'bg-muted' : 'bg-slate-200'}`} >
                      <CardHeader className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src={item.usuario.imagem} alt="@person" className="bg-slate-50" />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>

                        <div className="flex items-center justify-between w-full">
                          <div>
                            <CardTitle className="font-medium text-sm">{item.usuario.nome}</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground">
                            {formatDistance(
                            new Date(item.data),
                            new Date(),
                            { addSuffix: true, locale: ptBR }
                          )}
                            </CardDescription>
                          </div>
                          <p className="text-xs text-muted-foreground"></p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.mensagem}</p>
                      </CardContent>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>

              <CardFooter className="border-t p-4">
                <form className="flex items-center w-full space-x-2" onSubmit={handleSubmitMessage}>
                  <Input id="message" placeholder="Descreva aqui o problema" className="flex-1" autoComplete="off" />
                  <Button type="submit" size="icon">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>

            <InputCardInfos className="sticky top-6 w-full" />
          </TabsContent>

          <TabsContent value="assistants" className="mt-0 grid grid-cols-[minmax(auto,65%)_minmax(auto,450px)] gap-2 items-start">
            <Card>
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle>
                    {mock.numero}
                  </CardTitle>
                  <span className="text-xs text-muted-foreground">{format(new Date(mock.data_criacao), 'dd-MM-yyyy')}</span>
                </div>
                <Badge variant="secondary">{mock.status}</Badge>
              </CardHeader>

              <CardContent className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-16rem)] pt-0 pr-0">
                <ScrollArea className="h-full flex flex-col pr-4">
                  {mock.assistentes.map((item) => (
                    <Card key={`assistant_message_${item.id}`} x-chunk="dashboard-01-chunk-0" className="mb-4 bg-muted">
                      <CardHeader className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src={item.assistente.imagem} alt="@person" className="bg-slate-50" />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>

                        <div className="flex items-center justify-between w-full">
                          <div>
                            <CardTitle className="font-medium text-sm">{item.assistente.nome}</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground">
                              5 minutos atrás
                            </CardDescription>
                          </div>
                          <p className="text-xs text-muted-foreground"></p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.mensagem}</p>
                      </CardContent>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>

              <CardFooter className="border-t p-4">
                <form className="flex items-center w-full space-x-2" onSubmit={handleSubmitMessage}>
                  <Input id="message" placeholder="Converse com seus assistentes" className="flex-1" autoComplete="off" />
                  <Button type="submit" size="icon">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>

            <Card className="w-[450px]">
              <CardHeader>
                <CardTitle>Seus assistentes</CardTitle>
                <CardDescription>Acompanhe abaixo o progresso do trabalho de seus assistentes.</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <Card className="flex py-2 px-4 items-center bg-muted">
                  <Avatar className="mr-2">
                    <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Boo" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <CardTitle>Astro</CardTitle>

                  <Spinner className="ml-auto" />
                </Card>

                <Card className="flex py-2 px-4 items-center bg-muted">
                  <Avatar className="mr-2">
                    <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Patches" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>

                  <CardTitle>C-3PO</CardTitle>

                  <Check className="ml-auto h-4 w-4 text-green-500" />
                </Card>

                <Card className="flex py-2 px-4 items-center bg-muted">
                  <Avatar className="mr-2">
                    <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Samantha" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <CardTitle>R2-D2</CardTitle>

                  <Check className="ml-auto h-4 w-4 text-green-500" />
                </Card>

                <Card className="flex py-2 px-4 items-center bg-muted">
                  <Avatar className="mr-2">
                    <AvatarImage src="https://api.dicebear.com/9.x/bottts/svg?seed=Sammy" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <CardTitle>Baymax</CardTitle>

                  <Spinner className="ml-auto" />
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}