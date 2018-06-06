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

    // originY: 0,
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
    //this.data.originY = this.data.y; //todotodotodotodo
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

  // drawLine: function () {
  //   var line = wx.createCanvasContext('myCanvas')
  //   line.setStrokeStyle('yellow')

  //   if (this.data.x == this.data.x + 2 * xMove) {
  //     line.moveTo(xMove + width / 2, )
  //     line.lineTo()
  //   }
  // }
})