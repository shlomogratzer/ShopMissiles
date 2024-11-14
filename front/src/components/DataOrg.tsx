import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserLoginContext } from '../context/UserProvider'

const DataOrg = () => {
  const userContext = useContext(UserLoginContext)
  // const [org,setOrg] = useState<any>()
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const postData = async () => {
    try {
  const response = await axios.post("http://localhost:3000/org/mydata", {
    org:userContext?.loginUser.org
  })
  setUser(response.data); // Store user data to display
    setError(null); 
  } catch (error) {
    setError("Error making POST request."); // Set error message
    console.error("Error making POST request:", error);
  }
}

useEffect(()=>{
  postData()
})
  return (
    <div>
      <h2>organisation: {userContext?.loginUser.org}</h2>
      {/* Display the response or error */}
      <div>
        {user && (
          <div>
            <h3>Response from Server:</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

    </div>
  )
}

export default DataOrg
