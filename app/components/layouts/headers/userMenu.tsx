"use client";

import Avatar from "../../Avatar";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Profile from "../../Profile";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 md:py-2 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer"
        >
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="z-10 w-72 absolute bg-white overflow-hidden right-0 top-12 text-sm border border-solid border-gray-300">
          <div className="flex flex-col">
            <>
              <Profile setLoggedIn={setLoggedIn} />
              <Link href={"/myinfo"}>
                <div
                  onClick={toggleOpen}
                  className="px-4 py-3 hover:bg-neutral-100 text-lg font-medium text-center"
                >
                  내정보수정
                </div>
              </Link>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
