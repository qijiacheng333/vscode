function init(){
    var num=document.getElementById('num');
    num.value=0;
    num.disabled='disabled'; //禁用，防止误输入
    //实现输入显示
    var oButton=document.getElementsByTagName("input");
    var btn_num1
    var fh
    for (var i=0;i<oButton.length;i++){
        oButton[i].onclick=function(){
            if (!isNaN(this.value)){ //判断单击是否为数字
                if (isNaN(num.value)){                  //判断文本框是否为数字
                    num.value=this.value
                }else{
                num.value=(num.value+this.value)*1; //this代表oButton[i]，*1隐式转换
                }
            }else{
                switch(this.value){
                case '+':
                    btn_num1=Number(num.value);
                    num.value=0;
                    fh='+'
                    break;
                case '-':
                    btn_num1=Number(num.value);
                    num.value=0;
                    fh='-'
                    break;
                case '*':
                    btn_num1=Number(num.value);
                    num.value=0;
                    fh='*'
                    break;
                case '/':
                    btn_num1=Number(num.value);
                    num.value=0;
                    fh='/'
                    break;
                case '.':
                    num.value=dec_number(num.value);
                    break;
                case '←':
                    num.value=back(num.value);
                    break;
                case 'c':
                    num.value=0;
                    break;
                case '+/-':
                    num.value=sing(num.value)
                    break;
                case '=':
                    switch(fh){
                        case '+':
                            num.value=btn_num1+Number(num.value)
                            break    
                        
                        case '-':
                            num.value=btn_num1-Number(num.value)
                            break    
                        
                        case '*':
                            num.value=btn_num1*Number(num.value)
                            break    
        
                        case '/':
                            if (num.value=='0'){
                                alert('除数不能为零')
                                num.value=0
                            }else{
                            num.value=btn_num1/Number(num.value)
                            }
                            break    
                    }
                }
            }
        }
    }
}

// 小数点处理

function dec_number(n){
    if (n.indexOf('.')==-1){
        n=n+'.'
    }
    return n
}

//退位键处理
function back(n){
    n=n.substr(0,n.length-1);
    if (isNull(n)){
        n=0;
    }
    return n;
}

//判断是否为空
function isNull(n){
    if (n == '0' || n.length==0){
        return true;
    }else{
        return false;
    }
}

//正负号处理
function sing(n){
    // if (n.indexOf('-')==-1){
    //     n='-'+n
    // }else{
    //     n=n.substr(1,n.length)
    // }
    // return n
    n=Number(n)*-1;
    return n
}
