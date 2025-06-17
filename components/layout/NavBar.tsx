import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeToggler } from "../common/ThemeToggler";


const NavBar = () => {
  return (
    <div className="flex flex-row justify-between px-[20px] py-[10px] sticky top-0 bg-background z-40">
      {/* RIGHT */}
      <div className="right">
        <SidebarTrigger className="cursor-pointer" />
      </div>
      <div className="left flex items-center gap-2 flex-row-reverse">
        <DropdownMenu >
          <DropdownMenuTrigger className="cursor-pointer !border-0 rounded-full">
            <Avatar className="">
              <AvatarImage src="user.png" />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mt-1">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default NavBar;
