"use client"

// Services
import categoriesService, { CategoryType } from "@/services/categoriesService"
// Components
import useSWR from "swr"
import CategoryCoursesSlide from "./CategoryCoursesSlide"

const ListCategories = () => {
  const { data, error } = useSWR("/listCategories", categoriesService.getCategories)
  if (error) return error
  if (!data) return (<p>Loading...</p>)
  return (
    <>
      {data.data.categories.map((category: CategoryType) => (
        <CategoryCoursesSlide categoryId={category.id} />
      ))}
    </>
  )
}
export default ListCategories