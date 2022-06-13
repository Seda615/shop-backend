import express from "express";
import bodyParser from "body-parser"
import {User} from "../../models/User/index.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import genAuthToken from "../../utils/genAuthToken/index.js"

const router = express.Router();

router.post('/', bodyParser.json(), async (req, res) => {

  const schema = Joi.object({
    email: Joi.string().min(10).max(30).required().email(),
    password: Joi.string().min(6).max(200).required()
  });

  const {error} = schema.validate(req.body);
  const user = await User.findOne({email: req.body.email});

  let isValid
  if (user) isValid = await bcrypt.compare(req.body.password, user.password);

  if (error) {

    const message = error.details[0].message;
    const index = message.lastIndexOf('"');
    const errorName = message.slice(1, index);
    res.status(400).send({[errorName]: message.slice(index + 1)});

  } else if (!user) {

    res.status(400).send({message: "Invalid email or password..."});

  } else if (!isValid) {

    res.status(400).send({message: "Invalid email or password..."});

  } else {

    const token = genAuthToken(user);
    res.send({token});

  }
})

export default router
