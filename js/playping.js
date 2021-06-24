/*
 * @Author: your name * @Date: 2021-06-23 16:13:16
 * @LastEditTime: 2021-06-23 18:50:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jiguowang\js\playping.js
 */
// $(function() {
//     $.ajax({
//         url: 'http://localhost:3000/play/category',
//         type: 'GET',
//         dateType: 'json',
//         success: function(data) {
//             // 每个对象
//             console.log(data);
//             var str = '';
//             // 遍历
//             $.each(data[0], function(index, ele) {
//                 // 全部的对象全部对象
//                 console.log(data[0]);
//                 // 拿到对象中的每个小数据
//                 var data0 = data[0][index];
//                 // 
//                 console.log(data0);
//                 // 替换数据接口IP地址
//                 /*  */
//                 // var Isrc = data0.img.replace(/192.168.1.64/g, '192.168.31.100');
//                 // console.log(Isrc);
//                 //遍历数组;


//                 str += `

//                     <li class='wi'>${data0.productName}</li>

//                     `
//             });
//             $('.likn_txt').html(str)


//         }
//     })
// })