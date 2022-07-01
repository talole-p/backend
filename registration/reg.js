const { RESPONSE_STATUS } = require('../constant/response-status')
const { MESSAGES } = require('../constant/msg')
const {isEmailAddressValid,generateToken} = require('../utils/common')

const {checkUserExistWithEmailAsync,addUserByEmailAsync} = require('../user/user')

exports.reg =async (data)=>{
    try {
        if (!data.email) {
          return {
            status: RESPONSE_STATUS.FAIL,
            message:MESSAGES.COMMON.INVALID_PARAMETERS,
          };
        }
        const checkEmail = await isEmailAddressValid(data.email);
        if (!checkEmail) {
          return {
            status: RESPONSE_STATUS.FAIL,
            message: MESSAGES.COMMON.EmailNotValid,
          };
        }
        const checkExist = await checkUserExistWithEmailAsync({ email: data.email });
        if (checkExist.status !== RESPONSE_STATUS.FAIL) {
          return checkExist;
        }
        const response = await addUserByEmailAsync({
          email: data.email,
          password: data.password,
        });
        if (response.status !== RESPONSE_STATUS.SUCCESS) {
          return response;
        }
        const tokenPayload = {
          email: response.data.email,
          type: 'user',
        };
        const token = generateToken(tokenPayload);
        if (token.status === RESPONSE_STATUS.SUCCESS) {
          return {
            status: RESPONSE_STATUS.SUCCESS,
            data: {
              token: token.data,
            },
          };
        }
        return {
          status: RESPONSE_STATUS.FAIL,
        };
      } catch (error) {
        return { status: RESPONSE_STATUS.ERROR, message: error.message };
      }
    };


   