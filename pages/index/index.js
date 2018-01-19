Page({
  data: {
    userInfo:{},
    bookList:[],
    clock:{}
  },
  onLoad: function (options) {
    var _ = this;
    //获取图书列表
    this.getBookList();
  },
  getBookList:function(){
    // wx.request({
    //   url: 'test.php', 
    //   data: {},
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
    var list = [{
      bookId:1,
      bookName:'风中的花朵',
      bookDescription:'这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
    }, {
      bookId: 2,
      bookName: '那年花开月正圆',
      bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 1,
        bookName: '风中的花朵',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }, {
        bookId: 2,
        bookName: '那年花开月正圆',
        bookDescription: '这本书对我的人生启发很大，作者的思维缜密，逻辑性强。',
      }];
    this.setData({ bookList: list })
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