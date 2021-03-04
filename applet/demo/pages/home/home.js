// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[
      "https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=733717429,363003047&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=e781cf317a6ac72636fe1430c476d8aa",
      "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1392496537,2215204377&fm=26&gp=0.jpg"
    ]
  },
  getBannerData(){
    let url ='http://yapi.demo.qunar.com/mock/86031/getBanner'
    wx.request({
      url: url,
      data:{},
      method:"GET",
      success:(data)=>{
        console.log('请求成功')
        let {banners} = data.data
        this.setData({imgs:banners})
      },
      fail(){
        console.log('请求失败')
      }
    })
  },
   // 路由跳转
   jumpTab(){
    console.log(111)
    wx.switchTab({
      url: '/pages/my/my',
      fail(err){
        console.log(err)
      }
    })
  },
  // 跳转非tab页面
  jumpNoTab(){
    wx.switchTab({
      url: '/pages/route/route',
      fail(err){
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBannerData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  jumpNoTabNavagator(){
    wx.navigateTo({
      url: '/pages/route/route',
    })
  },
  jumpNoTabRedirect(){
    wx.redirectTo({
      url: '/pages/route/route?us=123&ps=123',
    })
  },
  jumpNoTabRelanch(){
    wx.reLaunch({
      // url: '/pages/route/route',
      url: '/pages/my/my',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})