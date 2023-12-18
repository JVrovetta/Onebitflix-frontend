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

const NewestCoursesSection = ({ courses }: props) => {
  return (
    <>
      <Container>
        <p className={styles.titleCategory}>Recent Launches</p>
      </Container>
      <SlideComponent courses={courses} />
    </>
  )
}

export default NewestCoursesSection