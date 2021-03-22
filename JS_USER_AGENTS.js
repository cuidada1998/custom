const USER_AGENTS = [
    // "JD4iPhone/9.3.5 CFNetwork/1206 Darwin/20.1.0",
     "jdltapp;android;3.1.0;9;D246836333735-3264353430393;network/4g;model/MIX 2;addressid/138678023;aid/bf8bcf1214b3832a;oaid/308540d1f1feb2f5;osVer/28;appBuild/1436;psn/Z/rGqfWBY/h5gcGFnVIsRw==|16;psq/3;adk/;ads/;pap/JA2020_3112531|3.1.0|ANDROID 9;osv/9;pv/13.7;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36",
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
