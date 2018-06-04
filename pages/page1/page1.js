// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textTitle: "This is the title text",
    show: true,
    inputValue: ''
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

  },

  btnClicked: function () {
    this.setData({ textTitle: "button clicked" })
  },

  switchClicked: function () {
    var isShow = this.data.show;
    this.setData({ show: !isShow })
  },

  inputText: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  }
})