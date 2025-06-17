import {
  ArchiveRestore,
  Calendar,
  ChevronDown,
  ChevronUp,
  ClipboardX,
  Home,
  Inbox,
  MonitorDot,
  MoreHorizontal,
  Search,
  Settings,
  SlidersHorizontal,
  SquarePlay,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const items: { title: string; url: string; icon: React.ReactNode }[] = [
  {
    title: "Project",
    url: "#",
    icon: <Home />,
  },
  {
    title: "Inbox",
    url: "#",
    icon: <Inbox />,
  },
  {
    title: "Calendar",
    url: "#",
    icon: <Calendar />,
  },
  {
    title: "Search",
    url: "#",
    icon: <Search />,
  },
  {
    title: "Settings",
    url: "#",
    icon: <Settings />,
  },
];
const actions: { title: string; url: string; icon: React.ReactNode }[] = [
  {
    title: "Project",
    url: "#",
    icon: <ArchiveRestore />,
  },
  {
    title: "Canceled Sheets",
    url: "#",
    icon: <ClipboardX />,
  },
  {
    title: "Monitor",
    url: "#",
    icon: <MonitorDot />,
  },
  {
    title: "Properties",
    url: "#",
    icon: <SlidersHorizontal />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas" className="h-full">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <p>Select Company</p>
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem>
                  <span>Softigital</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>5code</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="mx-[0]" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title == "Inbox" && (
                    <SidebarMenuBadge className="bg-main">24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {actions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction>
                        <MoreHorizontal />
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start">
                      <DropdownMenuItem>
                        <span>Edit {item.title}</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Delete {item.title}</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Docs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible">
                  <CollapsibleTrigger asChild className="w-full">
                    <SidebarMenuButton>
                      <SquarePlay />
                      <span>Getting Started</span>
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton>
                          <Link href={"#"}>
                            <span className="capitalize">installation</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton>
                          <Link href={"#"}>
                            <span className="capitalize">api</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>References</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Building your Application</SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuButton>Routing</SidebarMenuButton>
                    <SidebarMenuButton>Data Fetching</SidebarMenuButton>
                    <SidebarMenuButton>Rendring</SidebarMenuButton>
                    <SidebarMenuButton>Cashing</SidebarMenuButton>
                    <SidebarMenuButton>Styling</SidebarMenuButton>
                    <SidebarMenuButton>Optimizing</SidebarMenuButton>
                    <SidebarMenuButton>Testing</SidebarMenuButton>
                    <SidebarMenuButton>Upgrading</SidebarMenuButton>
                    <SidebarMenuButton>Deploying</SidebarMenuButton>
                    <SidebarMenuButton>Examples</SidebarMenuButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
        <SidebarFooter className="sticky bottom-0 bg-primary-foreground">
        <SidebarSeparator className="mx-[0]" />
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Jemy
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Report</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Watch</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
