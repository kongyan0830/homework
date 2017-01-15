var address = document.getElementsByClassName('address')[0];
var addressBox = address.getElementsByClassName('addressBox')[0];
//点击导航的城市切换
;(function (){
    utils.ajax({
        url:'json/city.txt',
        success:function (data){
            var citys=data;
            //console.log(data);
            var cityLi = '';
            if(citys){
                for(var i=0;i<citys.length;i++){
                    cityLi += '<li class="addressItem">';
                    cityLi += i==0?'<a href="##" class="red">'+citys[i].city+'</a>':'<a href="##">'+citys[i].city+'</a>';
                    cityLi += '</li>';
                }
            }
            addressBox.innerHTML = cityLi;
        }
    });
})();
;(function(){
    var span = address.getElementsByTagName('span')[0];
    addressBox.onclick = function(e){
        e = e || window.event;
        e.target = e.target || e.srcElement;
        if(e.target.nodeName == 'A'){
            span.innerHTML = e.target.innerText;
            var siblings = addressBox.getElementsByTagName('a');
            for(var i=0;i<siblings.length;i++){
                siblings[i].className = null;
            }
            utils.addClass(e.target,'red');
        }
    }
})();
var header = document.getElementsByClassName('header')[0];
//获取购物车数量
var num = header.getElementsByClassName('carNum')[0].getElementsByClassName('num')[0];
//....
//fs.给左边最大的li增加内容
var fs = document.getElementsByClassName('fs')[0];
var fs_col1 = fs.getElementsByClassName('fs_col1')[0];
;(function(){
var lis = fs_col1.getElementsByClassName('fs1_item');
utils.ajax({
    url:'json/fsLi.txt',
    success:function (data){
        var fs_col1Date=data;
        //console.log(fs_col1Date);
        if(fs_col1Date){
            for(var i=0;i<fs_col1Date.length;i++){
                var str = '';
                for(var key in fs_col1Date[i]){
                    str += '<a href="##">'+fs_col1Date[i][key]+'</a>';
                    str += '<span>/</span>';
                }
                str = str.slice(0,str.length-14);
                lis[i].innerHTML += str;
            }
        }
    }
});
})();
//fs hover:display框增加内容
;(function (){
    var fs1_left_top = fs_col1.getElementsByClassName('fs1_left_top');
    var fs1_left_bot = fs_col1.getElementsByClassName('fs1_left_bot');
    utils.ajax({
        url:'json/fsLeftTop.txt',
        success:function(result){
            var data=result;
            if(data){
                for(var i = 0;i<data.length;i++){
                    var ulStr = '';
                    var dlStr = '';
                    var flag = false;
                    for(var key in data[i]){
                        if(key.indexOf('ul')!=-1){
                            ulStr += '<li><span>'+data[i][key]+'</span><i class="i1"></i><i class="i2"></i></li>'
                        }
                        if(key.indexOf('dt')!=-1){
                            if(flag)dlStr += '</dd></dl>';
                            dlStr += '<dl>';
                            dlStr += '<dt><a href="##">'+data[i][key]+'<i class="i1"></i><i class="i2"></i></a></dt>';
                            flag?dlStr += '<dd class="clear">':dlStr += '<dd class="first clear">';
                            flag = true;
                        }
                        if(key.indexOf('dd')!=-1){
                            dlStr += '<a href="##">'+data[i][key]+'</a>';
                        }
                    }
                    fs1_left_top[i].innerHTML = ulStr;
                    fs1_left_bot[i].innerHTML = dlStr;
                }
            }
        }
    });
})();
var fs_col2 = fs.getElementsByClassName('fs_col2')[0];
var lis = fs_col1.getElementsByClassName('li1');
var imgs = fs_col1.getElementsByTagName('img');
function fn() {
    var fixRight = document.getElementsByClassName('fixRight')[0];
    var height = document.documentElement.clientHeight || document.body.clientHeight;
    fixRight.style.height = height + 'px';
}
fn();
$(window).on('resize', fn);
var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    pagination: '.swiper-pagination',
    paginationType: 'bullets',
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});
var fixHead = document.getElementsByClassName('fixHead')[0];
window.onscroll = function fixHeadOn() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (scrollTop > winHeight) {
        fixHead.style.height = 48 + 'px';
        fixHead.style.borderBottom = 2 + 'px solid #f10214';
    } else {
        fixHead.style.height = 0;
        fixHead.style.borderBottom = 'none';
    }
};

var $gridc2 = $('.gridc2'),
    $ul = $gridc2.children('ul'),
    $li = $ul.children('li'),
    $lines = $gridc2.children('.lines');
var curLeft = $lines.css('left');
$li.on('mouseenter', function (e) {
    console.log(e)
})
