import { addNewPet } from "./pet/add-new-pet.js";
import { createUser } from "./user/create-user.js";
import { deleteUser } from "./user/delete-user.js";

export const step = {
  pet   : {
    addPet      : addNewPet,
  },
  user  : {
    createUser  : createUser,
    deleteUser  : deleteUser,
  },  
}