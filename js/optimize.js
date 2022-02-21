// //随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var backimg = [
//     "url(https://gitee.com/youthlql/randombg/raw/master/bg/00021.webp)",
//     "url(https://i0.hippopx.com/photos/532/87/580/baseball-sport-game-ball-3326f10c1d8f05717e9a97580b88fd36.jpg)",
//     "url(https://gitee.com/youthlql/randombg/raw/master/bg/00184.webp)"
// ];
// //获取背景图片总数，生成随机数
// var bgindex = Math.ceil(Math.random() * (backimg.length - 1));
// //重设背景图片
// document.getElementById("body-wrap").style.backgroundImage = backimg[bgindex];
// //重设banner图片
// document.getElementById("page-header").style.backgroundImage = backimg[bgindex];

// // document.getElementById("content-inner").style.background = "transparent"
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = 'ヽ(●-`Д´-)ノ你要走嘛我好伤心！';
        clearTimeout(titleTime);
    } else {
        // $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(Ő∀Ő3)ノ哇喔！欢迎！' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 1000);
    }
});

// 添加八毛卡通人物
/*右下角添加卡通人物*/
var bamao = '<i class="fas fa-arrow-up" style ="padding:8px" ></i><img style="max-width: 234%;transform: translate(-65px,-65px);" src="https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200629182853.gif" title="回到顶部" data-ll-status="loaded" class="loaded">';
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML = bamao