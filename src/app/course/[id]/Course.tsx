"use client"

// Style
import styles from "@/styles/coursePage.module.scss"
// Types
import coursesService, { CourseType } from "@/services/couseService"
// Components
import { useEffect, useState } from "react"

interface props {
  courseId: number
}

const Course = ({ courseId }: props) => {
  const [course, setCourse] = useState<CourseType>()

  const getCourse = async () => {
    const res = await coursesService.getEpisodes(courseId)
    if (res.status === 200) {
      setCourse(res.data)
    }
    console.log(res)
  }

  useEffect(() => {
    getCourse()
  }, [courseId])

  return (
    <p>{course?.name}</p>
  )
}

export default Course