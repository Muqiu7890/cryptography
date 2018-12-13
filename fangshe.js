/*
 * k2: 92  k1: 89 --> key = (92,89)
 * n = 36
 * 明文： qiaojing03163092
 */

//仿射密码
function fangshe(k1, k2) {
    let m = "qiaojing03163092";
    m = m.split("")
    //加密
    mod(m, k1, k2);
    let m1 = []
    Object.assign(m1, m)
    trans(m)
    console.log("加密后\n" + m.join(''))
    //解密
    for (let k = 0; k < m1.length; k++) {
        m1[k] = (reverse(k1) * (m1[k] - k2)) % 36
        if (m1[k] < 0) m1[k] += 36
    }
    trans(m1)
    console.log('解密后：\n' + m1.join(""))
}

//求逆元
function reverse(k1) {
    for(var i = 0;i < 36;i++) {
        if(1 === (k1*i)%36)
            return i
    }
}

//mod后的值
function mod(m,k1,k2) {
    for (let i = 0; i < m.length; i++) {
        if (m[i].charCodeAt(0) <= 57)
            m[i] = m[i].charCodeAt(0) - 22
        else m[i] = m[i].charCodeAt(0) - 97
        m[i] = (k1 * m[i] + k2) % 36
    }
}

//转化
function trans(m) {
    for (let j = 0; j < m.length; j++) {
        if (m[j] < 26) {
            m[j] = String.fromCharCode((m[j] + 97))
        } else {
            m[j] = String.fromCharCode((m[j] + 22))
        }
    }
}

fangshe(89,92)
