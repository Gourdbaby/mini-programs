Page({
  data: {
    userInfo: {},
    bookList: [],
    clock: {},
    styleobj:{
      collectionAnimate:false,
      carbookAnimate:''
    }
  },
  onLoad: function (options) {
    var _ = this;
    wx.getUserInfo({
      lang: 'zh_CN',
      success: function (res) {
        _.getuserinfo(res);
      },
      fail: function (res) {
        console.log(res)
      }
    })
    //获取年月日
    this.getClock();
  },
  getClock: function () {
    var date = new Date;
    var clock = this.data.clock;
    clock.year = date.getFullYear();
    clock.month = date.getMonth() + 1;
    clock.date = date.getDate();
    var week = date.getDay();
    switch (week) {
      case 0:
        clock.week = '星期日';
        break;
      case 1:
        clock.week = '星期一';
        break;
      case 2:
        clock.week = '星期二';
        break;
      case 3:
        clock.week = '星期三';
        break;
      case 4:
        clock.week = '星期四';
        break;
      case 5:
        clock.week = '星期五';
        break;
      case 6:
        clock.week = '星期六';
        break;
    }
    this.setData({ clock: clock })
  },
  getuserinfo: function (res) {
    var userInfo = res.userInfo;
    var dataUserInfo = this.data.userInfo;
    dataUserInfo.nickName = userInfo.nickName;
    dataUserInfo.avatarUrl = userInfo.avatarUrl;
    dataUserInfo.gender = userInfo.gender;
    dataUserInfo.province = userInfo.province;
    dataUserInfo.city = userInfo.city;
    dataUserInfo.country = userInfo.country;
    this.setData({ userInfo: dataUserInfo })
  },
  collection:function(even){
    var _ = this;
    var styleobj = this.data.styleobj;
    styleobj.collectionAnimate = true;
    this.setData({ styleobj })
    setTimeout(function(){
      styleobj.collectionAnimate = false;
      _.setData({ styleobj })
    },300)
  },
  carbook:function(even){
    
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
    console.log(1111)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})