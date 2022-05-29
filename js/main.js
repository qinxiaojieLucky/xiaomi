
window.onload = function () {

    var mycar = document.getElementById('mycar')
    var downCar = document.getElementById('downCar')
    mycar.onmouseover = function () {
        downCar.style.height = '80px';
    }
    mycar.onmouseout = function () {
        downCar.style.height = '0px';
    }
    downCar.onmouseover = function () {
        downCar.style.height = '80px';
    }
    downCar.onmouseout = function () {
        downCar.style.height = '0px';
    }

    var downAPP = document.getElementById('downAPP');
    var downImg = document.getElementById('downImg');
    var triangle = document.getElementById('triangle')
    downAPP.onmouseover = function () {
        showDownPic()
    }
    downAPP.onmouseout = function () {
        hidDownPic()
    }
    downImg.onmouseover = function () {
        showDownPic()
    }
    downImg.onmouseout = function () {
        hidDownPic()
    }
    triangle.onmouseover = function () {
        showDownPic()
    }
    triangle.onmouseout = function () {
        hidDownPic()
    }

    function showDownPic() {
        downImg.style.boxShadow = '1px 1px 1px 1px rgb(119, 117, 117)'
        downImg.style.height = '120px';
        triangle.style.display = 'block';
    }

    function hidDownPic() {
        downImg.style.height = '0px';
        downImg.style.boxShadow = 'none'
        triangle.style.display = 'none';
    }

    var slip = document.getElementById('slip');
    var nav = document.getElementById('nav');
    var box_list = document.getElementsByClassName('box');
    var nav_list = nav.children;
    for (var i = 0; i < nav_list.length; i++) {
        nav_list[i].index = i;
        nav_list[i].onmouseover = function () {
            if (this.index < 4) {
                slip.style.height = 210 + 'px';
                for (var j = 0; j < box_list.length; j++) {
                    box_list[j].style.display = 'none';
                }
                box_list[this.index].style.display = 'block';

            }
        }
    }
    for (var i = 0; i < nav_list.length; i++) {
        nav_list[i].onmouseout = function () {
            slip.style.height = '0px'
        }
    }
    slip.onmouseover = function () {
        slip.style.height = '210px';
    }
    slip.onmouseout = function () {
        slip.style.height = '0px';
    }

    // 轮播图
    var banner = document.getElementById('banner')
    var li_list = banner.children;
    var circle = document.getElementById('circle');
    var cirs_list = circle.getElementsByTagName('li')
    // 给每个li标签设置索引
    for (let i = 0; i < li_list.length; i++) {
        li_list[i].setAttribute('index', i)
    }
    let index = 0;
    let swiperT = setInterval(() => {
        index++;
        for (let i = 0; i < li_list.length; i++) {
            li_list[i].style.opacity = '0';
            cirs_list[i].className = ''
        }
        if (index == '4') {
            index = 0;
        }
        cirs_list[index].className = 'active';
        li_list[index].style.opacity = '1';

    }, 3000)
    banner.onmouseout = function () {
        swiperT = setInterval(() => {
            index++;
            for (let i = 0; i < li_list.length; i++) {
                li_list[i].style.opacity = '0';
                cirs_list[i].className = '';
            }
            if (index == '4') {
                index = 0;
            }
            cirs_list[index].className = 'active';
            li_list[index].style.opacity = '1';
        }, 2000)
    }
    banner.onmouseover = function () {
        clearInterval(swiperT)
    }
    // 轮播图左右按钮
    var swiper = document.getElementById('swiper')
    var ems = swiper.getElementsByTagName('em')
    var xiaoyuhao = ems[0];
    var dayuhao = ems[1];
    // 小于号 向左
    xiaoyuhao.onclick = function () {
        clearInterval(swiperT)
        li_list[index].style.opacity = '0';
        cirs_list[index].className = '';
        index--;
        if (index == '-1') {
            index = 3;
        }
        cirs_list[index].className = 'active';
        li_list[index].style.opacity = '1';
    }
    // 大于号 向右
    dayuhao.onclick = function () {
        clearInterval(swiperT)
        li_list[index].style.opacity = '0';
        cirs_list[index].className = '';
        index++;
        if (index == '4') {
            index = 0;
        }
        cirs_list[index].className = 'active';
        li_list[index].style.opacity = '1';
    }
    // 小圆圈
    for (let i = 0; i < cirs_list.length; i++) {
        cirs_list[i].index = i;
        cirs_list[i].onclick = function () {
            cirs_list[index].className = '';
            cirs_list[this.index].className = 'active';
            li_list[index].style.opacity = '0';
            li_list[this.index].style.opacity = '1';
            index = this.index;
        }
    }

    // 侧边栏
    var heroMenu = document.getElementById('heroMenu');
    var menus = heroMenu.getElementsByClassName('menu');
    var ulNum;
    for (let i = 0; i < menus.length; i++) {
        menus[i].index = i;
        menus[i].onmouseover = function () {
            currCategory = this.getElementsByClassName('category-item')[0];
            ulNum = currCategory.getElementsByTagName('ul').length;
            currCategory.style.width = ulNum * 230 + (ulNum - 1) * 25 + 'px'
        }
    }

    // // 穿戴切换
    var cList = document.getElementById('cList');
    var cLists = cList.children;
    var servenPart = document.getElementById('servenPart');
    var cIndex = 0;
    var servenPart_uls = servenPart.children;
    for (let i = 0; i < cLists.length; i++) {
        cLists[i].index = i;
        cLists[i].onmouseover = function () {
            if (cIndex !== this.index) {
                cLists[this.index].className = 'cActive'
                servenPart_uls[this.index].style.display = 'block'
                cLists[cIndex].className = ''
                servenPart_uls[cIndex].style.display = 'none'
                cIndex = this.index;
            }
        }
    }

    // 家具电器切换
    var sList = document.getElementById('sList');
    var sLists = sList.children;
    var eightPart = document.getElementById('eightPart');
    var sIndex = 0;
    var eightPart_uls = eightPart.children;
    for (let i = 0; i < sLists.length; i++) {
        sLists[i].index = i;
        sLists[i].onmouseover = function () {

            if (sIndex !== this.index) {
                sLists[this.index].className = 'cActive'
                eightPart_uls[this.index].style.display = 'block'
                sLists[sIndex].className = ''
                eightPart_uls[sIndex].style.display = 'none'
                sIndex = this.index;
            }
        }
    }

    // footer小图标
    var lastLink = document.getElementById('lastLink');
    var linkImgs = lastLink.children;
    let flag = true;
    setInterval(() => {
        if(flag){
            linkImgs[0].style.display="block";
            linkImgs[1].style.display='none';
        }else{
            linkImgs[0].style.display="none";
            linkImgs[1].style.display='block';
        }
        flag = !flag;
    }, 1500);

    // 浏览器滚动事件
    // 回到顶部
    var toTop = document.getElementById('toTop');
    var scrolltop;
    window.onscroll = function(){
        scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrolltop > 1000){
            toTop.style.display = 'block';
        }else{
            toTop.style.display = 'none';
        }
    }
    toTop.onclick = function(){
        window.scrollTop = 0
    }

    //手机APP
    var phoneapp = document.getElementById('phoneApp') ;
    
}