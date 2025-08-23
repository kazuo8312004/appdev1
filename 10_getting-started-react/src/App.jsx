import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <section>
        <h1>About Me</h1>
        <p><strong>Name:</strong> Kirk Percival B. Del Pilar</p>
        <p><strong>Course/Year:</strong> BS Information Technology, 3rd Year</p>
        <p><strong>Fun Fact:</strong> New error for me is progress</p>
      </section>

      <hr />

      <section>
        <h2>Why I Want to Learn Git & GitHub</h2>
        <p>
          I want to learn Git and GitHub because they are essential for my academic success.
          Mastering them will help me pass this class and earn a good grade.
        </p>
      </section>

    </div>
  )
}

export default App
