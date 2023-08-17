import './globals.css'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </html>
  )
}
