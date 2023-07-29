import { menus } from "../resources/menu"

export const Special = () => {
   const trending = menus.filter(item => {
      if (item.trending) return item
   })
   return (
      <div className="special">
         <h2>Weekend Special!</h2>
         <article>
            {trending.map(data => <Trending item={data} key={data.id} />)}
         </article>
      </div>
   )
}

const Trending = ({ item }) => {
   return (
      <div className="trending">
         <div className="title">
            <span className="text">{item.title}</span>
            <span className="price">{item.price} €</span>
         </div>
         <img src={item.img} alt={item.title} />
         <p>{item.description}</p>
         <button>Order Now</button>
      </div>
   )
}