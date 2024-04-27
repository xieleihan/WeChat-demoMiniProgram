// index.js
Page({
  // 页面初始数据,
  data:{
    list:[]
  },
  // onLoad 生命周期函数,监听页面在加载的时候加载里面的内容
  onLoad(options){
    // 微信有一个专门发起网络请求的方法 wx.request
    wx.request({
      // url填入接口api的地址
      url: 'https://apis.netstart.cn/zhihudaily/stories/latest',
      // method 是请求的方法 这里的需要根据需要填入是 POST 或者是 GET
      method:"GET",
      // 接口请求成功后需要有一个回调函数
      success:(res)=>{
        // success成功执行
        console.log("请求成功");
        // 将服务器返回的数据保存在页面的AppData中
        this.setData({
          list:res.data
        })
      }
    })
  },
  goLook(e){
    var id = e.currentTarget.dataset.id
    console.log(id);
    wx.navigateTo({
      url: '/pages/indexLook/indexLook?id=' + id,
    })
  }
})
