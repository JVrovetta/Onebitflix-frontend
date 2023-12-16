// Components
import FavoriteCategory from "@/components/HomeAuth/FavoriteCategory"
import FeaturedCategory from "@/components/HomeAuth/FeaturedCategory"
import FeaturedSection from "@/components/HomeAuth/FeaturedSection"
import ListCategories from "@/components/HomeAuth/ListCategories"
import NewestCategory from "@/components/HomeAuth/NewestCategory"
import Footer from "@/components/common/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onebitflix - Home"
}

const HomeAuth = () => {
  return (
    <>
      <main>
        <FeaturedSection />
        <NewestCategory />
        <FavoriteCategory />
        <FeaturedCategory />
        <ListCategories />
        <Footer />
      </main>
    </>
  )
}

export default HomeAuth