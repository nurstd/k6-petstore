import { describe } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { step } from "../../../step/step.js";
import { assert } from "../../../util/assert.js";

const expect = assert.expect;

export default function addNewPetTest() {
  const resp = step.pet.addPet();
  describe("TCP-01: Add New Pet", () => {
    expect.statusCode(resp,200);
  });
  return resp;
}