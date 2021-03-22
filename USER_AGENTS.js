const USER_AGENTS = [
 // "JD4iPhone/9.3.5 CFNetwork/1206 Darwin/20.1.0",
  "jdapp;iPhone;9.3.5;14.2;d8ba36e628bbc2dcdca3f0ee2e6a9175e33e4420;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/502740683;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/12.29;apprpd/Home_Main;ref/JDWebViewController;psq/5;ads/;psn/d8ba36e628bbc2dcdca3f0ee2e6a9175e33e4420|91;jdv/0|kong|t_1001719029_|jingfen|eea865ce874f40939280a070ddb497fa|1610965497410|1610965499;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1 ",
 // "JD4iPhone/167515 (iPhone; iOS 14.2; Scale/2.00)",
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
