"use client"

// Styles
import styles from "@/styles/episodePage.module.scss"
// Service
import coursesService, { CourseType } from "@/services/couseService"
//Images
import arrowLeft from "public/episode/iconArrowLeft.svg"
import arrowRight from "public/episode/iconArrowRight.svg"
// Components
import Spinner from "@/components/common/Spinner"
import { useEffect, useState } from "react"
import { Button, Container } from "reactstrap"
import ReactPlayer from "react-player"
import Link from "next/link"
import Image from "next/image"

interface props {
  episodeOrder: number
  courseId: number
}

const Episode = ({ episodeOrder, courseId }: props) => {
  const [course, setCourse] = useState<CourseType>()

  const getCourse = async () => {
    const res = await coursesService.getEpisodes(courseId)
    if (res.status === 200) {
      setCourse(res.data)
    }
  }

  useEffect(() => {
    getCourse()
  }, [courseId])

  if (!course) return <Spinner />

  const episode = course.episodes![episodeOrder]
  const hasPrevious = !(episodeOrder === 0)
  const hasNext = !(episodeOrder === course.episodes?.length! - 1)

  return (
    <Container className="d-flex flex-column gap-4 pt-5">
      <p className={`text-center text-sm-start ${styles.epTitle}`}>{episode.name}</p>
      {typeof window === "undefined" ? null : (
        <ReactPlayer
          className={styles.player}
          width={854}
          height={480}
          url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${episode.videoUrl}&token=${sessionStorage.getItem("onebitflix-token")}`}
          controls
        />
      )}
      <div className="d-flex justify-content-center justify-content-sm-start gap-3">
        <Link
          href={hasPrevious ? `/course/episode/${episodeOrder - 1}?courseId=${courseId}` : ""}
          style={hasPrevious ? {} : { cursor: "default" }}
        >
          <Button className={styles.epButton} outline color="light" disabled={!hasPrevious}>
            <Image src={arrowLeft} alt="arrowLeftIcon" className={styles.epButtonImg} />
            Previous
          </Button>
        </Link>
        <Link
          href={hasNext ? `/course/episode/${episodeOrder + 1}?courseId=${courseId}` : "/course/"}
          style={hasPrevious ? {} : { cursor: "default" }}
        >
          <Button className={styles.epButton} outline color="light" disabled={!hasNext}>
            Next
            <Image src={arrowRight} alt="arrowRightIcon" className={styles.epButtonImg} />
          </Button>
        </Link>
      </div>
      <p className="py-4 mb-5">{episode.synopsis}</p>
    </Container>
  )
}
export default Episode