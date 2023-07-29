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
                        Lorem ipsum dolor necessitatibus libero numquam! Recusandae et voluptatibus officia, maxime minima ex odio doloremque nisi nobis quaerat tempore vero praesentium optio! Architecto, mollitia. Magnam, aut officia blanditiis eligendi odit pariatur cumque corrupti vitae odio modi commodi temporibus expedita! Hic dignissimos quod impedit minima odio tenetur dolor repudiandae dolore magni deleniti repellat, vitae deserunt placeat esse, voluptas neque? Nihil numquam incidunt optio nisi.
                    </p>
                    <button>Reserve Table</button>
                </aside>
                <div className="image">
                    <img src="images/serve.jpg" alt="serving food" />
                </div>
            </div>
        </>
    )
}