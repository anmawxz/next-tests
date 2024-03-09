'use client'
import { useRouter } from "next/navigation";

export default function SelectStage() {
  const route = useRouter();

  //voltando pra raiz
  const goToRoot = () => {
    route.push("/");
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <h1>Bingo Page</h1>
      <button onPointerDown={goToRoot}>ir para</button>
    </main>
  );
}
