"use client"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const user = {
  "name": "João",
  
  "img": '/Cesar.png'
}

export default function Page() {
   const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getSession() {
      try {
        const response = await fetch("http://localhost:5500/api/auth/get-session", {
          method: "GET",
          credentials: "include",
        })

        const data = await response.json()

        if (data?.user) {
          setUser(data.user)
        }
      } catch (error) {
        console.error("Erro ao buscar sessão:", error)
      } finally {
        setLoading(false)
      }
    }

    getSession()
  }, [])
  return (
    <SidebarProvider defaultOpen='false'>
      
      <SidebarInset>
        <header className="flex w-full h-16  shrink-0 items-center gap-2 border-b">
          <div className=" flex items-center gap-2 px-3 ml-10">

            <Separator
              orientation="vertical"
              className="mx-4 data-vertical:h-4 data-vertical:self-auto" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="md:block">

                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          
           
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="h-[40vh] flex rounded-xl   items-center justify-center ">
            <div>
              <Image
              alt="boy wlaking with a celular and coffe"
                src={'/DrawKit_Vector_Illustrations_Coffe call.svg'}
                width={250}
                height={250} />
            </div>
            <div>
              
                <>
                  <p>Olá, {user?.name}!</p>
                  <p className="text-5xl">Estamos felizes em ter você aqui.</p>
                  <p className="text-2xl">Tudo o que você precisa para organizar sua vida escolar em um só lugar.</p>
                </>
             

            </div>
          </div>
          <div className="grid  auto-rows-min gap-4  md:grid-cols-3">

            <div className="aspect-video h-[44vh] max-w-3/3 rounded-xl flex flex-col items-center bg-muted/50 py-2" render={<Link href={'/'} />} >
              <p className="text-lg">Tarefas pendentes</p>
              <div>
                Aplicações Futuras
              </div>
            </div>



            <div className="aspect-video min-h-[44vh] max-w-3/3 rounded-xl flex flex-col items-center bg-muted/50 py-2" >
              <p className="text-lg">Aulas de hoje</p>
              <div>
                Aplicações Futuras
              </div>
            </div>



            <div className="aspect-video h-[44vh] max-w-3/3 rounded-xl flex flex-col items-center bg-muted/50 py-2" >
              <p className="text-lg justify-self-start">Calendário Semanal</p>
              <div className=" justify-self-center">
                Aplicações Futuras
              </div>
            </div>

          </div>

        </div>
      </SidebarInset>

    </SidebarProvider >
  );
}
