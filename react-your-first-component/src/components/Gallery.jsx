import Profile from './Profile';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      {/* Using Profile component multiple times */}
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
