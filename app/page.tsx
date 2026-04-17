import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-2xl font-bold">Welcome to Draw Sync</p>
      <UserButton />
    </div>
  );
}
