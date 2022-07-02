import express from "express";
import bodyParser from "body-parser"
import {createUser} from "../../services/user/index.js";
import bcrypt from "bcrypt";
import {User} from "../../models/User/index.js";
import Joi from "joi";
import genAuthToken from "../../utils/genAuthToken/index.js"

const router = express.Router();

const schema = Joi.object({
  firstname: Joi.string().min(3).max(10).required(),
  lastname: Joi.string().min(7).max(20).required(),
  email: Joi.string().min(10).max(30).email().required(),
  password: Joi.string().min(6).max(200).required(),
  confirmPassword: Joi.string().min(6).max(12)
}).options({ abortEarly: false });

router.post('/', bodyParser.json(), async (req, res) => {

  const {error} = schema.validate(req.body);
  let user = await User.findOne({"email": req.body.email});

  if (error) {
    let message;

    error.details.forEach((item, i) => {
      const index = item.message.lastIndexOf('"');
      const errorName = item.message.slice(1, index);
      message = {...message, [errorName]: item.message.slice(index + 1)};
    });

    res.status(400).send(message)

  } else if (req.body.password !== req.body.confirmPassword) {

    res.status(400).send({message: "password and confirm password must be same"});

  } else if (user) {
    res.status(400).send({message: "User already exist"});

  } else {
    user = createUser(req)
      .then(response => {
        response.save();
        const token = genAuthToken(user);
        res.send( {token})
      })
  }
})


export default router
