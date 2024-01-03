// Styles
import styles from "./styles.module.scss"
// Types
import { EpisodeType } from "@/services/couseService"

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
      <div className={styles.epCard}>
        <div className="d-flex justify-content-center gap-3">
          <p className={styles.epOrder}>Episode Nº {episode.order}</p>
          <p className={styles.epTime}>{secondsToMin(episode.secondsLong)}</p>
        </div>
        <div className="text-center my-2">
          <p className={styles.epTitle}>{episode.name}</p>
          <p className={styles.epDescription}>{episode.synopsis}</p>
        </div>
        <br />
      </div>
    </>
  )
}
export default EpisodeCard