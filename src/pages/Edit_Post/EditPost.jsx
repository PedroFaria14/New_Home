import styles from "./EditPost.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useAuthValue } from "../../context/AuthContext";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [formError, setFormError] = useState("");

  // Fill form data
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);
      setTags(post.tags.join(", "));
      setPrice(post.price); // Add this line to set the price
    }
  }, [post]);

  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { updateDocument, response } = useUpdateDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // Validate image URL
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL válida.");
      return;
    }

    // Create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    // Prepare data for update
    const data = {
      title,
      image,
      body,
      tags: tagsArray,
      price, // Include the price in the data object
    };

    // Update document
    updateDocument(id, data);

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h1>Editando a Propriedade: {post.title}</h1>
          <p>Altere os dados da propriedade conforme necessário</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input
                type="text"
                name="title"
                required
                placeholder="Digite um título..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              <span>URL da Imagem:</span>
              <input
                type="text"
                name="image"
                required
                placeholder="Insira uma URL da imagem"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img
              className={styles.image_preview}
              src={image}
              alt={title}
            />
            <label>
              <span>Conteúdo:</span>
              <textarea
                name="body"
                required
                placeholder="Insira o conteúdo"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input
                type="text"
                name="tags"
                required
                placeholder="Insira as tags separadas por vírgula"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </label>
            <label>
              <span>Preço:</span>
              <input
                type="text"
                name="price"
                required
                placeholder="Insira o preço"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <div className='btnCadas'> 
            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde.. .
              </button>
            )}</div>
            {(response.error || formError) && (
              <p className={styles.error}>{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
