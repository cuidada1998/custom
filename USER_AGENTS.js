const USER_AGENTS = [
  "jdapp;iPhone;9.2.4;14.1;b9d474077232e439a03d610bc11e3861a0296b67;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,8;addressid/13377806;supportBestPay/0;appBuild/167432;pushNoticeIsOpen/0;jdSupportDarkMode/0;pv/259.20;apprpd/Home_Main;ref/JDMainPageViewController;psq/17;ads/;psn/b9d474077232e439a03d610bc11e3861a0296b67|675;jdv/0|kong|t_1000089893_|tuiguang|c37639dcb10b43c0a4ceb54b19be50cf|1610978908;adk/;app_device/IOS;pap/JA2015_311210|9.2.4|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}
