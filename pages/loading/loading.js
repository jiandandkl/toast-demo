const app = getApp()
const feedbackApi = require('../../components/showToast/showToast')

Page({
  onShow: function () {
    feedbackApi.showToast({
      content: '正在获取数据',
      icon: '../../images/loading.svg',
      duration: 3000
    })
  }
})
