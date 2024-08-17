import { describe } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { step } from "../../../step/step.js";
import { assert } from "../../../util/assert.js";

const expect = assert.expect;

export default function deleteUserTest(userData) {
  const resp = step.user.deleteUser(userData);
  const respJson = resp.json()
  describe("TCU-02: Delete User", () => {
    expect.statusCode(resp,200);
    expect.equal(respJson.message, userData.username,
      `Success delete user`
    )
  });
  return resp;
}