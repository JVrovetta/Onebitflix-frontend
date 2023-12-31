"use client"

// Styles
import styles from "@/styles/search.module.scss"
// Services
import coursesService, { CourseType } from "@/services/couseService"
// Components
import { useEffect, useState } from "react"

interface props {
  searchName: string
}

const Search = (props: props) => {
  const [searchResult, setSearchResult] = useState<CourseType[]>([])
  const searchName = props.searchName

  const searchCourses = async () => {
    const res = await coursesService.getSearch(searchName)
    setSearchResult(res.data.courses)
  }

  useEffect(() => {
    searchCourses()
  }, [searchName])

  return (
    <>
      {searchResult?.map((course) => (
        <div key={course.id}>
          <p>{course.name}</p>
        </div>
      ))}
    </>
  )
}
export default Search