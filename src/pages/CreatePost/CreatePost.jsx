import styles from "./Post.module.css";
import { useState } from "react";
import { useInsertDocument } from "../../hooks/userInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [formError, setFormError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!selectedImage) {
      setFormError("Por favor, selecione uma imagem.");
      return;
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    try {
      await insertDocument({
        title,
        image: selectedImage,
        body,
        tags: tagsArray,
        price,
        uid: user.uid,
        createdBy: user.displayName,
      });

      navigate("/");
    } catch (error) {
      setFormError("Ocorreu um erro ao criar o post. Por favor, tente novamente.");
    }
  };

  return (
    <div className={styles.create_post}>
      <h1>Inclua informações sobre a propriedade</h1>
      <p>Compartilhe informações sobre a propriedade</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Selecione uma imagem do seu computador:</span>
          <input
            type="file"
            accept="image/*"
            className={styles.customFileInput}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  setSelectedImage(event.target.result);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </label>

        <label>
        <span>Preço:</span>
        <input
          type="text"
          name="price"
          required
          placeholder="Coloque o valor do imóvel"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Fale sobre a propriedade"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className="texta"
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <div className='btnCadas'> 
          {!response.loading && <button className="btn">Criar post!</button>}
          {response.loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
        </div>
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
