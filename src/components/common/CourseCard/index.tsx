// Styles
import styles from "./styles.module.scss"
// Types
import { CourseType } from "@/services/couseService"
// Components
import Image from "next/image"
import Link from "next/link"
import { CSSProperties } from "react"

interface props {
  course: CourseType
  href: string
  style?: CSSProperties | undefined
}

const CourseCard = ({ course, href, style }: props) => {
  return (
    <>
      <Link href={href} style={{ textDecoration: "none" }}>
        <div className={styles.slide} style={style}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
            alt={course.name}
            className={styles.slideImg}
            width={280}
            height={170}
          />
          <p className={styles.slideTitle}>{course.name}</p>
          <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
      </Link>
    </>
  )
}

export default CourseCard