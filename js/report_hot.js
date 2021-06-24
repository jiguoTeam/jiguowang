$(function() {
    $.ajax({
        url: 'http://localhost:3000/report/hot',
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
            console.log(data);
            var str = '';
            var hot = '';
            $.each(data, function(index, ele) {
                console.log(index);
                var src = data[index].img;
                var Isrc = src.replace(/192.168.1.13/g, 'localhost');
                console.log(Isrc);
                if (index > 4 && index < 11) {
                    str += `
                    <li class="all_li">
                        <img src="${Isrc}" alt="">
                        <div class="all_js">
                            <p class="all_text">${data[index].text}</p>
                            <div class="all_bot">
                                <div class="all_peo">
                                    <span class="all_uName">${index}${data[index].uName}</span>
                                    <span class="all_endTime">${data[index].endTime}</span>
                                </div>
                                <div class="all_hh">
                                    <img src="../img/图片/css/img/zan.png" alt="">
                                    <span>3</span>
                                    <img src="../img/图片/css/img/reply.png" alt="">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="look">
                        <a href="#"><p>${data[index].text},点击查看</p></a>
                    </li>
                    `
                    $('.all_ul').html(str);
                }
            })
        }
    })
})