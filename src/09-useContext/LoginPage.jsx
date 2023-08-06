import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);
  
  return (
    <>
      <h4>LoginPage</h4>
      <hr />
      <pre>
        {
          JSON.stringify(user)
        }
      </pre>
      <button 
        className="btn btn-primary"
        onClick = { () => setUser({ id: 123, name: 'Ele', email: 'ele@gmail.com'})}
      >
        Establecer usuario
      </button>
    </>
  )
}
