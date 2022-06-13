import express from "express";
import bodyParser from "body-parser"
import {User} from "../../models/User/index.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import genAuthToken from "../../utils/genAuthToken/index.js"

const router = express.Router();

router.post('/', bodyParser.json(), async (req, res) => {

  const schema = Joi.object({
    firstname: Joi.string().min(3).max(10).required(),
    lastname: Joi.string().min(7).max(20).required(),
    email: Joi.string().min(10).max(30).email().required(),
    password: Joi.string().min(6).max(200).required(),
    confirmPassword: Joi.string().min(6).max(12)
  });

  const {error} = schema.validate(req.body);
  let user = await User.findOne({"email": req.body.email});

  if (error) {
    const message = error.details[0].message;
    const index = message.lastIndexOf('"');
    const errorName = message.slice(1, index);
    res.status(400).json({[errorName]: message.slice(index + 1)});

  } else if (req.body.password !== req.body.confirmPassword) {

    res.status(400).json({message: "password and confirm password must be same"});

  } else if (user) {

    res.status(400).json({message: "User already exist"});

  } else {

    user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    user.save();
    const token = genAuthToken(user);
    res.send( {token})
  }
})


export default router
