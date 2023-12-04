"use client"

import "aos/dist/aos.css";
import AOS from "aos"
import { ReactNode, useEffect } from "react";

interface props {
  children: ReactNode
}

const AOSComponent = ({ children }: props) => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      {children}
    </>
  )
}

export default AOSComponent