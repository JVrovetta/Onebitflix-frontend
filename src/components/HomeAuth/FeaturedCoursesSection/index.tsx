// Styles
import styles from "@/styles/slideCategory.module.scss"
// Types
import { CourseType } from "@/services/couseService"
// Components
import { Container } from "reactstrap"
import SlideComponent from "@/components/common/SlideComponent"

interface props {
  courses: CourseType[]
}

const FeaturedCoursesSection = ({ courses }: props) => {
  return (
    <>
      <Container>
        <p className={styles.titleCategory}>Featured Categories</p>
      </Container>
      <SlideComponent courses={courses} />
    </>
  )
}
export default FeaturedCoursesSection