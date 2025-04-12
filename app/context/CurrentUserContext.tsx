// app/context/CurrentUserContext.tsx
"use client";

import { createContext, useContext } from "react";

export interface CurrentUser {
  _id: string;
  name: string;
  email: string;
  favoriteIds: string[];
  createdAt: Date;
}

export const CurrentUserContext = createContext<CurrentUser | null>(null);

export const useCurrentUser = () => useContext(CurrentUserContext);
