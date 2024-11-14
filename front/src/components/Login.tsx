import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState(null); // State to store the response
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // State to store error messages


  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username: username,
        password: password,
      });

      console.log(response.data);
      console.log(username);
      console.log(password);
      
      
      
      setUser(response.data); // Store user data to display
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Error making POST request."); // Set error message
      console.error("Error making POST request:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    postData();
  };

  return (
    <>
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            style={{padding:'8px'}}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit">Login</button>
      </form>
    </div>
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
    </>
  );
};

export default Login;
