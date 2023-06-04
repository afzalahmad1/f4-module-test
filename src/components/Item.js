import { useLocation } from "react-router-dom"
import './styles.css'

const Item = ()=>{

const location = useLocation();

//console.log(location.state.postDetails)


    return(
        <div className="item-page">
          <h1>Details Page For Post With ID {location.state.postDetails.id}</h1>
          <div className="item1">
              <img src={`https://picsum.photos/200?random=${location.state.postDetails.id}`} alt="post" />
              <p><strong>User ID: </strong> {location.state.postDetails.userId}</p>
              <p><strong>Title: </strong> {location.state.postDetails.title}</p>
              <p><strong>Body: </strong> {location.state.postDetails.body}</p>
            </div>
          </div>
    )
}
export default Item;