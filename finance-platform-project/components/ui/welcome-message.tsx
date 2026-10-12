"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMessage = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-xl text-white font-semibold lg:text-2xl">
        Welcome Back {isLoaded && user?.firstName ? `, ${user.firstName}` : ""}
      </h2>
      <p className="font-semibold  text-xs lg:text-sm text-[#89b6fd]">
        This is your Financial Overview Report
      </p>
    </div>
  );
};
