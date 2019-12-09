// 设计宽度
var deviseW = 750
// 设计高度
var deviseH = 1508

$(function () {
  var scale = document.documentElement.clientWidth / document.documentElement.clientHeight
  const scaleBox = document.getElementsByClassName('scale-box')[0]
  if ((scale) < 1) {
    // 手机屏幕适配
    var scale = window.innerWidth / deviseW
    scaleBox.style.width = deviseW + 'px'
    scaleBox.style.height = deviseH + 'px'
    scaleBox.style.transform = `scale(${scale}, ${scale})`
    // console.log(window.innerHeight, deviseH * scale)
    scaleBox.style.transformOrigin = `0 ${(window.innerHeight - deviseH * scale) + 'px' } 0`

    document.body.classList.add('phone')
    // 手机进场动画
    owo.tool.animate('bounceInDown', document.getElementsByClassName('so-1')[0])
    owo.tool.animate('bounceInLeft', document.getElementsByClassName('so-2')[0], 800)
    owo.tool.animate('bounceInRight', document.getElementsByClassName('so-3')[0], 1600)
    owo.tool.animate('fadeIn', document.getElementsByClassName('so-4')[0], 2800)
    owo.tool.animate('fadeInUp', document.getElementsByClassName('so-0')[0], 3600)
    setTimeout(() => {
      new Swiper('.phone-swiper-container', {
        mode: 'horizontal',
        // preventLinks : false,
        slideClass : 'phone-swiper-slide',
        wrapperClass : 'phone-swiper-wrapper'
      })
    }, 0)
    // setTimeout(() => {
    //   // window.scrollTo(0, 0)
    //   const phoneHome = document.getElementsByClassName('phone-start')[0]
    //   document.getElementsByClassName('float-circular')[0].style.display = 'none'
    //   // phoneHome.style.top = '-100vh'
    //   // setTimeout(() => {
    //   //   phoneHome.innerHTML = ''
    //   // }, 1000)
    // }, 6000)
  } else {
    document.body.classList.add('pc')
  }
  var swiperBox = null
  function activeIndex (liTtem) {
    $('.swiper-box .right-bar')[0].style.display = 'none'
    if (swiperBox && swiperBox.destroy) swiperBox.destroy()
    $('.swiper-box .left-bar li').each(function (ind, item) {
      item.classList.remove('active')
    })
    liTtem.classList.add('active')
    if (liTtem.getElementsByTagName('h3')[0].innerHTML) {
      $('.swiper-box .right-bar h3')[0].innerHTML = liTtem.getElementsByTagName('h3')[0].innerHTML
    } else {
      $('.swiper-box .right-bar h3')[0].innerHTML = ''
    }

    if (liTtem.getElementsByTagName('h3')[0].innerHTML) {
      $('.swiper-box .right-bar p')[0].innerHTML = liTtem.getElementsByTagName('p')[0].innerHTML
    } else {
      $('.swiper-box .right-bar p')[0].innerHTML = ''
    }
    $('.swiper-box .right-bar .swiper-wrapper')[0].innerHTML = liTtem.getElementsByClassName('image-list')[0].innerHTML
    // console.log(swiperBox)
    // 一个图片的话隐藏轮播图页码
    if (liTtem.getElementsByClassName('image-list')[0].children.length < 2) {
      $('.swiper-box .swiper-container-box-pagination')[0].style.display = 'none'
    } else {
      $('.swiper-box .swiper-container-box-pagination')[0].style.display = 'block'
    }
    setTimeout(() => {
      swiperBox = new Swiper('.swiper-container-box', {
        mode: 'horizontal',
        autoplay: 5000,
        pagination: '.swiper-container-box-pagination',
        autoplayDisableOnInteraction: false,
        loop: true
      })
      $('.swiper-box .right-bar')[0].style.display = 'block '
    }, 0)
  }
  activeIndex($('.swiper-box .left-bar li')[0])
  $('.swiper-box .left-bar li').click(function () {
    activeIndex(this)
  })

  // 更多按钮点击事件
  $('.card-more .more').click(function () {
    var moreCon = $('.card-more ul')[0]
    if (moreCon.classList.contains('show-more')) {
      moreCon.classList.remove('show-more')
      this.innerHTML = '点击显示更多▽'
    } else {
      moreCon.classList.add('show-more')
      this.innerHTML = '点击隐藏更多△'
    }
  })

  // 鼠标悬浮组件
  $('.hover-switch .left')[0].innerHTML = $('.hover-switch .image-box')[0].innerHTML
  $('.hover-switch ul li').hover(function () {
    $('.hover-switch .left')[0].innerHTML = this.getElementsByClassName('image-box')[0].innerHTML
  })

  // 鼠标悬浮组件2
  $('.hover-switch-2 .left')[0].innerHTML = $('.hover-switch .image-box')[0].innerHTML
  $('.hover-switch-2 ul li').hover(function () {
    $('.hover-switch-2 .left')[0].innerHTML = this.getElementsByClassName('image-box')[0].innerHTML
  })
})

