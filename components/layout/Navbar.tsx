"use client";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="">
      
      <UserButton  afterSignOutUrl="/"/>
    </div>
  )
}

export default Navbar