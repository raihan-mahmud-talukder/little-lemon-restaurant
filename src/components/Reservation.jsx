export const Reservation = () => {
    return (
        <div className="reserve">
            <div className="text">
                <h1>Reserve a Table</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempore! Ad molestiae possimus quasi quidem dolorum iusto ipsum quia obcaecati dolorem ab inventore necessitatibus est vero blanditiis fugit optio magni quae natus nobis vel sint assumenda, officiis numquam. Quisquam quae fugit asperiores iste quod! Ipsa laudantium harum porro rerum odit.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempore! Ad molestiae possimus quasi quidem dolorum iusto ipsum quia obcaecati dolorem ab inventore necessitatibus est vero blanditiis fugit optio magni quae natus nobis vel sint assumenda, officiis numquam. Quisquam quae fugit asperiores iste quod! Ipsa laudantium harum porro rerum odit.</p>
            </div>
            <form>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </select>
                <input type="submit" value="Make Your Reservation" />
            </form>
        </div>
    )
}