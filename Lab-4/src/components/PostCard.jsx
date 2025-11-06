export default function PostCard({ title, body }) {
  return (
    <div className="PostCard">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}