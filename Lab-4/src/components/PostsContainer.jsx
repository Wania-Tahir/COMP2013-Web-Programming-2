import PostCard from "./PostCard";
export default function PostsContainer({ data }) {
  return (
    <div className="PostContainer">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}