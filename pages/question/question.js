// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // count: 1,
    flag: 0,
    question:["在设定网上交易流程方面,一个好的电子商务网站必须做到()",
    "抵御电子邮箱入侵措施中，正确的是：",
    "要安全浏览网页，不应该()",
    "不属于常见的危险密码是()",
    "计算机病毒是()"], // 问题池
    seA: ["对用户有所保留",
    "不用生日做密码",
    "在他人计算机上使用“自动登录”和“记住密码”功能",
    "跟用户名相同的密码",
    "计算机程序"], //答案池
    seB: ["面对用户的界面必须是简单和操作方便的",
    "不要使用少于5位数的密码",
    "不浏览安全性能差的网页",
    "使用生日作为密码",
    "数据"],
    seC: ["使用户购物操作繁复但安全",
    "不要使用纯数字",
    "定期清理浏览器Cookies",
    "只有4位数的密码",
    "临时文件"],
    seD: ["让用户感到在网上购物与在现实世界中的购物流程是有区别的",
    "自己做服务器",
    "定期清理浏览器缓存和上网历史记录",
    "10位的综合型密码",
    "应用软件"],
    answer: ["B","D","A","D","A"], // 正确答案池
    selection: [], // 用户答案
    conSelection: "", // 用户当前的答案（暂存）
    correct: 0, // 用户答对数量
    sed1: "black",
    sed2: "black",
    sed3: "black",
    sed4: "black",
    nexttab: "block",
    finish: "none",
    rate: 0
  },

  /**
   * 清样式
   */
  clearColors: function() {
    this.setData({
      sed1: "black",
      sed2: "black",
      sed3: "black",
      sed4: "black",
    });
  },

  /**
   * 选择选项时调用
   */
  choose1: function(e) {
    var answer = e.target.dataset.answer;
    // var selected = e.target.dataset.selected;
    
    // var that = this;
    // var answerList = that.data.answer;
    // var tflag = that.data.flag;
    this.clearColors(); // 清样式
    this.setData({sed1: "green", conSelection: answer});
  },

  choose2: function(e) {
    var answer = e.target.dataset.answer;
    this.clearColors();
    this.setData({sed2: "green", conSelection: answer});
  },

  choose3: function(e) {
    var answer = e.target.dataset.answer;
    this.clearColors();
    this.setData({sed3: "green", conSelection: answer});
  },

  choose4: function(e) {
    var answer = e.target.dataset.answer;
    this.clearColors();
    this.setData({sed4: "green", conSelection: answer});
  },

  /**
   * 点下一题
   */
  next: function() {
    var that = this;
    var sel = this.data.conSelection;
    var selList = this.data.selection;
    if (sel != "") {
      // 存答案到数组
      selList.push(sel);
      this.setData({selection: selList});
      // 清样式
      that.clearColors();
      // 转下一题
      var tflag = that.data.flag;
      tflag = tflag + 1;
      that.setData({flag: tflag });
      // 如果下一题是最后一题，应当显示“提交答卷”，隐藏“下一题”
      if (tflag == that.data.question.length - 1) {
        var tthat = that;
        tthat.setData({
          nexttab: "none",
          finish: "block"
        })
      }
    }
    else {
      wx.showToast({
        title: '未选择选项！',
        icon: 'none'
      })
    }
  },

  /**
   * 提交答卷
   */
  finish: function() {
    var that = this;
    var answerList = this.data.answer;
    var selList = this.data.selection;
    var correctCount = this.data.correct;
    // 判断正确性
    for (var i = 0; i < answerList.length; i++) {
      if (answerList[i] == selList[i]) {
        correctCount = correctCount + 1;
      }
    }
    // 计算正确率
    var con = correctCount / answerList.length;
    var rate = Math.floor(con * 100);
    this.setData({rate: rate,});
    // 显示结算界面

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})