import { logout } from "../actions"
import { navigate } from "gatsby"
import { useEffect } from "react"

const Logout = () => {
  useEffect(() => {
    async function fetchData() {
      await logout()
      if (typeof localStorage !== `undefined`) {
        localStorage.clear()
      }
      navigate("/")
    }
    fetchData()
  }, [])

  return null
}

export default Logout
