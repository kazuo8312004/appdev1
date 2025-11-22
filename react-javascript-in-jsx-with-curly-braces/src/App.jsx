import './App.css'

function App() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  const name = 'Gregorio Y. Zara';  
  return (
    <>
      <img
      className="avatar" 
      src={avatar}
      alt={description}
      />
      <h1>{name}'s to do List</h1>
    </>
  )
}

export default App
