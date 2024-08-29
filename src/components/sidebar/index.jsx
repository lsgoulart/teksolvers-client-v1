import {
  BookOpenText,
  LayoutGrid,
  LogOut,
  Ticket
} from "lucide-react";

import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 px-3 py-4 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center px-2">
        <Link className="mb-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 transition-transform ease-in-out duration-300 translate-x-0 gap-2" href="/dashboard">
          <Ticket className="w-6 h-6 mr-1" />
          <h1 className="font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 translate-x-0 opacity-100">TekSolvers</h1>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 w-full justify-start h-10 mb-1"
        >
          <LayoutGrid className="mr-4 h-5 w-5" />
          <span className="">Dashboard</span>
        </Link>

        <Link
          to="/chamados"
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 w-full justify-start h-10 mb-1"
        >
          <Ticket className="h-5 w-5 mr-4" />
          <span className="">Meus chamados</span>
        </Link>

        <Link
          to="/sobre-o-projeto"
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 w-full justify-start h-10 mb-1"
        >
          <BookOpenText className="h-5 w-5 mr-4" />
          <span className="">Sobre o projeto</span>
        </Link>

      </nav>

      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="/"
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 w-full justify-start h-10 mb-1"
        >
          <LogOut className="h-5 w-5 mr-4" />
          <span className="">Sair</span>
        </Link>
      </nav>
    </aside>
  );
}