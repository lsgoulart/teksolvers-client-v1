import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { createFileRoute, Outlet } from '@tanstack/react-router';

import {
  BookOpenText,
  LayoutGrid,
  PanelLeft,
  Ticket
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_private')({
  component: LayoutComponent
})

function LayoutComponent() {
  return (
    <div className="flex items-start">
      <Sidebar />

      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-2 sm:py-2 sm:pl-60">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    to="/"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Ticket className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">TekSolvers</span>
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LayoutGrid className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    to="/chamados"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Ticket className="h-5 w-5" />
                    Meus chamados
                  </Link>
                  <Link
                    to="/sobre-o-projeto"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <BookOpenText className="h-5 w-5" />
                    Sobre o projeto
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="overflow-hidden ml-auto rounded-full flex items-center gap-2 cursor-pointer">
                  <Avatar>
                    <AvatarImage src="https://api.dicebear.com/9.x/personas/svg?seed=Casper" alt="@robot" className="bg-slate-50" />
                    <AvatarFallback>NA</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="bottom" sideOffset={4}>
                <DropdownMenuLabel>
                  Nome do atendente <br />
                  <span className="font-light text-xs text-muted-foreground">Consultor N1</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          <Separator />

          <Outlet />
        </div>
      </div>
    </div>
  )
}