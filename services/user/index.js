import {User} from "../../models/User/index.js";
import bcrypt from "bcrypt";

export const createUser = async (req) => {

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: '',
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  return user;
}
