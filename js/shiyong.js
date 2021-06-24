$(function(){
    $.ajax({
        url:'http://localhost:3000/useing/master',
        type:'GET',
        dataType:'JSON',
        success:function(hkl){
            var str='';
            //each遍历数组
            $.each(hkl,function(git,ele){
                //repace 替换IP地址
                //htu是数组对应下标
                var htu= hkl[git];
                console.log(htu);
                var jtk=htu.img.replace(/192.168.1.13/g,'localhost');
                // console.log(jtk);
                str+=`
                <li class='jqt'>
                    <img  src='${jtk}'alt=''>
                    <p class='kt-p'>${htu.text}</p>
                    <span class='hi-1'>${htu.totalnum}</span>
                    <span class='hi-2'>${htu.num}<a>台</a></span>
                    <p class='v1'>${htu.apply}<a>申请</a></p>
                    <p class='v2'>查看使用名单</p>
                    <span class='k1'>首发</span>
                </li>`
                
            })
            $('.pu').html(str)
        }
    })
})