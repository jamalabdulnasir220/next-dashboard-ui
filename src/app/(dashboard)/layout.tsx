import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%]  md:w-[15%] sm:w-[16%] p-4  overflow-scroll">
        <Link
          href="/"
          className="flex items-center justify-center md:justify-start sm:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden md:block sm:block text-xs font-bold">
            School Management
          </span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%]  md:w-[85%] sm:w-[84%] bg-[#f7f8fa]  overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
