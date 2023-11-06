export const POST_RESTAURANT_RESERVATION = {
  code: 200,
  message: "예약이 성공적으로 완료되었습니다.",
  result: {
    id: 1,
    reservationDate: "2023-03-01",
    reservationTime: "19:00",
    placeId: 12345,
    headCount: 4,
    status: "확정",
    memberInfo: {
      realName: "John Doe",
      emailAddress: "johndoe@example.com",
    },
  },
};

export const POST_FESTIVAL_RESERVATION = {
  code: 200,
  message: "예약이 성공적으로 완료되었습니다.",
  result: {
    reservationId: 12,
    reservationDate: "2023-10-15",
    reservationTime: "15:00",
    status: "확정",
    memberInfo: {
      realName: "John",
      contactAddress: "johna@gmail.com",
    },
  },
};
