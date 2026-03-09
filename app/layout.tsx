import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Studio Lumière",
  description: "A boutique creative studio specialising in brand identity, web design, and visual storytelling.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
