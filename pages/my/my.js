const app = getApp()
const feedbackApi = require('../../components/showToast/showToast')

Page({
  data: {
  },

  onLoad: function () {
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        userInfo
      })
    }
  },

  onShow: function () {
    const userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      feedbackApi.showToast({
        title: '尚未登录',
        contentName: '登录后才能使用哦 ~',
        btnCancel: '知道了',
        btnUserInfo: '登录',
        bg: '#fff',
        duration: 10000
      })
    }
  },
  click_cancel(e) {
    feedbackApi.hideToast()
    wx.switchTab({
      url: '../index/index'
    });
  },
  click_user_info(e) {
    const self = this
    const data = e.detail
    if (data.userInfo) {
      this.setData({
        userInfo: data.userInfo
      })
      wx.setStorageSync('userInfo', data.userInfo)
      feedbackApi.hideToast()
    } else {
      wx.switchTab({
        url: '../index/index'
      })
    }
  }
})
