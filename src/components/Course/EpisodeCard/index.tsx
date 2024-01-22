// Styles
import styles from "./styles.module.scss"
// Types
import { EpisodeType } from "@/services/couseService"
import { Col, Row } from "reactstrap"

interface props {
  episode: EpisodeType
}

const EpisodeCard = ({ episode }: props) => {

  const secondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = (totalSeconds % 60).toString().padStart(2, "0")
    return `${minutes}:${seconds}`
  }

  return (
    <>
      <div className={`d-flex gap-4 ${styles.epCard}`}>
        <div className="d-flex align-items-center justify-content-center">
          <div className={styles.epOrderNumber}>
            {episode.order}
          </div>
        </div>
        <div>
          <p className={styles.epTime}>{secondsToMin(episode.secondsLong)}</p>
          <div className="text-center my-2">
            <p className={styles.epTitle}>{episode.name}</p>
            <p className={styles.epDescription}>{episode.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default EpisodeCard