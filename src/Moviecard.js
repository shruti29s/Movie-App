import React from "react";

class MovieCard extends React.Component{

    render(){
        console.log(this.props);
        const{movies, addStars, decStars, toggleFav, toggleCart} = this.props;
        const {title, plot, price, rating, star, fav, isInCart, poster} = movies;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={poster} alt="Poster"></img>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" onClick={() => {decStars(movies)}}></img>
                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"></img>
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={() => {addStars(movies)}}></img>
                                <span className="starCount"> {star}</span>
                            </div>

                            {/* {fav ?<button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> : 
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            <button className={fav ? "unfavourite-btn" : "favourite-btn"} 
                            onClick={() => {toggleFav(movies)}}>{fav ? "UnFavourite" : "Favourite"}</button>


                            <button className={isInCart ? "unfavourite-btn" : "cart-btn"} 
                            onClick={() => {toggleCart(movies)}}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieCard;