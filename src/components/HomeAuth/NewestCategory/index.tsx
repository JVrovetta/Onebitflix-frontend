"use client"
// Styles
import styles from "@/styles/slideCategory.module.scss"
// Services
import coursesService from "@/services/couseService"
// Components
import useSWR from "swr"
import SlideComponent from "@/components/common/SlideComponent"
import { Container } from "reactstrap"

const NewestCategory = () => {
  const { data, error } = useSWR("/newest", coursesService.getNewestCourses)
  if (error) return error
  if (!data) return (<p>Loading...</p>)
  return (
    <>
      <Container>
        <p className={styles.titleCategory}>Recent Launches</p>
      </Container>
      <SlideComponent courses={data.data} />
    </>
  )
}

export default NewestCategory