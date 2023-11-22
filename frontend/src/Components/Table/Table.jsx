import MenuSelector from "../MenuSelector/MenuSelector"
import "./Table.css"

export default function Table() {
    
    return <div className="table-container">
        <h3 className="table-name">Good table</h3>
        <h4 className="table-number">4</h4>
        <p className="table-comment">Some comment comes here!</p>
        <button>Add an order!</button>
        <MenuSelector/>
    </div>
}