const student = {
  name: "Kirk Percival B. Del Pilar",
  course: "BSIS 3-A"
};

export default function App() {
  return (
    <div style={{ backgroundColor: "black", color: "pink", padding: "10px" }}>
      <h1>{student.name}'s Activity</h1>
      <p>Course: {student.course}</p>
    </div>
  );
}
