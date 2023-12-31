import { NavLink, Route, Routes } from "react-router-dom"
import { About } from "./About"
import { Menu } from "./Menu"
import { Reservation } from "./Reservation"
import { Home } from "./Home"
import { Chef } from "./Chef"

export const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <a href="/"><img src="images/logo.png" alt="little lemon restaurant" /></a>
                </nav>
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <menu>
                    <ul>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                        <li><NavLink to='/menu' className={({ isActive }) => (isActive ? 'active' : '')}>Menu</NavLink></li>
                        <li><NavLink to='/reserve' className={({ isActive }) => (isActive ? 'active' : '')}>Reserve</NavLink></li>
                        <li><NavLink to='/chef' className={({ isActive }) => (isActive ? 'active' : '')}>Chef</NavLink></li>
                    </ul>
                </menu>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reserve" element={<Reservation />} />
                <Route path="/chef" element={<Chef />} />
            </Routes>
        </>
    )
}