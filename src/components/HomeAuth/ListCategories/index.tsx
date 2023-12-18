// Types
import { CategoryType } from "@/services/categoriesService"
// Components
import CategoryCoursesSlide from "./CategoryCoursesSlide"

interface props {
  categories: CategoryType[]
}

const ListCategories = ({ categories }: props) => {
  return (
    <>
      {categories.map((category: CategoryType) => (
        <CategoryCoursesSlide key={category.id} categoryId={category.id} />
      ))}
    </>
  )
}
export default ListCategories