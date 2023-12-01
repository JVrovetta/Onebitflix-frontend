"use client"

// Types
import { CourseType } from "@/services/couseService"
// Components
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from "../SlideCards";

interface props {
  courses: CourseType[]
}

const SlideComponent = ({ courses }: props) => {
  let slideCount = 0
  if (courses.length > 4) slideCount = 4
  else if (courses) slideCount = courses.length

  return (
    <>
      <div className="d-flex flex-column align-items-center py-4">
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
              <SlideCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div >
    </>
  )
}

export default SlideComponent