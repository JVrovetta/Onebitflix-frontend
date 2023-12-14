"use client"

// Styles
import styles from "./styles.module.scss"
// Images
import logoOnebitflix from "public/logoOnebitflix.svg"
import iconSearch from "public/homeAuth/iconSearch.svg"
// Components
import Link from "next/link"
import Image from "next/image"
import { Container, Form, Input } from "reactstrap"
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useState } from "react"
import { useRouter } from "next/navigation"

const HeaderAuth = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const toggle = () => setModalOpen((isOpen) => !isOpen)

  const handleLogout = () => {
    sessionStorage.clear()
    router.push("/")
  }

  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center gap-3 py-4">
        <Link href="/home">
          <Image src={logoOnebitflix} alt="logoOnebtflix" className={styles.logoNav} />
        </Link>
        <div className="d-flex align-items-center">
          <Form>
            <Input name="search" type="search" placeholder="Research" className={styles.input} />
          </Form>
          <Image src={iconSearch} alt="searchIcon" className={styles.searchIcon} />
          <p id="test" className={styles.userProfile} onClick={toggle}>JV</p>

          <Modal isOpen={modalOpen} toggle={toggle} size="sm" contentClassName={styles.modal}>
            <ModalHeader className="d-flex justify-content-center">
              <p className={styles.modalUserProfile}>JV</p>
            </ModalHeader>
            <ModalBody>
              <p>
                <Link href="/profile" className={styles.modalLink}>My Profile</Link>
              </p>
              <p className={styles.modalLink} onClick={handleLogout}>Log Out</p>
            </ModalBody>
          </Modal>
        </div>

      </Container>
    </>
  )
}

export default HeaderAuth