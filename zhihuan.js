function zhihuan(num) {
    let str = ""
    let mw = 'qiaojing03163092'
    let mw1 = sliceArray(mw,num).result
    let u = randomArr(num)
    for(let i = 0;i < mw1.length;i++) {
        let mw3 = mw1[i].split('')
        let a = (zh(mw3,u)).join("")
        str += a
    }
    console.log('加密后：\n' + str)

    let str1 = ''
    let arr2 = str.split("")
    arr2 = sliceArray(arr2,num).result
    let u1 = nzh(u)
    for(let j = 0;j < arr2.length;j++) {
        str1 += zh(arr2[j],u1).join("")
    }
    console.log('解密后：\n' + str1.slice(0,str1.length - sliceArray(arr2,num).len-1))
}

//分组
function sliceArray(array, size) {
    var result = [];
    for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
    }
    let str = ''
    if(result[result.length - 1].length < size) {
        str += repeat(size,size-result[result.length - 1].length)
        result[result.length - 1] += str
    }
    let len = str.length;
    return {result,len};
}

//补全
function repeat(str , n){
    return new Array(n+1).join(str);
}

//生成随机序列
function randomArr(num){
    var _arr = [];
    for(let j = 1 ;j <= num ;j++) {
        _arr.push(j)
    }
    for(var i=0; i<num; i++){
        var random = Math.random() * num;
        _arr.push(_arr.splice(random, 1)[0]);
    }
    return _arr;
}

//置换
function zh(arr,arr1) {
    let arr3 = arr.slice(0)
    for (var i = 0; i < arr.length; i++) {
        let index = arr1[i]
        arr[i] = arr3[index-1]
    }
    return arr
}

//逆置换
function nzh(u) {
    let u1 = []
    for(let j = 1 ;j <= u.length ;j++) {
        u1.push(u.indexOf(j)+1)
    }
    return u1
}

zhihuan(7)