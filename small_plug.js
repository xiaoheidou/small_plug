$(function () {
    /*//  http://csh.jiankongbao.com/
     csh123*/
    $.get('small_plug.json', function (paren) {
        $('.slider-posi>.table-slider tbody').empty();
        $('#table tbody').empty();
        var counter = 0;

        var top = -20;
        console.log(paren);
        /*var tabel_height = 0;
        for(var key in paren){
            tabel_height++;
        }
        var top_line = tabel_height*27;*/
        var tabel_height = Object.keys(paren).length;
        var top_line = tabel_height*27;
        for (var key in paren) {
            var table_text = '<tr><td>&nbsp;</td></tr>';
            $('#table tbody').append(table_text);

            paren[key].width = paren[key].num / paren['user_end'].num * 100;
            var start = paren[key].start;
            //console.log(paren[key]);

            if (start != undefined && paren[start]) {
                paren[key].left = paren[start].left + paren[start].width;
            } else {
                paren[key].left = 0;
            }

            /*if(start==paren[key]){
                paren[key].left = 0;
            }else{
                paren[key].left = paren[start].left + paren[start].width;
            }
*/
            var table_text = '<tr><td width="13%">' + paren[key].title + '</td>' +
                '<td width="7%">' + paren[key].num + '</td>' +
                '<td width="1%" class="rule"></td>' +
                '<td width="79%">' + '<span class="time-water ' + paren[key].class + '" style="width:' + paren[key].width + '%;left:' + paren[key].left + '%;"></span>'
                + '</td></tr>';
            $('.slider>.table-slider tbody').append(table_text);

            //console.log(top_line);
            if (paren[key].isLine) {
                var width_line = parseFloat($('.slider-line').css('width'));
                var left_line = parseFloat(paren[key].width) + parseFloat(paren[key].left);
                var right = left_line>90?'initial;right:'+(100-left_line):left_line;
                var lin_right = left_line>90?'left:'+(left_line*width_line/100-10)+'px;border-right: 1px solid #d9d9d9;border-top-right-radius: 10px;border-left: 0;border-top-left-radius: 0px;':'left:'+left_line+'%;';
                var top_text =top * (counter+1);
                var line_s ='<div style="'+lin_right+'height:'+(top_line-top_text)+'px;top:'+top_text+'px">'+'</div>';
                var text_s = '<div style="left:'+right +'%;top:'+top_text+'px;">' + paren[key].title + '</div>';
                $('.slider-text').append(text_s);
                $('.slider-line').append(line_s);
                counter++;
            };

        }


    });

});