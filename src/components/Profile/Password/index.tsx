// Styles
import styles from "@/styles/profile.module.scss"
// Components
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"

const PasswordForm = () => {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="currentPassword" className={styles.formLabel}>CURRENT PASSWORD</Label>
            <Input
              id="currentPassword"
              name="currentPassword"
              type="password"
              placeholder="Enter your current password."
              minLength={6}
              maxLength={20}
              required
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
                placeholder="Enter your new password."
                minLength={6}
                maxLength={20}
                required
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
                placeholder="Re-enter your new password."
                minLength={6}
                maxLength={20}
                required
                className={styles.inputGrid}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="d-flex jutify-content-center">
          <Button type="submit" className={styles.formBtn} outline color="light">Save Changes</Button>
        </div>
      </Form>
    </>
  )
}
export default PasswordForm