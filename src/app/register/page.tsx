// Styles
import styles from "@/styles/registerLogin.module.scss"
// Components
import { Metadata } from "next"
import HeaderGeneric from "@/components/common/HeaderGeneric"
import RegisterForm from "@/components/Register/RegisterForm"
import Footer from "@/components/common/Footer"
// Interfaces


export const metadata: Metadata = {
  title: "Onebitflix - Register"
}

const Register = () => {
  return (
    <>
      <main className={styles.main}>
        <HeaderGeneric btnContent="Login Here" btnUrl="/login" />
        <RegisterForm />
        <Footer />
      </main>
    </>
  )
}

export default Register