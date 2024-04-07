// components/Layout.tsx
import "@/app/globals.css";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
