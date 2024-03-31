"use client"

import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Sidebar from "@/components/Sidebar";
import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"


import "./globals.css";

const mulish = Mulish({ subsets: ["latin"], weight: ["300", "400", "500", "600"]})

const metadata: Metadata = {
  title: "Dashboard",
  description: "A simple dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, {toggle }] = useDisclosure();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={mulish.className}>
       <MantineProvider>
        <AppShell
          // header={{ height: 60}}
          navbar={{
            width: 200,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
        >
            <AppShell.Navbar>
            <Sidebar />
            </AppShell.Navbar>

            <AppShell.Main>
              {children}
            </AppShell.Main>
          </AppShell>
       </MantineProvider>
      </body>
    </html>
  );
}