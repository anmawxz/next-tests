'use client'
import { useHomePageContext } from "../contexts/HomePageContext";

export default function SelectStage() {

  const { goToBingo } = useHomePageContext();



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>Select Stage Page</h1>
      <button onPointerDown={goToBingo}>ir para</button>
    </main>
  );
}
