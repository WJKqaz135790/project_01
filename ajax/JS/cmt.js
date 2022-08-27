function getCommentList() {
    $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function (res) {
            // console.log(res);
            if (res.status !== 200) {
                return alert('失败');
            }
            let rows = [];
            $.each(res.data, function (i, item) {
                let str = '<li class="list-group-item" id="cmt-list"><span class="badge" style="background-color: #5BC0DE;">评论时间:'+item.time+'</span><span class="badge" style="background-color: #F0AD4E;">评论人:'+item.username+'</span>'+item.content+'</li > ';
                rows.push(str);
            })
            $('#cmt-list').empty().append(rows.join(''));
        }
    })
}

getCommentList();

$(function(){
    $('#formAddCmt').submit(function(e){
        e.preventDefault();
        let data = $(this).serialize();
        // console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if(res.status !== 201){
                alert('失败');
            }
            getCommentList();
            $('#formAddCmt')[0].reset();
        })
    })
})