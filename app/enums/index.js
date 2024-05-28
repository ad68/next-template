export const NotifyType = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
});
export const NotifyMessage = Object.freeze({
  SUCCESS_ACTION: "عملیات مورد نظر با موفقیت انجام شد",
  GLOBAL_ERROR: "خطایی رخ داده است",
  NETWORK_ERROR: "عدم برقراری ارتباط با سرور",
});

export const Regex = Object.freeze({
  MOBILE: new RegExp(/^[0][9][0-9][0-9]{8}$/),
  NATIONAL_CODE: new RegExp(/^([0-9]){10}$/),
});
