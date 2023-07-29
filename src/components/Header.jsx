import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <>
            <Navbar />
            <div className="header">
                <aside>
                    <h1>Little Lemon Restaurant</h1>
                    <h3>Mirpur, Dhaka</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore ipsum at ducimus voluptatibus perferendis modi libero mollitia maiores, autem magnam laboriosam commodi. Repudiandae culpa sed porro ipsa aperiam, nihil veritatis dolores qui magni et deleniti esse aliquid praesentium voluptates, necessitatibus libero numquam! Recusandae et voluptatibus officia, maxime minima ex odio doloremque nisi nobis quaerat tempore vero praesentium optio! Architecto, mollitia. Magnam, aut officia blanditiis eligendi odit pariatur cumque corrupti vitae odio modi commodi temporibus expedita! Hic dignissimos quod impedit minima odio tenetur dolor repudiandae dolore magni deleniti repellat, vitae deserunt placeat esse, voluptas neque? Nihil numquam incidunt optio nisi.
                    </p>
                    <button>Reserve Table</button>
                </aside>
                <div className="image">
                    <img className="header-img" src="images/serve.jpg" alt="serving food" />
                </div>
            </div>
        </>
    )
}