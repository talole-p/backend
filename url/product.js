const { RESPONSE_STATUS } = require('../constant/response-status')
const { MESSAGES } = require('../constant/msg')
const newProduct =  require ('./model/product-model')


exports.checkExistingUrlAsync = async ({url})=>{
    try {
      const result=  await newProduct.findOne({url:url}).exec()
      if (result) {
        return {
          status: RESPONSE_STATUS.SUCCESS,
          message: MESSAGES.COMMON.URL_ALREADY_EXIST,
        };
      }
      return {
        status: RESPONSE_STATUS.FAIL,
      };
    } catch (error) {
        return {
          status: RESPONSE_STATUS.ERROR,
          massage: error.massage,
        };
    }
}

exports.checkExistingShortCodeAsync = async ({code})=>{
    try {
      const result=  await newProduct.findOne({shortcode:code}).exec()
      if (result) {
        return {
          status: RESPONSE_STATUS.SUCCESS,
          message: MESSAGES.COMMON.SHORT_CODE_ALREADY_EXIST,
        };
      }
      return {
        status: RESPONSE_STATUS.FAIL,
      };
    } catch (error) {
        return {
          status: RESPONSE_STATUS.ERROR,
          massage: error.massage,
        };
    }
}

exports.addProductAsync = async ({url,code})=>{
  try {
    const product = new newProduct({url:url,shortcode:code})
    const result = await product.save()
    if (result) {
      return { status: RESPONSE_STATUS.SUCCESS, data: result['shortcode'] };
    }
    return { status: RESPONSE_STATUS.FAIL };
  } catch (error) {
    console.log(error);
    return {
      status: RESPONSE_STATUS.ERROR,
      massage: error.massage,
    };
  }
}

exports.getProductAsync = async ({pageSize,pageLimit=10})=>{
  try {
    pageSize = Math.max(0,pageSize);
    const result = await newProduct.find().limit(pageLimit).skip(pageLimit*pageSize).exec()
    if (result) {
      return { status: RESPONSE_STATUS.SUCCESS, data: result };
    }
    return { status: RESPONSE_STATUS.FAIL };
  } catch (error) {
    console.log(error);
    return {
      status: RESPONSE_STATUS.ERROR,
      massage: error.massage,
    };
  }
}