import { useState, useEffect } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

   const fetchData = async () => {
   const response = await fetch(URL);
    const data = await response.json();
    //sorting (newest appear first)
    const sortedData = data.slice().sort((a, b) => b.id - a.id);
    console.log(sortedData);
    setData(sortedData);
    setLoading(false);
  };

  const handleOnChange = (e) => {
    setNewPost((prevPost) => {
      return {
        ...prevPost,
        [e.target.name]: e.target.value,
      };
    });
  };

  //adding new posts + seeing if they filled out all info
  const handleAddToList = (e) => {
    e.preventDefault();
    if (newPost.title === "") {
      alert("pls add a title");
    } else if (newPost.body === "") {
      alert("pls add a body");
    } else {
      setData((prevList) => {
        return [newPost, ...prevList];
      });
      console.log(data);
      setNewPost({
        title: "",
        body: "",
      });
      console.log(data);
    }
  };

  return (
    <div>
      <h1>Fake API App</h1>
      {Loading && <h2>Loading...</h2>}
      <PostForm
        newPost={newPost}
        handleOnChange={handleOnChange}
        handleAddToList={handleAddToList}
      />
      <PostsContainer data={data} />
    </div>
  );
}