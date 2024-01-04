// Components
import HeaderGeneric from "@/components/common/HeaderGeneric"
import Footer from "@/components/common/Footer"
import Episode from "./Episode"

interface props {
  params: { order: string }
  searchParams: {
    courseId: string
    episodeId: string
  }
}

const EpisodePage = ({ params, searchParams }: props) => {
  return (
    <>
      <main className="d-flex flex-column">
        <HeaderGeneric logoUrl="/home" btnContent="Back to Course" btnUrl={`/course/${searchParams.courseId}`} />
        <div className="flex-grow-1">
          <Episode episodeOrder={+params.order} episodeId={+searchParams.episodeId} courseId={+searchParams.courseId} />
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </main>
    </>
  )
}
export default EpisodePage