'use client'

import { useHomePageContext } from "./contexts/HomePageContext";

export default function Home() {

  const { goToNextRoute } = useHomePageContext();



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page One</h1>

      <button onPointerDown={goToNextRoute}>ir para</button>
    </main>
  );
}
