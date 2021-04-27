/**
 * 常用验证规则
 * Created by iHanlei on 21/04/27.
 */
  
/**
 * Email地址
 * @param {string} str
 * @returns {Boolean}
 */
export function validEmail (str) {
  let regExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return regExp.test(str)
}
  
/**
 * 手机号码
 * @param {string} str
 * @returns {Boolean}
 */
export function validPhoneNumber (str) {
  let regExp = /^1[345789]\d{9}$/
  return regExp.test(str)
}
  
/**
 * 身份证号码
 * @param {string} str
 * @returns {Boolean}
 */
export function validIDcard (str) {
  let regExp = /^(\d{15}|\d{17}(\d|X))$/
  return regExp.test(str)
}

/**
 * 护照
 * @param {string} str
 * @returns {Boolean}
 */
export function validPassport (str) {
  let regExp = /^1[45][0-9]{7}|G[0-9]{8}|P[0-9]{7}|S[0-9]{7,8}|D[0-9]+$/
  return regExp.test(str)
}

/**
 * 邮政编码
 * @param {string} str
 * @returns {Boolean}
 */
 export function validPostcode (str) {
  let regExp = /[1-9]\d{5}(?!\d)/
  return regExp.test(str)
}

/**
 * 银行卡号
 * @param {string} str
 * @returns {Boolean}
 */
 export function validBankCard (str) {
  let regExp = /^([1-9]{1})(\d{15}|\d{18})$/
  return regExp.test(str)
}

/**
 * 车牌号
 * @param {string} str
 * @returns {Boolean}
 */
 export function validLicencePlate (str) {
  let regExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return regExp.test(str)
}

/**
 * 中文
 * @param {string} str
 * @returns {Boolean}
 */
 export function validChinese (str) {
  let regExp = /^[\u4E00-\u9FA5A]+$/
  return regExp.test(str)
}

/**
 * 数字、字母、下划线
 * @param {string} str
 * @returns {Boolean}
 */
 export function validNumEn_ (str) {
  let regExp = /^\w+$/
  return regExp.test(str)
}
  