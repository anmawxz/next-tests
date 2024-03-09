'use client'
import { useRouter } from "next/navigation";

export default function Neuro() {
  const route = useRouter();

 
  const goToSelect = () => {
    route.push("/components/");
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <h1>Another Route Page</h1>
      <button onPointerDown={goToSelect}>ir para</button>
    </main>
  );
}
