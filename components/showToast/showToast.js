/*
显示toast提示
title:   提示的标题 必填
contentName:   提示内容1  选填
contentTime:   提示内容中的日期  选填
contentTips:   样式同日期  选填
bg:       内容区域的背景色
icon:     图标，//请指定正确的路径，选填
btnCancel: 取消或知道了按钮 选填
btnOk:    确认回购等 选填
btnUserInfo: 登录按钮 选填
duration: 提示的延迟时间，单位毫秒，默认：1500, 10000永远存在除非手动清除 选填
mask:     是否显示透明蒙层，防止触摸穿透，默认：true 选填
cb:       接口调用成功的回调函数 选填
 */
function showToast(obj) {
  // title1为标题
  if (typeof obj === 'object') {
    if (!obj.duration || typeof obj.duration !== 'number') { obj.duration = 1500; }// 默认1.5s后消失
    if (!obj.btn || typeof obj.btn !== 'string') { obj.btn = '知道啦'; }// 默认1.5s后消失
    const that = getCurrentPages()[getCurrentPages().length - 1];// 获取当前page实例
    obj.isShow = true;// 开启toast
    if (obj.duration < 10000) {
      setTimeout(() => {
        obj.isShow = false;
        obj.cb && typeof obj.cb === 'function' && obj.cb();// 如果有成功的回调则执行
        that.setData({
          'showToast.isShow': obj.isShow
        });
      }, obj.duration);
    }
    that.setData({
      showToast: obj
    });
  } else {
    console.log('showToast fail:请确保传入的是对象');
  }
}
/**
 *手动关闭toast提示
 */
function hideToast() {
  const that = getCurrentPages()[getCurrentPages().length - 1];// 获取当前page实例
  if (that.data.showToast) {
    that.setData({
      'showToast.isShow': false
    });
  }
}

module.exports = {
  showToast,
  hideToast
};
