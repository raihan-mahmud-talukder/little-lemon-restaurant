import { reviews } from "../resources/review"

export const Testimonial = () => {
    return (
        <>
            <h2>Testimonials</h2>
            {reviews.map(data => <Reviews item={data} key={data.id} />)}
        </>
    )
}

const Reviews = ({ item }) => {
    return (
        <section>
            <img />
            <h4>{item.name}</h4>
            <h5>{item.prof}</h5>
            <p>{item.review}</p>
            <span>{item.rating}</span>
        </section>
    )
}