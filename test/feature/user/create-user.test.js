import { describe } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { step } from "../../../step/step.js";
import { assert } from "../../../util/assert.js";

const expect = assert.expect;

export default function createUserTest(data) {
  const resp          = step.user.createUser(data);
  const respJson      = resp.json()
  const assertMessage = parseInt(respJson.message)

  describe("TCU-01: Create User", () => {
    expect.statusCode(resp,200);
    expect.equal(assertMessage, data.id,
      `Success create user ${data.username} with id`
    )
  });
  return resp;
}