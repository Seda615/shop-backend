import express from "express";
import bodyParser from "body-parser"
import {User} from "../../models/User/index.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import genAuthToken from "../../utils/genAuthToken/index.js"

const router = express.Router();

const schema = Joi.object().keys({
  email: Joi.string().min(10).max(30).required().email(),
  password: Joi.string().min(6).max(200).required()
}).options({ abortEarly: false });

router.post('/', bodyParser.json(), async (req, res) => {

  const {error} = schema.validate(req.body);
  const user = await User.findOne({email: req.body.email});

  let isValid;

  if (user) isValid = await bcrypt.compare(req.body.password, user.password);

  if (error) {

    let message;

    error.details.forEach((item, i) => {
      const index = item.message.lastIndexOf('"');
      const errorName = item.message.slice(1, index);
      message = {...message, [errorName]: item.message.slice(index + 1)}
    });

    res.status(400).send(message);

  } else if (!user) {

    res.status(400).send({message: "Invalid email or password..."});

  } else if (!isValid) {

    res.status(400).send({message: "Invalid email or password..."});

  } else {

    const token = genAuthToken(user);
    res.send({token, id: user._id});
  }
})


// router.get('/', (req, res) => {
//   const users = User.find({_id: "62b75348b975b251d5917767"}, (err, docs) => res.json(docs))
// })


export default router
