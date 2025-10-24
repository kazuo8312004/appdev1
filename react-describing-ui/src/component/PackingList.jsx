import Item from "./Item";

export default function PackingList() {
  return (
    <ul>
      <Item name="Laptop" done={true} />
      <Item name="Notes" done={false} />
    </ul>
  );
}
