import express from "express";
import {Order} from "../../models/Order/index.js";
import Joi from "joi";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const router = express.Router();

const schema = Joi.object({
  createdAt: Joi.string().min(3).required(),
  subTotal: Joi.number().min(2).required(),
  token: Joi.string().min(10).required(),
}).options({ abortEarly: false });

router.post('/', bodyParser.json(),  (req, res) => {

  const {error} = schema.validate(req.body);

  if (error) {
    let message;

    error.details.forEach((item, i) => {
      const index = item.message.lastIndexOf('"');
      const errorName = item.message.slice(1, index);
      message = {...message, [errorName]: item.message.slice(index + 1)};
    });

    res.status(400).send(message)

  } else {
    const token = req.body.token;
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const order = new Order({
      createdAt: req.body.createdAt,
      subTotal: req.body.subTotal + "$",
      user: user.email,
      user_id: user.id,
    })
    order.save();
    res.status(200).send("ok")
  }
});

router.get('/:id', bodyParser.json(),  (req, res) => {
  const id = req.params.id;
  Order.find({user_id: id}, (err, docs) => res.json({order: docs}))
});

export default router
