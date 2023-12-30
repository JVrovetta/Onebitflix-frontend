// Images
import loading from "public/loading.gif"
// Components
import Image from "next/image"

const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Image src={loading} alt="Loading GIF" width={100} />
      <p>Loading...</p>
    </div>
  )
}
export default Spinner