import express from "express";
import {Product} from "../../models/Product/index.js"

const router = express.Router()

router.get('/',  (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const price_gt = parseInt(req.query.price_gt || 0);
  const price_lt = parseInt(req.query.price_lt);
  const name = req.query.name || "" ;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const result = {};
  let products;

 Product.find(
    {
      "$and" : [
        {"name" : {"$regex": name, "$options": "i"}},
        {"price": {$gt: price_gt}},
        {"price":{ $lt: price_lt}}
      ]
    },
    (err, docs) => {
      if (!(isNaN(startIndex) && isNaN(endIndex))) {
        result.products = docs.slice(startIndex, endIndex);
        const pageCount = Math.ceil(docs.length / limit);
        let pages = [];
        for (let i = 0; i < pageCount; i++) {
          pages.push(i)
        }
        result.pages = pages;
      } else {
        result.products = docs;
      }
      res.json(result)
      products = docs;
    }
  )
})


export default router
