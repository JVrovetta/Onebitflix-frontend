"use client"

// Styles
import styles from "./styles.module.scss"
// Components
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
// Services
import authService from "@/services/authService"
import ToastComponent from "@/components/common/Toast"

const RegisterForm = () => {
  const router = useRouter()
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const firstName = formData.get("firstName")!.toString()
    const lastName = formData.get("lastName")!.toString()
    const phone = formData.get("phone")!.toString()
    const email = formData.get("email")!.toString()
    const birth = formData.get("birth")!.toString()
    const password = formData.get("password")!.toString()
    const passwordConfirm = formData.get("passwordConfirm")!.toString()
    const params = { firstName, lastName, phone, email, birth, password }

    if (password !== passwordConfirm) {
      setToastIsOpen(true);
      setTimeout(() => { setToastIsOpen(false) }, 1000 * 3)
      setToastMessage("Password and confirmation don't match")
      return;
    }

    const { data, status } = await authService.register(params)
    if (status === 201) {
      router.push("/login?registred=true")
    } else {
      setToastIsOpen(true);
      setTimeout(() => { setToastIsOpen(false) }, 1000 * 3)
      setToastMessage(data.error)
    }
  }

  return (
    <>
      <script src="https://jsuites.net/v4/jsuites.js"></script>
      <Container className="py-5">
        <p className={styles.formTitle}><strong>Welcome to OneBitFlix!</strong></p>
        <Form className={styles.form} onSubmit={handleRegister}>
          <p className="text-center"><strong>Create your account!</strong></p>

          <FormGroup>
            <Label for="firstName" className={styles.label}>FIRST NAME</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="What is your first name?"
              maxLength={20}
              required
              className={styles.inputName}
            />
          </FormGroup>

          <FormGroup>
            <Label for="lastName" className={styles.label}>LAST NAME</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="What is your last name?"
              maxLength={30}
              required
              className={styles.inputName}
            />
          </FormGroup>

          <FormGroup>
            <Label for="phone" className={styles.label}>WHATSAPP / TELEGRAM</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(XX) 9xxxx-xxxx"
              data-mask="[-]+55 (00) 00000-0000"
              required
              className={styles.input}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email" className={styles.label}>EMAIL</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="What is your primary email address?"
              required
              className={styles.input}
            />
          </FormGroup>

          <FormGroup>
            <Label for="birth" className={styles.label}>DATE OF BIRTH</Label>
            <Input
              id="birth"
              name="birth"
              type="date"
              min="1930-01-01"
              max="2023-12-31"
              required
              className={styles.input}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password" className={styles.label}>PASSWORD</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password (Min: 6 | Max: 20)"
              minLength={6}
              maxLength={20}
              required
              className={styles.input}
            />
          </FormGroup>

          <FormGroup>
            <Label for="passwordConfirm" className={styles.label}>CONFIRM PASSWORD</Label>
            <Input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="Confirm your password"
              minLength={6}
              maxLength={20}
              required
              className={styles.input}
            />
          </FormGroup>

          <Button type="submit" outline className={styles.formBtn}>REGISTER</Button>
        </Form>
      </Container>
      <ToastComponent isOpen={toastIsOpen} message={toastMessage} color="bg-danger" />
    </>
  )
}

export default RegisterForm