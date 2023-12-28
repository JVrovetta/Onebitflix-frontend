"use client"

// Styles
import styles from "@/styles/profile.module.scss"
// Components
import { Button, Col, Container, Row } from "reactstrap"
import { useState } from "react"
import UserForm from "@/components/Profile/User"
import PasswordForm from "@/components/Profile/Password"

const UserInfo = () => {
  const [currentForm, setCurrentForm] = useState<"USER" | "PASSWORD">("USER")
  return (
    <>
      <Container>
        <p className={styles.title}>Account Information</p>
        <Row className="pt-3 pb-5 row-gap-5">
          <Col md={4} className={styles.btnColumn}>
            <Button onClick={() => { currentForm === "PASSWORD" ? setCurrentForm("USER") : undefined }}
              style={currentForm === "USER" ? { borderColor: "#ffffff" } : undefined}
              className={styles.renderForm}
              outline
              color="light"
            >
              PERSONAL DETAILS
            </Button>
            <Button onClick={() => { currentForm === "USER" ? setCurrentForm("PASSWORD") : undefined }}
              style={currentForm === "PASSWORD" ? { borderColor: "#ffffff" } : undefined}
              className={styles.renderForm}
              outline
              color="light"
            >
              PASSWORD
            </Button>
          </Col>
          <Col md>
            {currentForm === "USER" ? <UserForm /> : <PasswordForm />}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default UserInfo