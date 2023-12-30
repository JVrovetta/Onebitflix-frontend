"use client"

// Styles
import styles from "@/styles/profile.module.scss"
// Services
import profileService, { UserPersonalDetatils } from "@/services/profileService"
// Images
import iconUserAccount from "public/profile/iconUserAccount.svg"
// Components
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { FormEvent, useEffect, useState } from "react"
import Image from "next/image"
import ToastComponent from "@/components/common/ToastComponent"
import { useRouter } from "next/navigation"

const UserForm = () => {
  const router = useRouter()

  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastColor, setToastColor] = useState("")

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [email, setEmail] = useState("")

  const [created_at, setCreated_at] = useState("")
  const date = new Date(created_at)

  useEffect(() => {
    profileService.getCurrent().then((user: UserPersonalDetatils) => {
      setFirstName(user.firstName)
      setLastName(user.lastName)
      setPhone(user.phone)
      setLoginEmail(user.email)
      setEmail(user.email)
      setCreated_at(user.createdAt!)
    })
  }, [])

  const handleUserUpdate = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const res = await profileService.userUpdate({ firstName, lastName, phone, email })
    if (res === 200) {
      if (loginEmail !== email) {
        sessionStorage.clear()
        router.push("/auth/login?emailUpdated=true")
      }
      setToastIsOpen(true);
      setTimeout(() => { setToastIsOpen(false) }, 1000 * 4)
      setToastMessage("Personal information updated successfully.")
      setToastColor("bg-success")
    } else {
      setToastIsOpen(true);
      setTimeout(() => { setToastIsOpen(false) }, 1000 * 4)
      setToastMessage("Unable to use this email and/or phone number.")
      setToastColor("bg-danger")
    }
  }

  const firstFName = firstName === "" ? "XXXX" : firstName.split(" ")[0]
  const firstLName = lastName === "" ? "XXXX" : lastName.split(" ")[0]

  return (
    <>
      <script src="https://jsuites.net/v4/jsuites.js"></script>
      <Form className={styles.form} onSubmit={handleUserUpdate}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>{`${firstFName[0]}${firstLName[0]}`}</p>
          <p className={styles.userName}>{`${firstFName} ${firstLName}`}</p>
        </div>
        <div className={styles.memberTime}>
          <Image src={iconUserAccount} alt="User Account Icon" className={styles.memberTimeImg} />
          <p className={styles.memberTimeText}>Member Since <br />{`${date.toLocaleString("en-IE", { month: "long" })} ${date.getDate()}, ${date.getFullYear()}`}</p>
        </div>
        <hr />

        <Row className={styles.inputGridDiv}>
          <Col md>
            <FormGroup>
              <Label for="firstName" className={styles.formLabel}>FIRST NAME</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="What is your first name?"
                maxLength={20}
                required
                value={firstName.toUpperCase()}
                onChange={(ev) => { setFirstName(ev.currentTarget.value) }}
                className={styles.inputGrid}
              />
            </FormGroup>
          </Col>

          <Col md>
            <FormGroup>
              <Label for="lastName" className={styles.formLabel}>LAST NAME</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="What is your last name?"
                maxLength={20}
                required
                value={lastName.toUpperCase()}
                onChange={(ev) => { setLastName(ev.currentTarget.value) }}
                className={styles.inputGrid}
              />
            </FormGroup>
          </Col>
        </Row>

        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="phone" className={styles.formLabel}>WHATSAPP / TELEGRAM</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(xx) 9xxxx-xxxx"
              data-mask="[-]+55 (00) 00000-0000"
              required
              value={phone}
              onChange={(ev) => { setPhone(ev.currentTarget.value) }}
              className={styles.input}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email" className={styles.formLabel}>E-MAIL</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="What is your best e-mail?"
              required
              value={email.toLowerCase()}
              onChange={(ev) => { setEmail(ev.currentTarget.value) }}
              className={styles.input} />
          </FormGroup>

          <Button type="submit" className={styles.formBtn} outline color="light">Save Changes</Button>
        </div>
      </Form >
      <ToastComponent isOpen={toastIsOpen} message={toastMessage} color={toastColor} />
    </>
  )
}
export default UserForm