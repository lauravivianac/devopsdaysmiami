"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SponsorModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const SponsorModalContext = createContext<SponsorModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function SponsorModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SponsorModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </SponsorModalContext.Provider>
  );
}

export function useSponsorModal() {
  return useContext(SponsorModalContext);
}
