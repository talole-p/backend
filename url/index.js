const express = require('express');

const shortCode = express.Router();
const  { API_URLS }  = require('../constant/api-url')
const { apiResponse } = require('../utils/common.js')
const { shortCodeAsync} = require('./short')

shortCode.post(API_URLS.shortcode, async (req,res)=> apiResponse(
    await shortCodeAsync(req.body),res,
));
module.exports = shortCode;