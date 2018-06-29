// pages/page1/loadingPage/loadingPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    imageAniData: {},
    rotateIndex: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // setTimeout(function() {
    //   wx.redirectTo({
    //     url: '../gamePage/gamePage',
    //   })
    // }, 3000)

    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });

    var imageAni = wx.createAnimation({
      duration: 5000,
      timingFunction: "linear"
    })

    this.animation = animation
    this.imageAni = imageAni
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
    this.imageLoading();
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

  loadingAni: function() {
    this.animation.translate(200, -200).step()

    this.setData({
      animationData: this.animation.export()
    })

    setTimeout(function() {
      this.animation.translate(-200, 200).step()
      this.setData({
        animationData: this.animation.export()
      })
    }.bind(this), 2000)
  },

  imageLoading: function() {
    this.timeInterval = setInterval(function () {
      this.imageAni.rotate(1080).step()
      this.setData({
        imageAniData: this.imageAni.export()
      })
    }.bind(this), 500)  
  }
})