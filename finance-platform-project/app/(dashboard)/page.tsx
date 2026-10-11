import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

async function DashboardContent() {
  await auth.protect();

  return <h1>Dashboard</h1>;
}

export default function Dashboard() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      
      <UserButton />
    </Suspense>
  );
}