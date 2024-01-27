"use client";
import { Input } from "./ui/input";
import {Search} from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative rounded-lg hidden sm:block">
      <Search className="absolute h-5 w-5 top-3 left-4 text-muted-foreground"/>
      <Input  placeholder="Search" className="pl-10 bg-primary/10 outline-none border-none rounded-full"/>
    </div>
  )
}

export default SearchInput