"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../Container";
import Link from "next/link";
import { Button } from "../ui/button";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import SearchInput from "../SearchInput";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";


const Navbar = () => {
  const router = useRouter();
  const {userId} = useAuth();

  return (
    <div className="sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
         <Link href="/"><h1 className="text-3xl font-bold text-blue-900 dark:text-slate-400">jobify<span className="text-blue-400 text-4xl dark:text-blue-300">.</span></h1></Link>
          <SearchInput />
         <div className="flex items-center gap-4">
          <div className="">
            <ModeToggle />
            <NavMenu />
          </div>
          <UserButton  afterSignOutUrl="/"/>
          {!userId && (
            <div className="flex items-center gap-3">
              <Button variant="outline"  size="sm" onClick={() => router.push("/sign-in")}>Sign In</Button>
              <Button size="sm" onClick={() => router.push("/sign-up")}>Sign Up</Button>
            </div>
          )}
         </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar;