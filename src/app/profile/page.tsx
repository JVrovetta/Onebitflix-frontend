"use client"

// Styles
import styles from "@/styles/profile.module.scss"
// Components
import UserForm from "@/components/Profile/User"
import { Button, Col, Container, Row } from "reactstrap"

const UserInfo = () => {
  return (
    <>
      <Container>
        <p className={styles.title}>Account Information</p>
        <Row className="pt-3 pb-5 row-gap-5">
          <Col md={4} className={styles.btnColumn}>
            <Button className={styles.renderForm} outline color="light">PERSONAL DETAILS</Button>
            <Button className={styles.renderForm} outline color="light">PASSWORD</Button>
          </Col>
          <Col md>
            <UserForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default UserInfo