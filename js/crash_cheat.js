<!--崩溃欺骗 + OriginTitle -->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '╭(°A°`)╮ 我不爱你啦~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 喵喵爱你哟~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });