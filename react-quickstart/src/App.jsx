// App.jsx
import './App.css';

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

function Greeting() {
  return (
    <h1>Hello, Admin!</h1>
  );
}

function Greeting2() {
  return (
    <h1>Admin not found</h1>
  );
}

function CheckAdmin() {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <Greeting />;
  } else {
    return <Greeting2 />;
  }
}

function SubjectList() {
  const subjects = ['Math', 'Science', 'Programming'];
  return (
    <ul>
      {subjects.map((subject, index) => (
        <li key={index}>{subject}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <MyApp />
      <MyButton />
      <CheckAdmin />
      <SubjectList />
    </div>
  );
}

export default App;