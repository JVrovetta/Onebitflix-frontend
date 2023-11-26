// Styles
import styles from "../styles/homeNoAuth.module.scss"
// Components
import { Metadata } from "next"
import HeaderNoAuth from "@/components/HomeNoAuth/HeaderNoAuth"
import PresentationSection from "@/components/HomeNoAuth/PresentationSection"
import CardsSection from "@/components/HomeNoAuth/CardsSection"

export const metadata: Metadata = {
  title: "OneBitFlix",
  description: "Get access to the best programming content in a simple and easy way",
  openGraph: {
    title: "OneBitFlix",
    description: "Get access to the best programming content in a simple and easy way",
    siteName: "OneBitFlix"
  }
}

const HomeNoAuth = () => {
  return (
    <>
      <main>
        <div className={styles.mainBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
      </main>
    </>
  )
}

export default HomeNoAuth