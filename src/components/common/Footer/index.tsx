// Styles
import styles from "./styles.module.scss"
// Images
import logoOnebitcode from "public/logoOnebitcode.svg"
// Compoents
import Image from "next/image"
import { Container } from "reactstrap"

const Footer = () => {
  return (
    <>
      <Container className="d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap column-gap-5 py-4">
        <Image src={logoOnebitcode} alt="FooterLogo" className={styles.footerLogo} />
        <a href="https://onebitcode.com" target="_blank" className={styles.footerLink}>ONEBITCODE.COM</a>
      </Container>
    </>
  )
}

export default Footer