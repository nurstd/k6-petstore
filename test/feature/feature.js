import addNewPetTest from "./pet/add-new-pet.test.js"
import createUserTest from "./user/create-user.test.js"
import deleteUserTest from "./user/delete-user.test.js"

export const feature = {
  pet   : {
    addPet      : addNewPetTest,
  },
  user  : {
    createUser  : createUserTest,
    deleteUser  : deleteUserTest,
  },  
}