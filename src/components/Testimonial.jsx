import { reviews } from "../resources/review"

export const Testimonial = () => {
    return (
        <div className="testimonial">
            <h2>Testimonials</h2>
            <section>
                {reviews.map(data => <Reviews item={data} key={data.id} />)}
            </section>
        </div>
    )
}

const Reviews = ({ item }) => {
    return (
        <div className="review">
            <div className="rating">
                <img src={item.img} />
                <div>
                    <h3>{item.name}</h3>
                    <h4>{item.prof}</h4>
                    <span>Ratting: {item.rating}</span>
                </div>
            </div>
            <p>{item.review}</p>
        </div>
    )
}