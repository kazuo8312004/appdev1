import { useEffect, useState } from "react";

function Login () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  function handleLogin() {
    const foundUser = users.find(user => user.username === username);
    if (!foundUser) {
      alert("Username not found!");
      return;
    }
    if (password !== SECRET) {
      alert("Incorrect password!");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    window.location.href = "/todos";
  }

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username (E.g., Bret)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;