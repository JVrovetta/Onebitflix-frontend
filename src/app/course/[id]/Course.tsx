"use client"

// Style
import styles from "@/styles/coursePage.module.scss"
// Service
import coursesService, { CourseType } from "@/services/couseService"
// Images
import iconLike from "public/course/iconLike.svg"
import iconLiked from "public/course/iconLiked.svg"
import iconAddFav from "public/course/iconAddFav.svg"
import iconFavorited from "public/course/iconFavorited.svg"
// Components
import Spinner from "@/components/common/Spinner"
import { Container } from "reactstrap"
import Image from "next/image"
import { useEffect, useState } from "react"
import CoursePresentation from "@/components/common/CoursePresentation"
import HeaderAuth from "@/components/common/HeaderAuth"
import EpisodeCard from "@/components/Course/EpisodeCard"
import Link from "next/link"

interface props {
  courseId: number
}

const Course = ({ courseId }: props) => {
  const [course, setCourse] = useState<CourseType>()
  const [liked, setLiked] = useState(false)
  const [favorited, setFavorited] = useState(false)

  const getCourse = async () => {
    const res = await coursesService.getEpisodes(courseId)
    if (res.status === 200) {
      setCourse(res.data)
      setLiked(res.data.liked)
      setFavorited(res.data.favorited)
    }
  }

  useEffect(() => {
    getCourse()
  }, [courseId])

  const handleLike = async () => {
    liked ? await coursesService.removeLike(courseId) : await coursesService.like(courseId)
    setLiked((curr) => !curr)
  }

  const handleFavorite = async () => {
    favorited ? await coursesService.removeFav(courseId) : await coursesService.addToFav(courseId)
    setFavorited((curr) => !curr)
  }

  if (!course) return <Spinner />

  const hasEpisodes = course.episodes?.length! > 0
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, #151515, #15151580, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px"
        }}
      >
        <HeaderAuth />
      </div>
      <Container>
        <div className={`text-center text-sm-start ${styles.courseInfo}`}>
          <CoursePresentation
            course={course}
            btnConfig={{
              text: "START WATCHING",
              href: hasEpisodes ? `/course/episode/${course.episodes![0].order - 1}?courseId=${course.id}&episodeId=${course.episodes![0].id}` : "",
              disable: !hasEpisodes
            }}
          />
          <div className={`d-flex justify-content-center justify-content-sm-start ${styles.interactions}`}>
            <Image
              src={liked ? iconLiked : iconLike}
              alt="LikeImage"
              onClick={handleLike}
              className={styles.interactionImg}
            />
            <Image
              src={favorited ? iconFavorited : iconAddFav}
              alt="FavoriteImage"
              onClick={handleFavorite}
              className={styles.interactionImg}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-5">
          <p className={styles.epDivision}>EPISODES</p>
          <p className={styles.epCount}>{course.episodes?.length} episodes</p>
          {
            hasEpisodes ?
              course.episodes?.map((ep) => (
                <Link
                  href={`/course/episode/${ep.order - 1}?courseId=${course.id}&episodeId=${ep.id}`}
                  style={{ width: "100%" }}
                >
                  <EpisodeCard key={ep.id} episode={ep} />
                </Link>
              ))
              :
              <p>This course doesn't have episodes yet. Please check back later. &#129302;</p>
          }
        </div>
      </Container>
    </>
  )
}
export default Course