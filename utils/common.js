const { RESPONSE_STATUS, STATUS_CODE } = require('../constant/response-status')
const jwt = require('jsonwebtoken');

const apiResponse = async ({ status, data, message }, res) => {
    try {
      let statusCode = '';
      let statusMSG = '';
      if (status === RESPONSE_STATUS.FAIL) {
        statusCode = 400;
        statusMSG = message;
      } else if (status === RESPONSE_STATUS.UNAUTHORIZED) {
        statusCode = 401;
        statusMSG = message;
      }  else if (status === RESPONSE_STATUS.NOT_FOUND) {
        statusCode = 404;
        statusMSG = message;
      } else if (status === RESPONSE_STATUS.BAD_REQUEST) {
        statusCode = 400;
        statusMSG = message;
      }  else if (status === RESPONSE_STATUS.SUCCESS) {
        statusCode = 200;
        statusMSG = RESPONSE_STATUS.SUCCESS;
      }
    } catch (error) {
      return { status: RESPONSE_STATUS.ERROR, message: error.message };
    } finally {
      if (status === RESPONSE_STATUS.FAIL) {
        return res.status(400).json({
          status,
          message,
          data,
        });
      }
      if (status === RESPONSE_STATUS.UNAUTHORIZED) {
        return res.status(401).json({
          status,
          message,
          data,
        });
      }
      if (status === RESPONSE_STATUS.ERROR) {
        return res.status(500).json({
          status,
          message:'someting went wrong',
          data,
        });
      }
      if (status === RESPONSE_STATUS.BAD_REQUEST) {
        return res.status(400).json({
          status,
          message,
          data,
        });
      }
      if (status === RESPONSE_STATUS.NOT_FOUND) {
        return res.status(404).json({
          status,
          message,
          data,
        });
      }
      return res.status(200).json({
        status,
        data,
        message,
      });
    }
  };

  const isEmailAddressValid = (email) => {
    try {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const generateToken = (payload, signInOptions = {}) => {
    try {
      const token = jwt.sign({ ...payload }, 'itsAmitTalolePatil', {
        ...signInOptions,
      });
      return { status: RESPONSE_STATUS.SUCCESS, data: token };
    } catch (error) {
      return { status: RESPONSE_STATUS.ERROR, message: error.message };
    }
  };
  
  const verifyToken = (token) => {
    try {
      const decoded = jwt.verify(token, 'itsAmitTalolePatil');
      return { status: RESPONSE_STATUS.SUCCESS, data: decoded };
    } catch (error) {
      return { status: RESPONSE_STATUS.UNAUTHORIZED, message: error.message };
    }
  };

  const randomCode = ()=>{
    try {
      return code =  (Math.random() + 1).toString(36).substring(7)
    } catch (error) {
      return null
    }
  }

  module.exports =  {apiResponse,generateToken,verifyToken,isEmailAddressValid,randomCode}