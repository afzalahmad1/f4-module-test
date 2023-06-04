import { useLocation } from "react-router-dom"
import './styles.css'

const Item = ()=>{

const location = useLocation();

//console.log(location.state.postDetails)


    return(
        <div className="item-page">
          <h1>Details Page For Post With ID {location.state.postDetails.id}</h1>
          <div className="item1">
              <img src="https://picsum.photos/200?random=${post.id}" alt="post" />
              <p>User ID: {location.state.postDetails.id}</p>
              <p>Title: {location.state.postDetails.title}</p>
              <p>Body: {location.state.postDetails.body}</p>
            </div>
          </div>
    )
}
export default Item;