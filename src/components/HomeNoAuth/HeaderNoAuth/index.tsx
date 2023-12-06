// Images
import logoCta from "public/homeNoAuth/logoCta.png"
import logoOnebitflix from "public/logoOnebitflix.svg"
// Styles
import styles from "./styles.module.scss"
// Components
import Image from "next/image"
import Link from "next/link"
import { Container } from "reactstrap"

const HeaderNoAuth = () => {
  return (
    <header>
      <div className={styles.ctaSection}>
        <Image src={logoCta} alt="logoCta" className={styles.imgCta} />
        <p>Register to access the courses</p>
        <Image src={logoCta} alt="logoCta" className={styles.imgCta} />
      </div>

      <Container className={styles.nav}>
        <Image src={logoOnebitflix} alt="logoCta" className={styles.imgLogoNav} />
        <div className={styles.buttons}>
          <Link className={`btn btn-outline ${styles.navBtn}`} href="/auth/login">Log in</Link>
          <Link className={`btn btn-outline ${styles.navBtn}`} href="/auth/register">Create account</Link>
        </div>
      </Container >
    </header>
  )
}

export default HeaderNoAuth