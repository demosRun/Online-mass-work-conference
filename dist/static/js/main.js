// 设计宽度
var deviseW = 750
// 设计高度
var deviseH = 1508

$(function () {

  // 主轮播图
  try {
    function start() {
      mainSwiper.startAutoplay();
    }
    function prev() {
      mainSwiper.swipePrev();
    }
    $('.next.owo-hover-grow').click(function () {
      mainSwiper.swipeNext();
    })
    $('.swiper-container-p2')[0].onmouseenter =function () {
      mainSwiper.stopAutoplay();
    }
    $('.swiper-container-p2')[0].onmouseleave = function () {
      mainSwiper.startAutoplay();
    }
    function changeActive(id) {
      showPlayer({
        id: id,
        box: $('.video-box .video')[0]
      });
    } // 取出轮播图列表


    var swiperSlideList = document.getElementsByClassName('swiper-wrapper')[0];
    console.log(swiperSlideList.children.length); // 遍历列表判断是否有视频

    for (var ind = 0; ind < swiperSlideList.children.length; ind++) {
      var item = swiperSlideList.children[ind];
      var videoId = item.getElementsByClassName('video-id');
      console.log(videoId);

      if (videoId[0]) {
        item.classList.add('is-video');
      }
    }

    document.getElementsByClassName('allp')[0].innerText = swiperSlideList.children.length;
    var mainSwiper = new Swiper('.swiper-container-p2', {
      mode: 'horizontal',
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      loop: true,
      slidesPerView: 1,
      mousewheelControl: false,
      onSlideChangeStart: function onSlideChangeStart(swiper) {
        $('.swiper-container-p2 .thisp')[0].innerText = swiper.activeLoopIndex + 1;
      }
    }); // 播放按钮点击事件

    $('.swiper-container-p2 .play-button').click(function () {
      var parentNode = this.parentNode || this.parentElement;
      var videoId = parentNode.getElementsByClassName('video-id');
      changeActive(videoId[0].innerHTML);
      setTimeout(function () {
        $('.video-box')[0].style.display = 'block';
      }, 0);
    });
    $('.close-button').click(function () {
      $('.video-box')[0].style.display = 'none';
    });
  } catch {}


  // 3D轮播图
  try {
    $('.swiper .roundabout-box').roundabout({
      easing: 'easeOutInCirc',
      duration: 600,
      btnNext: ".next",
      btnPrev: ".prev",
      minZ: 20,
      minScale: 0.6
    });
  } catch {}



  try {
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
      owoAnimate('bounceInDown', document.getElementsByClassName('so-1')[0])
      owoAnimate('bounceInLeft', document.getElementsByClassName('so-2')[0], 800)
      owoAnimate('bounceInRight', document.getElementsByClassName('so-3')[0], 1600)
      owoAnimate('fadeIn', document.getElementsByClassName('so-4')[0], 2800)
      owoAnimate('fadeInUp', document.getElementsByClassName('so-0')[0], 3600)
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
  } catch {}
  
  try {
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
  } catch {}
  
  try {
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
  } catch {}
  
  try {
    // 鼠标悬浮组件
    $('.hover-switch .left')[0].innerHTML = $('.hover-switch .image-box')[0].innerHTML
    $('.hover-switch ul li').hover(function () {
      $('.hover-switch .left')[0].innerHTML = this.getElementsByClassName('image-box')[0].innerHTML
    })
  } catch {}
  
  try {
    // 鼠标悬浮组件2
    $('.hover-switch-2 .left')[0].innerHTML = $('.hover-switch .image-box')[0].innerHTML
    $('.hover-switch-2 ul li').hover(function () {
      $('.hover-switch-2 .left')[0].innerHTML = this.getElementsByClassName('image-box')[0].innerHTML
    })
  } catch {}
  


})


/**
 * 赋予节点动画效果
 * @param  {string} name 动画效果名称
 * @param  {dom} dom 节点
 */
var owoAnimate = function (name, dom, delay) {
  dom.classList.add(name)
  dom.classList.add('owo-animated')
  if (delay) {
    dom.style.animationDelay = delay + 'ms'
  }
  // 待优化可以单独提出绑定方法
  dom.addEventListener('animationend', animateEnd)
  function animateEnd () {
    // 待优化 感觉不需要这样
    dom.classList.remove(name)
    dom.classList.remove('owo-animated')
    if (delay) {
      dom.style.animationDelay = ''
    }
  }
}

