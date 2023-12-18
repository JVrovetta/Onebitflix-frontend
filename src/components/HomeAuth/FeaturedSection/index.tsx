// Styles
import styles from "./styles.module.scss"
// Images
import buttonPlay from "public/buttonPlay.svg"
// Types
import { CourseType } from "@/services/couseService"
// Components
import { Container } from "reactstrap"
import Link from "next/link"
import Image from "next/image"

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
        key={course.id}
      >
        <Container className="text-center text-sm-start pt-5">
          <p className={styles.title}>{course.name}</p>
          <p className={styles.description}>{course.synopsis}</p>
          <Link className={`btn btn-outline-light mx-auto mx-sm-0 ${styles.button}`} href={`/courses/${course.id}`}>
            ACCESS NOW
            <Image src={buttonPlay} alt="buttonPlay" className={styles.buttonImg} />
          </Link>
        </Container>
      </div>
    </>
  )
}
export default FeaturedSection