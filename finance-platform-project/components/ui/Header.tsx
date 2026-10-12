import React from "react";
import { Loader2 } from "lucide-react";

import { HeaderLogo } from "@/components/ui/header-logo";
import { Navigation } from "@/components/ui/navigation";
import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import { WelcomeMessage } from "@/components/ui/welcome-message";

const Header = () => {
  return (
    <header className="bg-linear-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>

          <ClerkLoading>
            <Loader2 className="animate-spin size-6 text-slate-400 " />
          </ClerkLoading>
          <ClerkLoaded>
            <div className=" flex w-fit bg-white/10 hover:bg-white/20 active:bg-white/30 p-1 rounded-full h-fit">
              <UserButton />
            </div>
          </ClerkLoaded>
        </div>
        <WelcomeMessage />
      </div>
    </header>
  );
};

export default Header;
