// Styles
import styles from "./styles.module.scss"
// Types
import { CourseType } from "@/services/couseService"
// Components
import Image from "next/image"
import { CSSProperties } from "react"

interface props {
  course: CourseType
  style?: CSSProperties | undefined
}

const CourseCard = ({ course, style }: props) => {
  return (
    <>
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
    </>
  )
}

export default CourseCard