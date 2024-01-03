// Component
import Course from "./Course"
import Footer from "@/components/common/Footer"

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  return { title: `Onebitflix - ${params.id}` }
}

const CoursePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <main className="d-flex flex-column">
        <div className="flex-grow-1">
          <Course courseId={+ params.id} />
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </main>
    </>
  )
}
export default CoursePage