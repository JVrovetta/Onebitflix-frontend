// Styles
import styles from "./styles.module.scss"
// Types
import { CourseType } from "@/services/couseService"
// Components
import Image from "next/image"

interface props {
  course: CourseType
}

const SlideCard = ({ course }: props) => {
  return (
    <>
      <div className={styles.slide}>
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

export default SlideCard