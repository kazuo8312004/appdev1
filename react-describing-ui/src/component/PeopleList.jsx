import { people } from "./Data";

export default function PeopleList() {
  return (
    <ul>
      {people.map(person =>
        <li key={person.id}>
          {person.name} - {person.role}
        </li>
      )}
    </ul>
  );
}
