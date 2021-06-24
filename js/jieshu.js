$(function(){
    $.ajax({
        url:'http://localhost:3000/useing/master',
        type:'GET',
        dataType:'JSON',
        success:function(hkl){
            console.log(hkl);
            // console.log(hkl[0]);
            // console.log(hkl[0].img);
            // var stn = hkl[0].img
            // console.log(hkl[0].text);
            // var sht=stn.replace(/http:\/\/192.168.1.13/g,'http://localhost')
            // $('img').attr('src',sht)
            // console.log(sht);
            $.each(hkl,function(i,f){
                var thk =f.img;
                var hti =f.text;
                // var hty=f.totalnum;
                // var hir=f.num;
                // var hyt=f.apply;
                // console.log(hir);
                // console.log(hty);
                var sht=thk.replace(/192.168.1.13/g,'localhost');
                // console.log(sht);
                var vbm= $('<li></li>')
                var ning=$('<img>').attr('src',sht)
                var bp= $('<p class="v1"></p>').text(hti)
                var ho=$('<span class="htk">2032</span>')
                var jt=$('<span class="htk1">20<a>台</a></span>')
                var jti=$('<p class="v2">1392<a>申请</a><p>')
                var kt=$('<p class="v3">查看使用名单</p>')
                var luo=$('<span class="k1">首发<span>')
                vbm.append(ning)
                vbm.append(bp)
                vbm.append(ho)
                vbm.append(jt)
                vbm.append(jti)
                vbm.append(kt)
                vbm.append(luo)
                $('.nk').append(vbm)
            })   
        }
    })
})
// $(function() {
//         // 轮播图
//         $.ajax({
//                 url: 'http://localhost:3000/useing/public',
//                 type: 'GET',
//                 dataType: 'JSON',
//                 success: function(data) {
//                     var ind = 0;
//                     var strHtml = "";
//                     data[ind].map(function(nItem) {
//                         console.log(nItem.text);
//                         var Isrc = nItem.img.replace(/http:\/\/192.168.1.13/g, 'http://localhost')
//                         strHtml += `<div class="lb">
//                         <img src="${Isrc}" alt="" width="200">
//                         <p>${nItem.description}</p >
//                         <span class="fangkuang">2032</span>
//                         <span class="fangkuang_">20台</span>
//                         <p><span>1392</span>申请</p >
//                         <p class="shengyu">剩余时间2天</p >
//                     </div>`
//                     })
//                     $('.xuanran').html(strHtml)
//                 }
//             })
//   })