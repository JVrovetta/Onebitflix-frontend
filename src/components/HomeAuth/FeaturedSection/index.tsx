// Styles
import styles from "./styles.module.scss"
// Images
import buttonPlay from "public/buttonPlay.svg"
// Types
import { CourseType } from "@/services/couseService"
// Components
import { Container } from "reactstrap"
import CoursePresentation from "@/components/common/CoursePresentation"

interface props {
  course: CourseType
}

const FeaturedSection = ({ course }: props) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, #151515, #15151580, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "480px"
        }}
      >
        <Container className="text-center text-sm-start pt-5">
          <CoursePresentation course={course} btnConfig={{ href: `/courses/${course.id}`, text: "ACCESS NOW" }} />
        </Container>
      </div>
    </>
  )
}
export default FeaturedSection