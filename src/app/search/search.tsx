"use client"

// Styles
import styles from "@/styles/search.module.scss"
// Image
import notFound from "public/notFound.gif"
// Services
import coursesService, { CourseType } from "@/services/couseService"
// Components
import { useEffect, useState } from "react"
import Image from "next/image"
import { Container } from "reactstrap"
import CourseCard from "@/components/common/CourseCard"
import Link from "next/link"

interface props {
  searchName: string
}

const Search = ({ searchName }: props) => {
  const [searchResult, setSearchResult] = useState<CourseType[]>([])

  const searchCourses = async () => {
    const res = await coursesService.getSearch(searchName)
    setSearchResult(res.data.courses)
  }

  useEffect(() => {
    searchCourses()
  }, [searchName])

  return (
    <>
      {
        searchResult.length > 0 ?
          <Container className="d-flex flex-wrap justify-content-center justify-content-sm-start gap-4">
            {searchResult?.map((course) => (
              <Link href={`/courses/${course.id}`} style={{ textDecoration: "none" }}>
                <CourseCard course={course} style={{ marginLeft: 0 }} key={course.id} />
              </Link>
            ))}
          </Container>
          :
          <div className="d-flex align-items-center justify-content-center">
            <Image src={notFound} alt="Not found GIF" width={200} style={{ mixBlendMode: "screen" }} />
            <p className={styles.noSearchResult}><strong>NOT FOUND</strong><br />Please try another search</p>
          </div>
      }
    </>
  )
}
export default Search