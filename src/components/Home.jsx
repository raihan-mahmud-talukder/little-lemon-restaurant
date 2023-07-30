import { Header } from "./Header"
import { Special } from "./Special"
import { Testimonial } from "./Testimonial"

export const Home = () => {
    document.title = 'Little Lemon Restaurant'
    return (
        <>
            <Header />
            <Special />
            <Testimonial />
        </>
    )
}