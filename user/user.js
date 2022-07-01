const { RESPONSE_STATUS } = require('../constant/response-status')
const { MESSAGES } = require('../constant/msg')
const registration = require('./usermodel')

exports.checkUserExistWithEmailAsync = async ({ email }) => {
    try {
      const result = await registration.findOne({email:email}).exec()
      if (result) {
        return {
          status: RESPONSE_STATUS.SUCCESS,
          message: MESSAGES.COMMON.EMAIL_ALREADY_EXIST,
        };
      }
      return {
        status: RESPONSE_STATUS.FAIL,
      };
    } catch (error) {
        console.log(error);
      return {
        status: RESPONSE_STATUS.ERROR,
        massage: error.massage,
      };
    }
  };

  exports.addUserByEmailAsync = async ({ email }) => {
    try {
      const user = new registration({email:email})
      const result = await user.save()
      if (result) {
        return { status: RESPONSE_STATUS.SUCCESS, data: result };
      }
      return { status: RESPONSE_STATUS.FAIL };
    } catch (error) {
        console.log(error);
      return {
        status: RESPONSE_STATUS.FAIL,
        massage: error.massage,
      };
    }
  };