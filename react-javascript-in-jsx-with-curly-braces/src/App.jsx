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

      <ul style={{
        backgroundColor: 'black',
        color: 'pink',
      }}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  )
}

export default App
