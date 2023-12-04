// Styles
import styles from "@/styles/registerLogin.module.scss"
// Components
import { Metadata } from "next"
import HeaderGeneric from "@/components/common/HeaderGeneric"

export const metadata: Metadata = {
  title: "Onebitflix - Register"
}

const Register = () => {
  return (
    <>
      <main>
        <HeaderGeneric btnContent="Login Here" btnUrl="/login" />
      </main>
    </>
  )
}

export default Register