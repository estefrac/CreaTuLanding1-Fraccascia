import "./ItemListContainer.css"
import flork from "../../assets/img/flork.svg" 
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
        <h2>{greeting}</h2>
        <div className="flork">
        <img src={flork} className="flork" alt="Flork"/>
        <span className="flork-text">To be continued...</span>
        </div>
    </div>
  )
}

export default ItemListContainer