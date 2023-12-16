"use client"

// Styles
import styles from "@/styles/slideCategory.module.scss"
// Services
import coursesService from "@/services/couseService"
// Components
import useSWR from "swr"
import { Container } from "reactstrap"
import SlideComponent from "@/components/common/SlideComponent"


const FeaturedCategory = () => {
  const { data, error } = useSWR("/featured", coursesService.getFeaturedCourses)
  if (error) return error
  if (!data) return (<p>Loading...</p>)
  return (
    <>
      <Container>
        <p className={styles.titleCategory}>Featured Categories</p>
      </Container>
      <SlideComponent courses={data.data} />
    </>
  )
}
export default FeaturedCategory