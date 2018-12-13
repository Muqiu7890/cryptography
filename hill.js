function hill(M) {
    let A = [[8,6,9,5],[6,9,5,10],[5,8,4,9],[10,6,11,4]]
    M = M.split("")
    let ser = []
    for(let i= 0;i< M.length;i++) {
        ser[i] = strToNum(M[i])
    }
    let a = maxtri(ser,A)
    for(let i = 0;i< M.length;i++) {
        ser[i] = numToStr(a[i])
        if(M[i].charCodeAt(0) < 91) {
            ser[i] = ser[i].toUpperCase()
        }
    }
    console.log("加密后:" + ser.join(""))

    let invert_A = ceil(matrix_invert(A))
    let d = maxtri(a,invert_A)
    for(let i = 0;i< d.length;i++) {
        ser[i] = numToStr(d[i])
        if(M[i].charCodeAt(0) < 91) {
            ser[i] = ser[i].toUpperCase()
        }
    }
    console.log("解密后：" + ser.join(""))
}

function strToNum(arg) {
    if(arg.toLowerCase().charCodeAt(0) < 123 && arg.toLowerCase().charCodeAt(0) >= 97)
        return arg.toLowerCase().charCodeAt(0) - 97
}

function numToStr(num) {
    return String.fromCharCode(num+97)
}

function maxtri(a,b) {
    let t = []
    for(let i=0;i<a.length;i++) {
        let sum = 0
        for(let j=0;j<a.length;j++) {
            sum += a[j]*b[j][i]
        }
        t.push(sum%26)
    }
    return t
}

function matrix_invert(M){
    if(M.length !== M[0].length){return;}
    var i=0, ii=0, j=0, dim=M.length, e=0, t=0;
    var I = [], C = [];
    for(i=0; i<dim; i+=1){
        I[I.length]=[];
        C[C.length]=[];
        for(j=0; j<dim; j+=1){
            if(i==j){ I[i][j] = 1; }
            else{ I[i][j] = 0; }

            C[i][j] = M[i][j];
        }
    }

    for(i=0; i<dim; i+=1){
        e = C[i][i];

        if(e==0){
            for(ii=i+1; ii<dim; ii+=1){
                if(C[ii][i] != 0){
                    for(j=0; j<dim; j++){
                        e = C[i][j];
                        C[i][j] = C[ii][j];
                        C[ii][j] = e;
                        e = I[i][j];
                        I[i][j] = I[ii][j];
                        I[ii][j] = e;
                    }
                    break;
                }
            }
            e = C[i][i];
            if(e==0){return}
        }

        for(j=0; j<dim; j++){
            C[i][j] = C[i][j]/e;
            I[i][j] = I[i][j]/e;
        }
        for(ii=0; ii<dim; ii++){
            if(ii==i){continue;}
            e = C[ii][i];
            for(j=0; j<dim; j++){
                C[ii][j] -= e*C[i][j];
                I[ii][j] -= e*I[i][j];
            }
        }
    }
    return I;
}

function ceil(M) {
    for(let i = 0;i < M.length;i++) {
        for(let j= 0;j< M.length;j++) {
            M[i][j] = Math.round(M[i][j])%26
            if(M[i][j] < 0) M[i][j] += 26
        }
    }
    return M
}

hill('Hill')