// Styles
import styles from "./styles.module.scss"
// Images
import logoOnebitflix from "public/logoOnebitflix.svg"
// components
import { Container } from "reactstrap"
import Link from "next/link"
import Image from "next/image"

interface props {
  logoUrl?: string
  btnUrl: string
  btnContent: string
}

const HeaderGeneric = ({ logoUrl, btnUrl, btnContent }: props) => {
  return (
    <>
      <div className={styles.header}>
        <Container className="d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap gap-3 py-4">
          <Link href={logoUrl ? logoUrl : "/"}>
            <Image src={logoOnebitflix} alt="Logo Onebitflix" className={styles.headerLogo} />
          </Link>
          <Link href={btnUrl} className={`btn btn-outline-light ${styles.headerBtn}`}>
            {btnContent}
          </Link>
        </Container>
      </div>
    </>
  )
}

export default HeaderGeneric