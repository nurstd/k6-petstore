import { describe } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { feature } from "../feature/feature.js";
import { utils } from "../../util/util.js";

const data_directory = '../../data/user/user-list.csv'
const userData = new utils.parse(data_directory, "userData");

export default function crudUserTest() {
  describe("Regression Test CRUD User", () => {
    for(let i in userData){
      let data = userData[i]
      feature.user.createUser(data);
      feature.user.deleteUser(data);
    }
    
  });
}