"use client"
"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import * as React from "react"
import data from "@/obj";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// This is sample data.

export function AppSidebar() {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }
  return (
    <Sidebar >
      <SidebarHeader >
          
        <SidebarMenu >
          <SidebarMenuItem>
            <SidebarMenuButton size="lg h-30" render={<Link href="/dashboard" />}>
              <div
                className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                <Image
                src={'/onlyLogo.png'}
                width={150}
                height={150}/>
              </div>
              <div className="flex flex-col gap-0.5 leading-none mt-10">
                <span className="font-medium">SchoolFlow</span>
                <span className="">v1.6.7</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className={'mt-10'}>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton render={<a href={item.url} className="font-bold text-xl" />}>
                  {item.title}
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton isActive={item.isActive} render={<a href={item.url} />}>
                          {item.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <button
      onClick={handleLogout}
      className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-sidebar-accent mx-3"
    >
      <LogOut size={18} />
      <span>Sair</span>
    </button>
      </SidebarContent>
      <SidebarRail />
      <SidebarTrigger
      className={`w-10 h-10 rounded-full shadow-md transition bg-[#4f00aa] hover:bg-[#3d0085] fixed top-4 left-4 z-50`}>
      <img
        src={'/onlyLogo.png'}
        width={150}
        height={150} />
    </SidebarTrigger>
    </Sidebar>
  );
}
