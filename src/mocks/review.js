import {REVIEWS} from "./datas/reviews";

export const getReviews = (length) => {
    if (typeof length !== "number") {
        return {}
    }
    return REVIEWS[0]
}