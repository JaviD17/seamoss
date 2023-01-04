import { notFound } from "next/navigation";

const PostPage = ({ post }: any) => {
  console.log(post);
  const slug = post?.slug;
  if (!slug) {
    notFound();
  }
  return (
    <section className="container mx-auto my-4 text-center">
      {!post ? (
        <p>loading...</p>
      ) : (
        <>
          <h1 className="text-4xl">{post.title}</h1>
          <div>by {post.author.name}</div>
        </>
      )}
    </section>
  );
};

export default PostPage;
