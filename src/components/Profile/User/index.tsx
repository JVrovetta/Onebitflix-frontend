"use client"

// Styles
import styles from "@/styles/profile.module.scss"
// Images
import iconUserAccount from "public/profile/iconUserAccount.svg"
// Components
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import Image from "next/image"

const UserForm = () => {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>NAME TEST</p>
        </div>
        <div className={styles.memberTime}>
          <Image src={iconUserAccount} alt="User Account Icon" className={styles.memberTimeImg} />
          <p className={styles.memberTimeText}>Member Since <br /> 20 de abriu de 2020</p>
        </div>
        <hr />
        <Row className={styles.inputGridDiv}>
          <Col md>
            <FormGroup>
              <Label for="firstName" className={styles.formLabel}>FIRST NAME</Label>
              <Input id="firstName" name="firstName" type="text" placeholder="What is your first name?" value={"Name test"} maxLength={20} required className={styles.inputGrid} />
            </FormGroup>
          </Col>
          <Col md>
            <FormGroup>
              <Label for="lastName" className={styles.formLabel}>LAST NAME</Label>
              <Input id="lastName" name="lastName" type="text" placeholder="What is your last name?" value={"Teste da Silva"} maxLength={20} required className={styles.inputGrid} />
            </FormGroup>
          </Col>
        </Row>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="phone" className={styles.formLabel}>WHATSAPP / TELEGRAM</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(xx) 9xxxx-xxxx" value={"+55 (28) 99999-9999"} required className={styles.input} />
          </FormGroup>
          <FormGroup>
            <Label for="email" className={styles.formLabel}>E-MAIL</Label>
            <Input id="email" name="email" type="email" placeholder="What is your best e-mail?" value={"XX@XX.XX"} required className={styles.input} />
          </FormGroup>
          <Button type="submit" className={styles.formBtn} outline color="light">Save Changes</Button>
        </div>
      </Form >
    </>
  )
}
export default UserForm