import Rating from "./Rating";

const ReviewCardHeader = ({ image, name, rating }) => {
    return (
        <div className={"review-card-header flex gap-2"}>
            <img src={image} alt={name} className={"rounded-full h-[4rem] w-[4rem] border-tripKoOrange-300 border-4"} />
            <div className={"review-card__header__info justify-evenly"}>
                <h3 className={"font-bold text-tripKoOrange-500 text-2xl line-clamp-1"}>{name}</h3>
                <Rating rating={rating} />
            </div>
        </div>
    )
}

export default ReviewCardHeader