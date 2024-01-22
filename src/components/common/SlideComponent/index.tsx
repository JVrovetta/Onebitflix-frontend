"use client"

// Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Types
import { CourseType } from "@/services/couseService"
// Components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import CourseCard from "../CourseCard";
import { Container } from "reactstrap";


interface props {
  courses: CourseType[]
}

const SlideComponent = ({ courses }: props) => {
  return (
    <>
      <Container className={`d-flex flex-column py-4}`}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          style={{ width: "100%", height: "100%" }}
        >
          {courses?.map((course) => (
            <SwiperSlide key={course.id} style={{ width: "fit-content" }}>
              <CourseCard course={course} href={`/course/${course.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  )
}

export default SlideComponent