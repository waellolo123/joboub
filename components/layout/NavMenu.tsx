"use client"

import * as React from "react"
import { BookOpenCheck, ChevronsUpDown, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export function NavMenu() {
 const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("/hotel/new")}>
          <Plus size={15} className="mr-2"/> Add Hotel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/my-hotels")}>
          My Hotels
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/my-booking")}>
         <BookOpenCheck size={15}  className="mr-2"/> My Booking
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
