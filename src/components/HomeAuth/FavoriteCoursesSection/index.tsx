// Styles
import styles from "@/styles/slideCategory.module.scss"
// Types
import { CourseType } from "@/services/couseService"
// Components
import SlideComponent from "@/components/common/SlideComponent"
import { Container } from "reactstrap"

interface props {
  courses: CourseType[]
}

const FavoriteCoursesSection = ({ courses }: props) => {
  return (
    <>
      <Container>
        <p className={styles.titleCategory}>My List</p>
      </Container>
      <SlideComponent courses={courses} />
    </>
  )
}

export default FavoriteCoursesSection