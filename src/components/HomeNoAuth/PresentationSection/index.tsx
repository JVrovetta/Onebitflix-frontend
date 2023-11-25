// Images
import buttonPlay from "public/buttonPlay.svg"
import imgPresentation from "public/homeNoAuth/imgPresentation.png"
import iconArrowDown from "public/homeNoAuth/iconArrowDown.svg"
// Styles
import styles from "./styles.module.scss"
// Components
import { Container, Row, Col } from "reactstrap"
import Link from "next/link"
import Image from "next/image"

const PresentationSection = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-md-start align-items-center" md>
            <p className={styles.subtitle}>UNLIMITED ACCESS</p>
            <p className={styles.title}>Get Access to the Best<br />Programming Tutorials</p>
            <p className={styles.description}>Study from Anywhere, Anytime, and Keep<br />Growing as a Programmer</p>
            <Link href="/login" className={`btn btn-outline ${styles.ctaBtn}`}>
              ACCESS NOW
              <Image src={buttonPlay} alt="buttonImg" className={styles.btnImg} />
            </Link>
          </Col>

          <Col md>
            <Image src={imgPresentation} alt="imgPresentation" className={styles.imgPresentation} />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center py-5">
            <Image src={iconArrowDown} alt="arrowDown" className={styles.arrowDown} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PresentationSection