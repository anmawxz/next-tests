'use client'

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  //rotas
  const route = useRouter();

  //ir para outra rota
  const goToNextRoute = () => {
    route.push("/areas/another");
  };

  //ir pra bingo
  const goToBingo = () => {
    route.push("../areas/bingo/");
  };




  const value = {
    //rotas
    goToNextRoute,
    goToBingo
  };

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};
