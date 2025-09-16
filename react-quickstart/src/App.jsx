
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

const user = { 
  name: 'Percy',              
  age: 18,
  course: 'BSIS-3A'
  };

function MyApp() {
  return (
    <h1 className='message'>Welcome to my {user.name} app</h1>
  );
}



function App() {

  return (
    <div>
      <MyApp />
      <MyButton />
    </div>
  )
}

export default App
