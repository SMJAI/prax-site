import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prax — AI Systems That Actually Work",
  description: "Production-ready AI systems for teams. Stop letting junior staff struggle with AI. Get senior-level output from day one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="container">
            <header className="header">
              <div className="header-left">
                <Link href="/" className="logo">
                  Prax <span className="logo-arrow">→</span>
                </Link>
                <p className="tagline">AI Systems That Actually Work</p>
              </div>
              <nav className="header-nav">
                <Link href="/" className="header-nav-item">Systems Library</Link>
                <Link href="/#pricing" className="header-nav-item">Pricing</Link>
                <Link href="/agencies" className="header-nav-item">For Agencies</Link>
                <Link href="/partners" className="header-nav-item">Partners</Link>
                <Link href="/submit" className="header-nav-item">Submit</Link>
                <Link href="/about" className="header-nav-item">About</Link>
              </nav>
              <div className="header-auth">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="btn-auth btn-signin">Sign In</button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="btn-auth btn-signup">Sign Up Free</button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Link href="/vault" className="btn-auth btn-vault">Pro Vault</Link>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </header>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
