import { server } from "./mocks/server";

// 모든 테스트 전에 서버를 시작합니다.
beforeAll(() => server.listen());

// 각 테스트 이후에 핸들러를 재설정합니다.
afterEach(() => server.resetHandlers());

// 모든 테스트가 완료되면 서버를 종료합니다.
afterAll(() => server.close());
