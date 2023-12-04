"use client"

// Styles
import styles from "./styles.module.scss"
// Components
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap"

const RegisterForm = () => {
  return (
    <>
      <script src="https://jsuites.net/v4/jsuites.js"></script>
      <Container className="py-5">
        <p className={styles.formTitle}><strong>Welcome to OneBitFlix!</strong></p>
        <Form className={styles.form}>
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
    </>
  )
}

export default RegisterForm