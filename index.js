function init(){
    var num=document.getElementById('num');
    num.value=0;
    num.disabled='disabled'; //禁用，防止误输入
    //实现输入显示
    var oButton=document.getElementsByTagName("input");
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
                    break;
                
                }
            }
        }
    }
}
