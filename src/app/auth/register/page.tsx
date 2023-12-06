// Components
import { Metadata } from "next"
import RegisterForm from "@/components/Register/RegisterForm"

export const metadata: Metadata = {
  title: "Onebitflix - Register"
}

const Register = () => {
  return (
    <>
      <RegisterForm />
    </>
  )
}

export default Register