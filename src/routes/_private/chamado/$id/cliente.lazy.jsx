import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

import InputCardInfosCliente from '@/components/input-card-infos/cliente';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { SendIcon } from 'lucide-react';

export const Route = createLazyFileRoute('/_private/chamado/$id/cliente')({
  component: TicketCliente
})

function TicketCliente() {
  const handleSubmitMessage = (e) => {
    e.preventDefault();
    console.log('submit', e.target.description.value);
  }

  return (
    <>
      <Helmet>
        <title>TekSolvers - Novo ticket</title>
      </Helmet>

      <main className="grid flex-1 max-w-7xl m-auto items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="main">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="main">Histórico</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="main" className="grid grid-cols-[minmax(auto,65%)_minmax(auto,450px)] gap-2 items-start">
            <Card>
              <CardContent className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-11rem)] pr-0">
                <ScrollArea className="h-full flex flex-col pr-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Card x-chunk="dashboard-01-chunk-0" key={`card_${i}`} className="mb-4 bg-muted">
                      <CardHeader className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src="https://api.dicebear.com/9.x/personas/svg" alt="@person" className="bg-slate-50" />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>

                        <div className="flex items-center justify-between w-full">
                          <div>
                            <CardTitle className="font-medium text-sm">Usuário novo</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground">
                              5 dias atrás
                            </CardDescription>
                          </div>
                          <p className="text-xs text-muted-foreground"></p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam distinctio dolores libero sint hic, rem, eum dolor at consequuntur in laborum, perferendis quia vel odit tempora placeat expedita nihil perspiciatis!</p>
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

            <InputCardInfosCliente className="sticky top-6 w-full" />
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}