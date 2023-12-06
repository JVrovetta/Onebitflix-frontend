// Components
import { Metadata } from "next"
import LoginForm from "@/components/Login/LoginForm"

export const metadata: Metadata = {
  title: "Onebitflix - Login"
}

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}

export default Login