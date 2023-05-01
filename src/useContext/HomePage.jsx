import { useContext } from "react"
import { userContext } from "./context/useContext"

export const HomePage = () => {
  const user  = useContext(userContext)
  console.log(user)
    return (
      <h1>HomePage</h1>
    )
  }
  