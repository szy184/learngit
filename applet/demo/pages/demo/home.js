Page({
  data:{
    name:'王一',
    arr:[1,2,3,4]
  },

  changeName(e){
    console.log(e)
    this.setData({name:'张三'})
  }
})