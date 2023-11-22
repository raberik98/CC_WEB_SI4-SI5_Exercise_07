
import "./MenuSelector.css"

export default function MenuSelector() {
    
    return <form className="menu-selector">
        <select>
            <option value={1}>
                Food name
            </option>
            <option value={1}>
                Food name
            </option>
            <option value={1}>
                Food name
            </option>
        </select>
        <button>Place order!</button>
    </form>
}