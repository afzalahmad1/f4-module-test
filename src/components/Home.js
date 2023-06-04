import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/post.actions";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let loading = useSelector((state) => state.post.loading);
  let data = useSelector((state) => state.post.data);
  let error = useSelector((state) => state.post.error);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const idPage=(data)=>{
    console.log(data.post)
    navigate("/item/:id",{state : {postDetails : data.post}})
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className="container">
      {data.map((post) => {
        return ( 
            <div key={post.id} className="item"  onClick={()=> idPage({post})}>
              <img src={`https://picsum.photos/200?random=${post.id}`} alt="post"  className="image"/>
              <p><strong>User ID:</strong> {post.userId}</p>
              <p><strong>Id:</strong> {post.id}</p>
              <p><strong>Title: </strong>{post.title}</p>
              <p> <strong>Body: </strong>{post.body}</p>
            </div>
        );
      })}
      </div>
    </div>
  );
}
