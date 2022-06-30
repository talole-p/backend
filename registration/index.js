const express = require('express');

const registration = express.Router();
const  { API_URLS }  = require('../constant/api-url')
const { apiResponse } = require('../utils/common.js')
const {reg}=require ( './reg.js')

registration.post(API_URLS.Registration, async (req,res)=> apiResponse(
    await reg(req.body),res,
));
module.exports = registration;