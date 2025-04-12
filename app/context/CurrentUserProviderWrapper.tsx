"use client";

import { ReactNode } from "react";
import { CurrentUser, CurrentUserContext } from "./CurrentUserContext";

interface Props {
  currentUser: CurrentUser | null;
  children: ReactNode;
}

const CurrentUserProviderWrapper = ({ currentUser, children }: Props) => {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProviderWrapper;
