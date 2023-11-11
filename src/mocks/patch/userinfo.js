import { rest } from "msw";
import { USER } from "../datas/user";

export const editUserHandler = rest.patch("/userinfo/edit", (req, res, ctx) => {
  const { email } = req.body;

  // USER 데이터에 있는 이메일과 일치하는지 확인
  const isEmailUsed = USER.some((user) => user.email === email);

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
