'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Clothes = require('../models/clothes');
const clothes = new Clothes();
const router = express.Router();

router.get('/', getCloths);
router.get('/:id',validator,  getClothsById);
router.post('/', createCloths);
router.put('/:id',validator,  updateCloths);
router.delete('/:id',validator,  deleteCloths);




function getCloths(req, res) {
  const resObj = clothes.read();
  res.json(resObj);
}

function getClothsById(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}

function createCloths(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.create(clothesObject);
  res.status(201).json(resObj);
}

function updateCloths(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.update(req.params.id, clothesObject);
  res.json(resObj);
}

function deleteCloths(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;