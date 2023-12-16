"use client"

// Styles
import styles from "@/styles/slideCategory.module.scss"
// Services
import coursesService from "@/services/couseService"
// Components
import useSWR from "swr"
import SlideComponent from "@/components/common/SlideComponent"
import { Container } from "reactstrap"

const FavoriteCategory = () => {
  const { data, error } = useSWR("/favorites", coursesService.getFavCourses)
  if (error) return error
  if (!data) return (<p>Loading...</p>)
  if (data.data.length > 0) {
    return (
      <>
        <Container>
          <p className={styles.titleCategory}>My List</p>
        </Container>
        <SlideComponent courses={data.data} />
      </>
    )
  }

  return (
    <>
    </>
  )
}
export default FavoriteCategory