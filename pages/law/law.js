// pages/law/law.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    sheight: 0,
    content: "content0",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取页面的宽高，并将高度设置为设备的高度，单位px。注：宽度固定是750rpx
    wx.getSystemInfo({
      success: function(res) {
        that.setData({sheight: res.screenHeight});
      }
    })
  },

  jump: function(e) {
    var rcontent = e.currentTarget.dataset.content;
    var that = this;
    // wx.navigateTo({
    //   url: '/pages/law/law?content=' + content,
    // })
    that.setData({content: rcontent});
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