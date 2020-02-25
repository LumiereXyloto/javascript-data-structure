function getUrlParams(url) {
  //1、url截取?之后的字符串(不包含?)
  var pathSearch = url || window.location.search.substr(1);
  var result = [];
  //2、以&为界截取参数键值对
  var paramItems = pathSearch.split("&");
  // 3、将键值对形式的参数存入数组
  for (var i = 0; i < paramItems.length; i++) {
    var paramKey = paramItems[i].split("=")[0];
    var paramValue = paramItems[i].split("=")[1];
    result.push({
      key: paramKey,
      value: paramValue
    });
  }
  return result
}

getUrlParams('www.badu.com?a=b&c=d')