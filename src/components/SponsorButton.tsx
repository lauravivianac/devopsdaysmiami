"use client";

import { useSponsorModal } from "@/context/SponsorModalContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SponsorButton({ children, className = "" }: Props) {
  const { openModal } = useSponsorModal();
  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
