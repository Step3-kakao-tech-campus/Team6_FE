import instance from "./api";

export const getReservation = async () => {
    const restaurant =  await instance.get("/userinfo/reservation/restaurant");
    const festival = await instance.get("/userinfo/reservation/festival");
    return {
        restaurant : restaurant.data.response,
        festival : festival.data.response
    }
}