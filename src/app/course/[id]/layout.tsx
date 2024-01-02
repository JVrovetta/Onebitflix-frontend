import Footer from "@/components/common/Footer"
import HeaderAuth from "@/components/common/HeaderAuth"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onebitflix - Course"
}

const courseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="d-flex flex-column">
        <div className="bg-black">
          <HeaderAuth />
        </div>
        <div className="flex-grow-1 mt-4">
          {children}
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default courseLayout