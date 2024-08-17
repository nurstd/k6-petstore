import { describe } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { step } from "../../../step/step.js";
import { assert } from "../../../util/assert.js";

const expect = assert.expect;

export default function createUserTest(userData) {
  const resp = step.user.createUser(userData);
  const respJson = resp.json()
  describe("TCU-01: Create User", () => {
    expect.statusCode(resp,200);
    expect.equal(respJson.message, userData.id,
      `Success create user ${userData.username} with id`
    )
  });
  return resp;
}