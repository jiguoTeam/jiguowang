$(function() {

    // 报告精选的数据引入
    $.ajax({
        url: 'http://localhost:3000/useing/master',
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
            var str = '';
            var jx = '';
            //报告精选的each遍历
            $.each(data, function(index, ele) {
                var src = data[index];
                // console.log(src);
                var Isrc = src.img.replace(/http:\/\/192.168.1.13/g, 'http://localhost');
                // var jxIsrc = data[index + 8].img.replace(/http:\/\/192.168.1.13/g, 'http://localhost');
                // console.log(Isrc);
                // 当生成8个时跳出循环
                if (index < 8) {
                    str += `
                        <li class="report_li">
                            <a class="report_a" href="#">
                                <img class="report_img" src="${Isrc}" alt="">
                                <p class="report_js">${data[index].text}</p>
                                <div class="yh">
                                    <span class="report_uname"><span></span>${data[index].uName}</span>
                                    <div>
                                        <img src="./img/图片/css/img/zan.png" alt="">
                                        <span>3</span>
                                        <img src="./img/图片/css/img/reply.png" alt="">
                                        <span>3</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    `;
                    $('.report_ul').html(str);
                }
                if (index > 7 && index < 12) {
                    jx += `
                        <li class="sp_li">
                            <a href="#">
                                <img class="sp_img" src="${Isrc}" alt="">
                                <p>${data[index].text}</p>
                                <div>
                                    <img src="./img/图片/css/img/xin.png" alt="">
                                    <span>3</span>
                                    <img src="./img/图片/css/img/reply.png" alt="">
                                    <span>3</span>
                                </div>
                            </a>
                            <img class="sp_bkg" src="./img/图片/css/img/listbg.jpg" alt="">
                        </li>
                    `;
                    $('.sp_ul').html(jx);
                }
            })
        }
    })

    $.ajax({
        url: 'http://localhost:3000/play/new',
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
            console.log(data);
            var kw = '';
            var ind = '';
            // var i = 0;
            for (var i = 0; i < 2; i++) {
                $.each(data[i], function(index, ele) {
                    var src = data[i][index];
                    // console.log(src);
                    var Isrc = src.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost');
                    kw += `
                    <li class="kw_li">
                        <a>
                            <img src="${Isrc}" alt="">
                            <p class="kw_description">${src.description}</p>
                            <p class="kw_text">${src.text}</p>
                            <div class="kw_bom">
                                <span class="kw_price">${src.price}</span>
                                <div class="kw_pj">
                                    <img src="./img/图片/css/img/xin.png" alt="">
                                    <span class="kw_like">${src.like}</span>
                                    <img src="./img/图片/css/img/reply.png" alt="">\
                                    <span class="kw_words">${src.words}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    `
                })
            }
            $('.kw_ul').html(kw);
        }
    })
})