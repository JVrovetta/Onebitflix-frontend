"use client"

// Styles
import styles from "@/styles/profile.module.scss"
// Services
import profileService from "@/services/profileService"
// Components
import { useState, FormEvent } from "react"
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import ToastComponent from "@/components/common/ToastComponent"
import { useRouter } from "next/navigation"

const PasswordForm = () => {
  const router = useRouter()

  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastColor, setToastColor] = useState("")

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("")

  const handlePasswordUpdate = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    if (newPassword === newPasswordConfirm && newPassword !== currentPassword) {
      const res = await profileService.passwordUpdate({ currentPassword, newPassword })
      if (res === 204) {
        sessionStorage.clear()
        router.push("/auth/login?passwordUpdated=true")
      } else {
        setToastIsOpen(true);
        setTimeout(() => { setToastIsOpen(false) }, 1000 * 4)
        setToastMessage("Current password is incorrect.")
        setToastColor("bg-danger")
      }
    } else {
      setToastIsOpen(true);
      setTimeout(() => { setToastIsOpen(false) }, 1000 * 4)
      setToastColor("bg-danger")
      newPassword !== newPasswordConfirm ? setToastMessage("Password and confirmation don't match.")
        : setToastMessage("New password cannot be the same as the current password.")
    }
  }

  return (
    <>
      <Form className={styles.form} onSubmit={handlePasswordUpdate}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="currentPassword" className={styles.formLabel}>CURRENT PASSWORD</Label>
            <Input
              id="currentPassword"
              name="currentPassword"
              type="password"
              placeholder="******"
              minLength={6}
              maxLength={20}
              required
              value={currentPassword}
              onChange={(ev) => { setCurrentPassword(ev.currentTarget.value) }}
              className={styles.input}
            />
          </FormGroup>
        </div>

        <Row className={styles.inputGridDiv}>
          <Col md>
            <FormGroup>
              <Label for="newPassword" className={styles.formLabel}>NEW PASSWORD</Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="******"
                minLength={6}
                maxLength={20}
                required
                value={newPassword}
                onChange={(ev) => { setNewPassword(ev.currentTarget.value) }}
                className={styles.inputGrid}
              />
            </FormGroup>
          </Col>
          <Col md>
            <FormGroup>
              <Label for="newPasswordConfirmation" className={styles.formLabel}>NEW PASSWORD CONFIRMATION</Label>
              <Input
                id="newPasswordConfirmation"
                name="newPasswordConfirmation"
                type="password"
                placeholder="******"
                minLength={6}
                maxLength={20}
                required
                value={newPasswordConfirm}
                onChange={(ev) => { setNewPasswordConfirm(ev.currentTarget.value) }}
                className={styles.inputGrid}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="d-flex jutify-content-center">
          <Button type="submit" className={styles.formBtn} outline color="light">Save Changes</Button>
        </div>
      </Form>
      <ToastComponent isOpen={toastIsOpen} message={toastMessage} color={toastColor} />
    </>
  )
}
export default PasswordForm