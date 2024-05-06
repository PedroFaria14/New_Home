// CSS
import styles from "./Post.module.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams, Link } from "react-router-dom"; // Importe o Link aqui

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <h4>{post.body}</h4
          >
          <p>Preço: {post.price}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
          <Link to="/" className="btn btn-voltar">Voltar</Link> 
        </>
      )}
    </div>
  );
};

export default Post;
