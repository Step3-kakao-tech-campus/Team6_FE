import { USER } from "../datas/user";
import { rest } from "msw";

export const getUserinfo = () => {
  return {
    data: {
      response: USER,
    },
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
