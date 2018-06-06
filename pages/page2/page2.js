var location = 0;
var count = 0;

Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  
  onReady: function (e) {
    this.drawSmile();
  },

  position: {
    x: 0,
    y: 0
  },

  canvasClicked: function () {
    if (location == 0) {
      location = 1;
    }
    else if (location == 1) {
      location = 0;
    }

    if (count == 0) {
      setInterval(this.drawSmile, 10);
      count++;
    }
  },

  drawSmile: function () {

    if (location == 1) {
      this.position.x = this.position.x + 2;
      this.position.y++;
    } else {
      this.position.x = this.position.x - 2;
      this.position.y--;
    }

    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  }
})