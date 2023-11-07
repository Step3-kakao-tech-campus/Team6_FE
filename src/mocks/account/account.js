import { accounts } from "../datas/accounts.js";
import { rest } from "msw";

export const addAccount = (account) => {
  accounts.push(account);
};
export const register = (account) => {
  const duplicatedEmail = accounts.find((a) => a.email === account.email);
  if (duplicatedEmail) {
    throw new Error("email is already exist");
  }
  const duplicatedId = accounts.find((a) => a.id === account.id);
  if (duplicatedId) {
    throw new Error("id is already exist");
  }
  const duplicatedNickname = accounts.find(
    (a) => a.nickname === account.nickname,
  );
  if (duplicatedNickname) {
    throw new Error("nickname is already exist");
  }
  return addAccount(account);
};

export const login = (account) => {
  return new Promise((resolve, reject) => {
    console.log("request account", account);
    console.log(
      "accounts",
      accounts.map((a) => {
        return { id: a.id, password: a.password };
      }),
    );
    const found = accounts.find(
      (a) => a.id === account.id && a.password === account.password,
    );
    if (found) {
      resolve(found);
    } else {
      reject("email or password is not correct");
    }
  });
};

export const loginHandler = rest.post("/login", async (req, res, ctx) => {
  const { id, password } = req.body;
  try {
    const account = await login({ id, password });
    if (account)
      return res(
        ctx.set("token", "t0k1e2n3"),
        ctx.status(200),
        ctx.json({
          success: true,
          response: 1,
          error: null,
        }),
      );
    throw new Error("email or password is not correct");
  } catch (error) {
    return res(
      ctx.status(400),
      ctx.json({
        success: false,
        response: null,
        error: error,
      }),
    );
  }
});

export const registerHandler = rest.post("/register", (req, res, ctx) => {
  const { name, nickName, email, password, nationality, birthday } = req.body;
  register({ name, nickName, email, password, nationality, birthday })
    .then((account) => {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: account,
        }),
      );
    })
    .catch((error) => {
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          response: null,
          error: error,
        }),
      );
    });
});
