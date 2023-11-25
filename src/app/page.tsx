import { Metadata } from "next"
import styles from "../styles/homeNoAuth.module.scss"
import HeaderNoAuth from "@/components/HomeNoAuth/HeaderNoAuth"
import PresentationSection from "@/components/HomeNoAuth/PresentationSection"

export const metadata: Metadata = {
  title: "OneBitFlix",
  description: "Get access to the best programming content in a simple and easy way",
  openGraph: {
    title: "OneBitFlix"
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
      </main>
    </>
  )
}

export default HomeNoAuth