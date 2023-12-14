"use client"

// Styles
import styles from "@/styles/registerLogin.module.scss"
//Components
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import ToastComponent from "@/components/common/ToastComponent"
import authService from "@/services/authService"

const LoginForm = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastColor, setToastColor] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("onebitflix-token")) {
      router.push("/home")
    }
  }, [])

  useEffect(() => {
    const registerSuccess = params.get('registred')
    console.log(registerSuccess);

    if (registerSuccess) {
      setToastIsOpen(true)
      setTimeout(() => { setToastIsOpen(false) }, 1000 * 4)
      setToastMessage("Account created successfully!")
      setToastColor("bg-success")
    }
  }, [])

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")!.toString()
    const password = formData.get("password")!.toString()
    const params = { email, password }

    const { status } = await authService.login(params)
    if (status === 200) {
      router.push("/home")
    } else {
      setToastIsOpen(true);
      setTimeout(() => { setToastIsOpen(false) }, 1000 * 4)
      setToastMessage("Invalid email or password. Please try again.")
      setToastColor("bg-danger")
    }
  }

  return (
    <>
      <Container className="py-5">
        <p className={styles.formTitle}><strong>Welcome back!</strong></p>
        <Form className={styles.form} onSubmit={handleLogin}>
          <p className="text-center"><strong>Log into your account!</strong></p>

          <FormGroup>
            <Label for="email" className={styles.label}>E-MAIL:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your e-mail address"
              required
              className={styles.input}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password" className={styles.label}>PASSWORD:</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              minLength={6}
              maxLength={20}
              required
              className={styles.input}
            />
          </FormGroup>

          <Button type="submit" outline className={styles.formBtn}>ENTER</Button>
        </Form>
      </Container>
      <ToastComponent isOpen={toastIsOpen} message={toastMessage} color={toastColor} />
    </>
  )
}
export default LoginForm