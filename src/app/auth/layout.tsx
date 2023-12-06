"use client"

// Styles
import styles from "@/styles/registerLogin.module.scss"
//Components
import Footer from "@/components/common/Footer"
import HeaderGeneric from "@/components/common/HeaderGeneric"
import { usePathname } from "next/navigation"

const authLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const btnContent = pathname === "/auth/login" ? "Register Here" : "Login Here"
  const btnUrl = pathname === "/auth/login" ? "/auth/register" : "/auth/login"

  return (
    <>
      <main className={styles.main}>
        <HeaderGeneric btnContent={btnContent} btnUrl={btnUrl} />
        <div className="flex-grow-1">
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default authLayout