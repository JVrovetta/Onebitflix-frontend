"use client"

// Styles
import styles from "@/styles/slideCategory.module.scss"
// Service
import categoriesService from "@/services/categoriesService"
// Components
import useSWR from "swr"
import { Container } from "reactstrap"
import SlideComponent from "@/components/common/SlideComponent"
import Spinner from "@/components/common/Spinner"

interface props {
  categoryId: number
}

const CategoryCoursesSlide = ({ categoryId }: props) => {
  const { data, error } = useSWR(`categoryCourses/${categoryId}`, (() => categoriesService.getCourses(categoryId)))
  if (error) return error
  if (!data) return <Spinner />

  if (data.data.courses.length > 0) {
    return (
      <>
        <Container>
          <p className={styles.titleCategory}>{data.data.name}</p>
        </Container>
        <SlideComponent courses={data.data.courses} />
      </>
    )
  }

  return (<></>)
}
export default CategoryCoursesSlide
