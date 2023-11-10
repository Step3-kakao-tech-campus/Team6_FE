export const RESTAURANT_RESERVATIONS = [
  {
    id: 3,
    placeId: 1,
    type: "RESTAURANT",
    name: "Restaurant Name",
    address: "location of restaurant",
    image: "https://picsum.photos/211",
    date: "2023-09-13",
    time: "18:30",
    message: "please give me a good seat",
    status: "리뷰완료",
    headCount: 2,
  },
];

export const FESTIVAL_RESERVATIONS = [
  {
    id: 1,
    placeId: 1, //예약한 객체에 대한 id
    type: "festival",
    name: "Festival Name",
    address: "location of festival",
    image: "https://picsum.photos/212",
    date: "2023-09-13",
    message: "",
    status: "예약대기",
  },  {
    id: 2,
    placeId: 1, //예약한 객체에 대한 id
    type: "festival",
    name: "festival Name",
    address: "location of festival",
    image: "https://picsum.photos/213",
    date: "2023-09-13",
    message: "",
    status: "예약완료",
  },
];
