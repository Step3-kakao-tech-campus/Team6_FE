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
                name: "Pusan National University Main Gate Toast",
                summary:
                  "Jeongmun Toast is an old toast house famous among Pusan National University students. this store was dis...",
                image:
                  "https://mp-seoul-image-production-s3.mangoplate.com/1297623_1569208351545507.jpg",
                address: "Pusan National University, Pusan",
                averageScore: 4.4,
                liked: true,
              },
              {
                id: 1,
                name: "부산대 칠성돌곱창",
                summary: "정문토스트는..",
                image: "/image/restaurant/1",
                address: "Seoul",
                averageScore: 3.7,
                liked: true,
              },
            ],
            festivals: [
              {
                id: 1,
                name: "2023 Pusan International Rock Festival",
                summary: "부산 국제 락 페스티벌은...",
                image: "/image/festival/1",
                address: "Pusan Samrak Subyeon Park",
                averageScore: 4.4,
                liked: true,
              },
            ],
            touristSpots: [
              {
                id: 1,
                name: "Signiel Busan",
                summary: "...",
                address: "Pusan Haeundae",
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
