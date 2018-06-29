// pages/page1/ranking/ranking.js
var context = wx.createCanvasContext('canvas');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [{
      ranking: 123,
    }, {
      ranking: 456,
    }],
    x: 100,
    y: 100,
    animationData: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    });
    this.animation = animation
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // setInterval(this.drawCycle, 10);
    this.linearGrad();
  },

  drawCycle: function() {
    this.data.x++;
    if (this.data.x > 375) {
      this.data.x = -60;
    }

    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.arc(this.data.x, this.data.y, 60, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },

  linearGrad: function() {
    var context = wx.createCanvasContext('myCanvas');
    var linearGrad = context.createLinearGradient(0, 0, 200, 0);
    linearGrad.addColorStop(0.0, 'white');
    linearGrad.addColorStop(1.0, 'blue');
    context.fillStyle = linearGrad;
    context.fillRect(0, 0, 200, 50);
    context.draw();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  goback: function() {
    wx.navigateBack({
      delta: 1,
    })
  },

  loadingAni: function () {
    this.animation.translate(0, 200).step()

    this.setData({
      animationData: this.animation.export()
    })

    // setTimeout(function () {
    //   this.animation.translate(0, 0).step()
    //   this.setData({
    //     animationData: this.animation.export()
    //   })
    // }.bind(this), 2000)
  }
})