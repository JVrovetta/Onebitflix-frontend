// Styles
import styles from "./styles.module.scss"
// Images
import buttonPlay from "public/buttonPlay.svg"
// Types
import { CourseType } from "@/services/couseService"
// Components
import Link from "next/link"
import Image from "next/image"
import { Button } from "reactstrap"

interface props {
  course: CourseType
  btnConfig: {
    text: string
    href: string
    disable?: boolean
  }
}

const CoursePresentation = ({ course, btnConfig }: props) => {
  return (
    <>
      <p className={styles.title}>{course.name}</p>
      <p className={styles.description}>{course.synopsis}</p>
      <Link href={btnConfig.href} style={{ textDecoration: "none" }}>
        <Button outline color="light" className={`mx-auto mx-sm-0 ${styles.button}`} disabled={btnConfig.disable}>
          {btnConfig.text}
          <Image src={buttonPlay} alt="buttonPlay" className={styles.buttonImg} />
        </Button>
      </Link>
    </>
  )
}
export default CoursePresentation