import { menus } from "../resources/menu"

export const Menu = () => {
    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <figure>
                {menus.map(data => <Menus item={data} key={data.id} />)}
            </figure>
        </div>
    )
}

const Menus = ({ item }) => {
    return (
        <div className="menus">
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="order">
                <span>{item.price} €</span>
                <button>Order Now</button>
            </div>
        </div>
    )
}