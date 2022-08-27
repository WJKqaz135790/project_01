function resolveData(data){
    let arr = [];
    for(let k in data){
        arr.push(k+'='+data[k]);
    }
    return arr.join('&');
}

function LiiLii(options){
    let xhr = XMLHttpRequest();
    // 把外面传进来的参数对象，转换为 查询字符串
    let qs = resolveData(options.data);

    xhr.onreadystatechange = function(){
      if(xhr.readyState ===4 && xhr.status === 200){
        let result = JSON.parse(xhr.responseText);
        options.success(result);
      }  
    }
    if(options.method.toUpperCase() === 'GET'){
        //get请求
        xhr.open(options.method,options.url+'?'+qs);
        xhr.send();
    }else if(options.method.toUpperCase() === 'POST'){
        xhr.open(options.method,options.url);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(qs);
    }
}