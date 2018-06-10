// pages/page3/page3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 250,
    xMove: 15,
    yMove: 20,

    width: 10,
    height: 30,
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

  drawStockUp: function () {
    this.data.x = this.data.x + this.data.xMove;
    this.data.y = this.data.y - this.data.yMove;

    var ctx = wx.createCanvasContext('myCanvas')
    ctx.setStrokeStyle('red')
    ctx.strokeRect(this.data.x, this.data.y, this.data.width, this.data.height)
    ctx.draw(true)
  },

  drawStockDown: function () {
    this.data.x = this.data.x + this.data.xMove;
    this.data.y = this.data.y + this.data.yMove;

    var ctx = wx.createCanvasContext('myCanvas')
    ctx.setStrokeStyle('green')
    ctx.strokeRect(this.data.x, this.data.y, this.data.width, this.data.height)
    ctx.draw(true)
  },

  clearBtnClicked: function () {
    var ctx = wx.createCanvasContext('myCanvas')
    ctx.clearRect(0, 0, 375, 300)
    ctx.draw()
    this.data.x = 0;
    this.data.y = 250;
  },
})