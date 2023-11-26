// Styles
import styles from "./styles.module.scss"
// Components
import { Container } from "reactstrap"

const CardsSection = () => {
  return (
    <>
      <p className={styles.sectionTitle}>WHAT WILL YOU HAVE<br />ACCESS TO</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>FRONT-END</p>
          <p className={styles.cardDescription}>
            Onebitcode Black is the place for you to evolve. To achieve that, you'll have access to advanced programming practices, technology updates, and all the technical support necessary to become a senior in programming.
          </p>
        </div>

        <div className={styles.card2}>
          <p className={styles.cardTitle}>BACK-END</p>
          <p className={styles.cardDescription}>
            Onebitcode Black is the place for you to evolve. To achieve that, you'll have access to advanced programming practices, technology updates, and all the technical support necessary to become a senior in programming.
          </p>
        </div>

        <div className={styles.card3}>
          <p className={styles.cardTitle}>MOBILE</p>
          <p className={styles.cardDescription}>
            Onebitcode Black is the place for you to evolve. To achieve that, you'll have access to advanced programming practices, technology updates, and all the technical support necessary to become a senior in programming.
          </p>
        </div>

        <div className={styles.card4}>
          <p className={styles.cardTitle}>GIT & GITHUB</p>
          <p className={styles.cardDescription}>
            Onebitcode Black is the place for you to evolve. To achieve that, you'll have access to advanced programming practices, technology updates, and all the technical support necessary to become a senior in programming.
          </p>
        </div>

        <div className={styles.card5}>
          <p className={styles.cardTitle}>PROJECTS</p>
          <p className={styles.cardDescription}>
            Onebitcode Black is the place for you to evolve. To achieve that, you'll have access to advanced programming practices, technology updates, and all the technical support necessary to become a senior in programming.
          </p>
        </div>

        <div className={styles.card6}>
          <p className={styles.cardTitle}>CAREER</p>
          <p className={styles.cardDescription}>
            Onebitcode Black is the place for you to evolve. To achieve that, you'll have access to advanced programming practices, technology updates, and all the technical support necessary to become a senior in programming.
          </p>
        </div>
      </Container>
    </>
  )
}

export default CardsSection