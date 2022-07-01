const { RESPONSE_STATUS } = require('../constant/response-status')
const { MESSAGES } = require('../constant/msg')
const {randomCode}= require('../utils/common')
const {checkExistingUrlAsync, checkExistingShortCodeAsync,addProductAsync,getProductAsync} = require('./product')


exports.shortCodeAsync = async (data)=>{
    try {
      let  {url,code}= data
        if (!url) {
            return {
                status: RESPONSE_STATUS.FAIL,
                message:MESSAGES.COMMON.INVALID_PARAMETERS,
              };
        }
        if (!code) {
            code = randomCode()
        }
        const checkUrlexisted = await checkExistingUrlAsync({url})
        if (checkUrlexisted.status === RESPONSE_STATUS.SUCCESS ) {
            return checkUrlexisted
        }
        const checkShortCode = await checkExistingShortCodeAsync({code})
        if (checkShortCode.status !== RESPONSE_STATUS.FAIL ) {
            return checkShortCode
        }
        const response = await addProductAsync({
            url: url,
            code: code,
          });
        if (response.status ===  RESPONSE_STATUS.SUCCESS) {
         return  response
        }
        return {
            status: RESPONSE_STATUS.FAIL,
          };
    } catch (error) {
        console.log(error);
        return { status: RESPONSE_STATUS.ERROR, message: error.message };
    }
}

exports.getShortcode = async (data)=>{
    try {
        const {pageSize,pageLimit}= data
        const response = await getProductAsync({pageSize,pageLimit});
        if (response.status ===  RESPONSE_STATUS.SUCCESS) {
         return  response
        }
        return {
            status: RESPONSE_STATUS.FAIL,
          };
    } catch (error) {
        console.log(error);
        return { status: RESPONSE_STATUS.ERROR, message: error.message };
    }
}