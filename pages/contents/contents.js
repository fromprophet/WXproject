// pages/contents/contents.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sheight: 0,
    flag : 0,
    imgList: ["https://obohe.com/i/2021/10/09/qxmegl.jpg",
      "https://obohe.com/i/2021/10/09/7hc7kpu.jpg",
      "https://obohe.com/i/2021/10/09/qxmjni.jpg",
      "https://obohe.com/i/2021/10/09/qxv5pa.jpg",
      "https://obohe.com/i/2021/10/09/qxv85k.jpg",
      "https://obohe.com/i/2021/10/09/qxv6bj.jpg",
      "https://obohe.com/i/2021/10/09/qxvbl0.jpg",
      "https://obohe.com/i/2021/10/09/qxvbkm.jpg",
      "https://obohe.com/i/2021/10/09/qxvczg.jpg",
      "https://obohe.com/i/2021/10/09/qxvjgm.jpg"
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var flag = 1; // 初始值设为1
    // 获取页面的宽高，并将高度设置为设备的高度，单位px。注：宽度固定是750rpx
    wx.getSystemInfo({
      success: function(res) {
        that.setData({sheight: res.screenHeight});
      }
    })
  },

  /**
   * 左箭头
   */
  leftArrow: function() {
    var that = this;
    var tflag = that.data.flag;
    if (tflag == 1) {
      tflag = 15;
      that.setData({flag: tflag});
      wx.showToast({
        title: '您正在看最后一页！',
        icon: 'none'
      })
    }
    else {
      tflag = tflag - 1;
      that.setData({flag: tflag});
    }
  },

  /**
   * 右箭头
   */
  rightArrow: function() {
    var that = this;
    var tflag = that.data.flag;
    if (tflag == 15) {
      tflag = 1;
      that.setData({flag: tflag});
      wx.showToast({
        title: '您正在看第一页！',
        icon: 'none'
      })
    }
    else {
      tflag = tflag + 1;
      that.setData({flag: tflag});
    }
  },

  /**
   * 预览图片
   */
  previewImage: function(e) {
    var current = e.target.dataset.imgsrc;
    var that = this;
    wx.previewImage({
      urls: [current],
      current: current,
    })
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