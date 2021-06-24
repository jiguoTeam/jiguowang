/*
 * @Author: your name
 * @Date: 2021-06-23 16:01:39
 * @LastEditTime: 2021-06-24 13:07:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jiguowang\js\guidnew.js
 */
$(function() {
    $.ajax({
        url: 'http://localhost:3000/guid/new',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var str = ''; //放东西的
            $.each(data, function(index, ele) {
                // console.log(index);
                var suju = data[index]; //这个是每个数据
                console.log(suju);
                var repla = suju.img.replace(/192.168.1.64/g, 'localhost'); //图片被改过的数据
                console.log(repla);
                str += `
                <!-- 每一个li -->
                <li class="hot_li">
                    <!-- 里面的图片 -->
                    <img src="${repla}" class="hot_li_img" alt="">
                    <!-- 下面的文字 -->
                    <div class="hot_txt">
                        <p class="suju_txt">${suju.text}</p>
                        <span class='text_left'>
                            <img class="xin" src="../img/图片/css/img/xin.png" alt="">
                            <span class="margni_b"> ${suju.like}</span>  
                            <img class='xin' src="../img/图片/css/img/reply.png" alt="">
                            <span class='margni_b'>${suju.words}</span>
                        </$>
                  
                    </div>
                </li>
                

                ` //str+=等于循环后面的str
                $('.hot_box').html(str)

            })

        }

    })
})