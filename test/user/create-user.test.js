import { describe } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { createUser } from "../../step/user/create-user.js";
import { assert } from "../../util/assert.js";

const expect = assert.expect;

export default function createUserTest() {
  const resp = createUser();
  describe("TCU-01: Create User", () => {
    expect.statusCode(resp,200);
  });
  return resp;
}