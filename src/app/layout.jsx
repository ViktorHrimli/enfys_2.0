import "./globals.scss";

import { Nunito } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";


import styles from "./page.module.scss";

const montserrat = Nunito({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {

  return (
    <html lang="de-DE">
      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
