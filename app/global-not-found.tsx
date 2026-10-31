import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = { title: "Not found | Uhuru Journeys", robots: { index: false } };

/** Shown for URLs that match no page in any language (each language's own 404 handles missing slugs). */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh">
        <main id="main" className="grid min-h-dvh place-items-center bg-acacia-deep px-5 py-20 text-center text-white">
          <div>
            <p className="eyebrow text-savanna-light">404 · Off the map</p>
            <h1 className="mt-4 text-h1">This trail has gone cold</h1>
            <p className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
              <Link href="/" lang="en" className="underline underline-offset-4">Back to home</Link>
              <Link href="/fr" lang="fr" className="underline underline-offset-4">Retour à l’accueil</Link>
              <Link href="/de" lang="de" className="underline underline-offset-4">Zur Startseite</Link>
              <Link href="/es" lang="es" className="underline underline-offset-4">Volver al inicio</Link>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
