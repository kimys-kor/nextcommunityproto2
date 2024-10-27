"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  title: string;
  subMenu: string;
}

interface BreadcrumbProps {
  breadcrumbData: BreadcrumbItem;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbData }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  return (
    <nav className="w-full bg-white rounded-2xl flex items-center shadow-lg transition-all duration-300 mt-3 mb-2">
      <div className="h-9 md:h-12 font-bold bg-gradient-to-r from-sky-500 to-sky-600 w-1/5 rounded-l-2xl flex justify-center items-center text-white">
        <p className="tracking-wider text-sm md:text-xl font-medium">
          {breadcrumbData.title}
        </p>
      </div>
      <div className="h-9 md:h-12 border-solid border-sky-500 border-4 w-4/5 px-5 md:px-10 flex items-center rounded-r-2xl gap-6 md:gap-10 bg-gray-50 hover:bg-gray-100 transition-all duration-300">
        <span
          className={`text-sm font-medium md:text-lg text-gray-700 truncate cursor-pointer hover:text-sky-600 hover:scale-105 transition-all duration-300`}
        >
          {breadcrumbData.subMenu}
        </span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
