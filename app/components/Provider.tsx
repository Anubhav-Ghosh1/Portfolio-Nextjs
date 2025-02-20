"use client";

import { ThemeProvider } from "next-themes"; // Ensure using a client-side theme provider

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
