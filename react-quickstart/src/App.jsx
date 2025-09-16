
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function MyApp() {
  return (
    <h1 className='message'>Welcome to my app</h1>
  );
}


function App() {

  return (
    <div>
      <MyApp />
    </div>
  )
}

export default App
