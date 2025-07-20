type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostDetails({ post }: { post: Post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
