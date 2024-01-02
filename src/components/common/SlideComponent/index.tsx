"use client"

// Types
import { CourseType } from "@/services/couseService"
// Components
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import CourseCard from "../CourseCard";
import { Container } from "reactstrap";

interface props {
  courses: CourseType[]
  centralized?: boolean
}

const SlideComponent = ({ courses, centralized = false }: props) => {
  let slideCount = 0
  if (courses.length > 4) slideCount = 4
  else if (courses) slideCount = courses.length

  return (
    <>
      <Container className={`d-flex flex-column py-4 ${centralized ? "align-items-center" : ""}`}>
        <Splide options={{
          type: "loop",
          perPage: slideCount,
          perMove: 1,
          pagination: false,
          width: slideCount * 300,
          arrows: courses.length > 4 ? true : false,
          drag: courses.length > 4 ? true : false,
          breakpoints: {
            1200: {
              perPage: slideCount >= 2 ? 2 : 1,
              width: slideCount >= 2 ? 600 : 300,
              arrows: courses.length > 2 ? true : false,
              drag: courses.length > 2 ? true : false,
            },
            600: {
              perPage: 1,
              width: 300,
              arrows: courses.length > 1 ? true : false,
              drag: courses.length > 1 ? true : false,
            }
          }
        }}>
          {courses?.map((course) => (
            <SplideSlide key={course.id}>
              <CourseCard course={course} href={`/course/${course.id}`} />
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </>
  )
}

export default SlideComponent