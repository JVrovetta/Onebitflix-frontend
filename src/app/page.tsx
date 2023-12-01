// Styles
import styles from "../styles/homeNoAuth.module.scss"
// Components
import { Metadata } from "next"
import HeaderNoAuth from "@/components/HomeNoAuth/HeaderNoAuth"
import PresentationSection from "@/components/HomeNoAuth/PresentationSection"
import CardsSection from "@/components/HomeNoAuth/CardsSection"
import SlideSection from "@/components/HomeNoAuth/SlidesSection"
import Footer from "@/components/common/Footer"

export const metadata: Metadata = {
  title: "OneBitFlix",
  description: "Get access to the best programming content in a simple and easy way",
  openGraph: {
    title: "OneBitFlix",
    description: "Get access to the best programming content in a simple and easy way",
    siteName: "OneBitFlix"
  }
}

const getNewestCourses = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/courses/newest`, {
    next: {
      revalidate: 3600 * 24
    }
  })

  return res.json()
}

const HomeNoAuth = async () => {
  const newestCourses = await getNewestCourses()

  return (
    <>
      <main>
        <div className={styles.mainBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={newestCourses} />
        <Footer />
      </main>
    </>
  )
}

export default HomeNoAuth