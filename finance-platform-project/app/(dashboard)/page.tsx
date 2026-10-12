import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <div className="w-full">
        dashboard
        {/* <UserButton /> */}
      </div>
    </Suspense>
  );
}
