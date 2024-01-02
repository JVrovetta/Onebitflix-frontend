// Component
import { Container } from "reactstrap"
import Course from "./Course"

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  return { title: `Onebitflix - ${params.id}` }
}

const CoursePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Container>
        <Course courseId={+ params.id} />
      </Container>
    </>
  )
}
export default CoursePage