export default function Item({ name, done }) {
    return (
      <li>
        {name} {done && "✅"}
      </li>
    );
  }
  