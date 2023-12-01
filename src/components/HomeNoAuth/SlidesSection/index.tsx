// Styles
import { Container } from "reactstrap"
// Types
import { CourseType } from "@/services/couseService"
// Components
import styles from "./styles.module.scss"
import SlideComponent from "@/components/common/SlideComponent"
import Link from "next/link"

interface props {
  newestCourses: CourseType[]
}

const SlideSection = ({ newestCourses }: props) => {
  return (
    <>
      <Container className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>COURSES ALREADY AVAILABLE</p>
        <SlideComponent courses={newestCourses} />
        <Link href="/register" className={`btn btn-outline-light ${styles.slideSectionBtn}`}>
          REGISTER AND GET ACCESS
        </Link>
      </Container>
    </>
  )
}

export default SlideSection