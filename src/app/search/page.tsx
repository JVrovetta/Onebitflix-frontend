// Components
import HeaderAuth from "@/components/common/HeaderAuth"
import Footer from "@/components/common/Footer"
import Search from "./search"

export const generateMetadata = async ({ searchParams }: { searchParams: { search: string } }) => {
  return { title: `Onebitflix - ${searchParams.search}` }
}

const SearchPage = ({ searchParams }: { searchParams: { search: string } }) => {
  return (
    <>
      <main className="d-flex flex-column">
        <div className="bg-black">
          <HeaderAuth search={searchParams.search} />
        </div>
        <div className="flex-grow-1 my-4">
          <Search searchName={searchParams.search} />
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </main>
    </>
  )
}
export default SearchPage