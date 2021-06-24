/*
 * @Author: your name
 * @Date: 2021-06-23 15:18:37
 * @LastEditTime: 2021-06-23 22:40:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jiguowang\js\playnew.js
 */
$(function() {
    $.ajax({
        url: 'http://localhost:3000/play/new',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var str = '';
            // each遍历数组
            $.each(data[0], function(index, ele) {
                console.log(index);
                // repace 替换IP地址
                var data0 = data[0][index];
                var Isrc = data0.img.replace(/192.168.1.64/g, '192.168.31.100');
                // console.log(data0);
                // console.log(Isrc);
                str += `
            <li class="hot_li">
                <img  class="hot_li_img"src="${Isrc}" alt="">
                <div class="li_text">
                        <p>${data0.text}</p>
                        <p class="hot_cc">${data0.description}</p>
                        <p> <span class="pri">${data0.price}</span> 
                          <span class="text_left">
                            <img class="img_top" src="../img/图片/css/img/xin.png" alt="">   
                            <span class='like'>${data0.like}<img class="img_top" src="../img/图片/css/img/reply.png" alt="">${data0.like}</span>
                          </span>
                        </p>
                </div>
            </li>
            `;
            });
            $('.hot_box').html(str);
        }
    })
})