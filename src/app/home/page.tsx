// Components
import HeaderAuth from "@/components/common/HeaderAuth"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onebitflix - Home"
}

const HomeAuth = () => {
  return (
    <>
      <main>
        <HeaderAuth />
      </main>
    </>
  )
}

export default HomeAuth