"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const goToRegister = () => {
    router.push("/register");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Student portfolio app under construction...</div>
      <button onClick={goToRegister}>Register</button>
    </main>
  );
}
