"use client"

// Styles
import styles from "./styles.module.scss"
// Images
import buttonPlay from "public/buttonPlay.svg"
// Services
import coursesService, { CourseType } from "@/services/couseService"
// Components
import useSWR from "swr"
import HeaderAuth from "@/components/common/HeaderAuth"
import { Container } from "reactstrap"
import Link from "next/link"
import Image from "next/image"

const FeaturedSection = () => {
  const { data, error } = useSWR("/featured", coursesService.getFeaturedCourses)
  if (error) return error
  if (!data) return (<p>Loading...</p>)
  return (
    <>
      {data.data.map((course: CourseType) => (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666665f, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "480px"
          }}
          key={course.id}
        >
          <HeaderAuth />
          <Container className="text-center text-sm-start pt-5">
            <p className={styles.title}>{course.name}</p>
            <p className={styles.description}>{course.synopsis}</p>
            <Link className={`btn btn-outline-light mx-auto mx-sm-0 ${styles.button}`} href={`/courses/${course.id}`}>
              ACCESS NOW
              <Image src={buttonPlay} alt="buttonPlay" className={styles.buttonImg} />
            </Link>
          </Container>
        </div>
      ))[0]}
    </>
  )
}
export default FeaturedSection