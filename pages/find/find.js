// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist: []
  },

  onLoad(options) {
    // 发起网络请求 请求歌单详情数据
    wx.request({
      // 服务器地址 接口地址
      url: 'https://apis.netstart.cn/music/playlist/detail?id=102212152',
      // 请求方法 post get
      method: "GET",
      // 接口请求成功时的回调函数
      success: (res) => {
        // 控制台日志打印
        console.log('歌单详情', res)

        // 请求成功 将服务器返回的数据保存到页面的data中
        // this.data.playlist = res.data.playlist.tracks

        this.setData({
          playlist: res.data.playlist.tracks
        })
      }
    })
  },

  // 跳转播放页面
  goPlay(e) {
    // console.log(e);
    // 通过事件源获取到绑定在标签上的id
    var id = e.currentTarget.dataset.id
    console.log(id);
    wx.navigateTo({
      url: '/pages/playMusic/playMusic?id=' + id,
    })
  }

})