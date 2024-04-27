// pages/play/play.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail:{},
    },

    onLoad(options) {
        if(app.data.song.destroy){
            app.data.song.destroy()
        }
        // 得到当前页面的参数
        console.log(options.id);
        // 请求歌曲信息
        wx.request({
            url:"https://apis.netstart.cn/music/song/detail?ids=" + options.id,
            method:"GET",
            success:(res)=>{
                console.log('歌曲详情',res);

                this.setData({
                    detail:res.data.songs[0]
                })

                this.playSong(this.data.detail.id)
            }
        })
    },

    // 声明一个方法 实现音乐播放
    playSong(id){
        //  https://music.163.com/song/media/outer/url?id=id.mp3

        // 初始化音频对象
        
        app.data.song =  wx.createInnerAudioContext({
                useWebAudioImplement: false 
              })
          
        // 添加音乐播放地址
          app.data.song.src = 'https://music.163.com/song/media/outer/url?id='+id+'.mp3'

        // 音乐播放
          app.data.song.play() // 播放
          
    },

    // 暂停播放
    songPause(){
        app.data.song.pause() // 暂停
    },

    play(){
        app.data.song.play() // 暂停

    },

    // 生命周期 代码会在页面退出当前页面时之行
    onUnload(){
        // app.data.song.destroy()
    }
})