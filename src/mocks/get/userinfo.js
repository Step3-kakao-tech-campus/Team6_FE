import { rest } from "msw";

export const getUserinfo = () => {
  return {
    id: 1,
    name: "가나다",
    nickName: "쿠키",
    email: "1234@gmail.com",
    image: "https://picsum.photos/200",
    nationality: null,
    birthday: "2023-01-01",
  };
};

export const getUserinfoHandler = rest.get("/userinfo", (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      response: getUserinfo(),
    }),
  );
});
