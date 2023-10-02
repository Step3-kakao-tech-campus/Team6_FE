import FESTIVALS from "./datas/festivals";

export const getFestivalCards = (length) => {
    const selectedKeys = [
        "id",
        "name",
        "summary",
        "address",
        "averageScore",
        "liked",
    ];
    const festivalCard = Object.fromEntries(
        Object.entries(FESTIVALS[0]).filter(([key, value]) =>
            selectedKeys.includes(key),
        ),
    );
    festivalCard.image = "https://picsum.photos/200";
    return new Array(length).fill(festivalCard);
};

export const getFestivalDetail = (id) => {
    return FESTIVALS.find((festival) => festival.id === id);
};
