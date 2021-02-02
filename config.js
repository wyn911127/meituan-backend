module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://39.108.3.12:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'meituan',   //七牛云bucket
    AccessKey: '',   //七牛云accessKey
    SecretKey: '',    //七牛云secretKey
    tencentkey: 'AHBBZ-A573S-I7XOW-6K7GZ-MGLUQ-7KBQF',        //腾讯位置secreKey
    tencentkey2: 'AHBBZ-A573S-I7XOW-6K7GZ-MGLUQ-7KBQF',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
};


