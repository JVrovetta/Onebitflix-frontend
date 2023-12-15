// Components
import FeaturedSection from "@/components/HomeAuth/FeaturedSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onebitflix - Home"
}

const HomeAuth = () => {
  return (
    <>
      <main>
        <FeaturedSection />
      </main>
    </>
  )
}

export default HomeAuth