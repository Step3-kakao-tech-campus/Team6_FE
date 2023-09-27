// mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/api/search", (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    if (query) {
      return res(
        ctx.status(200),
        ctx.json({
          results: {
            restaurants: [
              {
                id: 1,
                name: "정문토스트",
                summary: "정문토스트는..",
                image: "/image/restaurant/1",
                address: "서울특별시 성북구 정릉동",
                averageScore: 4.4,
                liked: true,
              },
              {
                id: 1,
                name: "부산대 칠성돌곱창",
                summary: "정문토스트는..",
                image: "/image/restaurant/1",
                address: "서울",
                averageScore: 4.4,
                liked: true,
              },
            ],
            festivals: [
              {
                id: 1,
                name: "2023 부산 국제 락 페스티벌",
                summary: "부산 국제 락 페스티벌은...",
                image: "/image/festival/1",
                address: "부산 해운대구",
                averageScore: 4.4,
                liked: true,
              },
            ],
            touristSpots: [
              {
                id: 1,
                name: "Signiel Busan",
                summary: "...",
                address: "부산 해운대구",
                liked: true,
              },
            ],
          },
        })
      );
    }

    return res(ctx.status(200), ctx.json({ result: {} }));
  }),
];
