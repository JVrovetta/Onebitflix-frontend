"use client"

// Services
import coursesService, { CourseType } from "@/services/couseService"
import categoriesService, { CategoryType } from "@/services/categoriesService"
// Components
import useSWR from "swr"
import FeaturedCoursesSection from "@/components/HomeAuth/FeaturedCoursesSection"
import FeaturedSection from "@/components/HomeAuth/FeaturedSection"
import ListCategories from "@/components/HomeAuth/ListCategories"
import NewestCoursesSection from "@/components/HomeAuth/NewestCoursesSection"
import FavoriteCoursesSection from "@/components/HomeAuth/FavoriteCoursesSection"
import Spinner from "@/components/common/Spinner"

const HomeAuth = () => {
  const featured = useSWR<CourseType[]>("/featured", coursesService.getFeaturedCourses)
  const newest = useSWR<CourseType[]>("/newest", coursesService.getNewestCourses)
  const favorites = useSWR<CourseType[]>("/favorites", coursesService.getFavCourses)
  const categories = useSWR<CategoryType[]>("/categories", categoriesService.getCategories)
  if (featured.error || newest.error || favorites.error || categories.error) return <p>ERROR</p>
  if (!featured.data || !newest.data || !favorites.data || !categories.data) return <Spinner />

  return (
    <>
      <FeaturedSection course={featured.data[0]} />
      <NewestCoursesSection courses={newest.data} />
      {favorites.data.length > 0 ? <FavoriteCoursesSection courses={favorites.data} /> : null}
      <FeaturedCoursesSection courses={featured.data} />
      <ListCategories categories={categories.data} />
    </>
  )
}

export default HomeAuth