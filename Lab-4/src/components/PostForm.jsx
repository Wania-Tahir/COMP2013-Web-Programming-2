export default function PostForm({ newPost, handleOnChange, handleAddToList }) {

  return (
    <div className="FormCard">
      <h3>create new post:</h3>
      <form action="" onSubmit={handleAddToList}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          value={newPost.title}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input
          type="text"
          name="body"
          id="body"
          value={newPost.body}
          onChange={handleOnChange}
        />
        <br />
        <input type="submit" name="submit" id="" />
      </form>
    </div>

  );

}