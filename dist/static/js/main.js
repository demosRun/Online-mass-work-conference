
$(function () {
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

