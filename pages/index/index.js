// pages/index/index.js
Page({
  data: {
    avatarViewState: true,
  },

  onShareAppMessage: function () {

  },

  avatarTapped: avatarTapped
})

function avatarTapped() {
  this.setData({
    avatarViewState: false,
  })
}