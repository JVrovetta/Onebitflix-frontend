"use client"

// Services
import coursesService from "@/services/couseService"
import categoriesService from "@/services/categoriesService"
// Components
import useSWR from "swr"
import FeaturedCoursesSection from "@/components/HomeAuth/FeaturedCoursesSection"
import FeaturedSection from "@/components/HomeAuth/FeaturedSection"
import ListCategories from "@/components/HomeAuth/ListCategories"
import NewestCoursesSection from "@/components/HomeAuth/NewestCoursesSection"
import FavoriteCoursesSection from "@/components/HomeAuth/FavoriteCoursesSection"
import Spinner from "@/components/common/Spinner"

const HomeAuth = () => {
  const featured = useSWR("/featured", coursesService.getFeaturedCourses)
  const newest = useSWR("/newest", coursesService.getNewestCourses)
  const favorites = useSWR("/favorites", coursesService.getFavCourses)
  const categories = useSWR("/categories", categoriesService.getCategories)
  if (featured.error || newest.error || favorites.error || categories.error) return <p>ERROR</p>
  if (!featured.data || !newest.data || !favorites.data || !categories.data) return <Spinner />

  return (
    <>
      <FeaturedSection course={featured.data.data[0]} />
      <NewestCoursesSection courses={newest.data.data} />
      {favorites.data.data.length > 0 ? <FavoriteCoursesSection courses={favorites.data.dat} /> : null}
      <FeaturedCoursesSection courses={featured.data.data} />
      <ListCategories categories={categories.data.data.categories} />
    </>
  )
}

export default HomeAuth