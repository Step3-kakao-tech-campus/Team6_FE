import { rest } from "msw";
import { accounts } from "../datas/accounts";

export const editUserHandler = rest.patch("/userinfo/edit", (req, res, ctx) => {
  const { email } = req.body;
  const isEmailUsed = accounts.some((user) => user.email === email);

  if (isEmailUsed) {
    // 이메일이 이미 사용 중인 경우
    return res(
      ctx.status(500),
      ctx.json({
        success: false,
        response: null,
        error: {
          message: "This email is already being used by someone else",
          status: 500,
        },
      }),
    );
  }

  // 이메일이 사용 중이지 않은 경우
  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      response: null,
      error: null,
    }),
  );
});

export const uploadUserImageHandler = rest.post(
  "/userinfo/image",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: "https://picsum.photos/200",
        error: null,
      }),
    );
  },
);
