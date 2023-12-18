import Footer from "@/components/common/Footer"
import HeaderAuth from "@/components/common/HeaderAuth"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onebitflix - Home"
}

const homeAuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="d-flex flex-column">
        <HeaderAuth />
        <div className="flex-grow-1">
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default homeAuthLayout