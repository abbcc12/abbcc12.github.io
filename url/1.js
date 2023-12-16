console.log("1.js");
let u=Object();
let ttt=Object();
if (true==true) {
}
u.blank="";u.auto="";u.startTime="";u.endTime="";u.key="";u.t1=Object();u.t2=Object();
if (true==true) {
}
u.blank="";u.auto="";u.startTime="";u.endTime="";u.key="";u.t1=Object();u.t2=Object();
ttt.blank="";ttt.startTime="";ttt.endTime="";ttt.key="";ttt.t1=Object();ttt.t2=Object();

// u.startTime=Object();u.endTime=Object();u.key=Object();
// u.startTime.year="";u.startTime.month="";u.startTime.year=""
function copy1(){
    var copyText = document.getElementById("res1");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
}
function copy2(){
    var copyText = document.getElementById("res2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
}
function url(a){//a是输入
    if (a==""||a==undefined||a==null) {
        a=document.getElementById("textarea").value;
    }
    ch();
    if (a.length==0) {
        return;
    }
    var b,c,key,len,m,m1,m2,verify1,st,et;
	if (edit==true) {
		console.log(a);
	}
    st=u.t1.year+u.t1.month+u.t1.date+u.t1.hour+u.t1.minute+u.t1.second;
    et=u.t2.year+u.t2.month+u.t2.date+u.t2.hour+u.t2.minute+u.t2.second;
	b=a.charCodeAt(0).toString();
    for (var i = 1; i < (a.length); i++) {
		c=a.charCodeAt(i);
		while (c.toString().length<5){
			c="0"+c.toString();
		}
    	b=b+c;
    }//转为unicode（str），b为结果
    console.log("b:"+b);
    if (edit==true) {
		console.log(`b:${b}/b.length:${b.length}`);
	}
    if (u.key==true) {//如果启用密钥......
        if (document.getElementById("password-1").value!=document.getElementById("password-2").value) {
            return;
        }
        key=document.getElementById("password-1").value;
        key=to10(key);//key为输入的秘钥转为10进制
        var key0="";
        //b=to10(b.toString());//key&b:base10
        b=b.toString()
        len=b.length;
        while (key0.length<(b.length)){//输入的key增加长度     key,key0:string
            key0+=key;
        }
        key=key0;
        key0="";
        for (var i = 0; i < (b.length); i++) {//截取相同长度   key,key0:string
            key0+=key[i];
        }
        key=(BigInt(key0)+BigInt(b)).toString();//key,key0:str
        //alert(`${key0.length}/${b.length}/${key.length}`);
        if (key.length>len) {
            b="0"+toBase(BigInt(key));
        } else {
            b=toBase(BigInt(key));
        }
        if (u.startTime==true) {
            if (u.endTime==true) {
                m2=3;
                t=st+et;
            } else {
                m2=1;
                t=st;
            }
        } else{
            if (u.endTime==true) {
                m2=2;
                t=t2;
            } else {
                m2=4;
                t="";
            }
        }
    } else {
        b=toBase(BigInt(b));
        if (u.startTime==true) {
            if (u.endTime==true) {
                m2=7;
                t=st+et;
            } else {
                m2=5;
                t=st;
            }
        } else{
            if (u.endTime==true) {
                m2=6;
                t=et;
            } else {
                m2=8;
                t="";
            }
        }
    }
    if (u.blank==true) {
        if (u.auto==true) {
            m1=1;
        } else {
            m1=2;
        }
    }else{
        if (u.auto==true) {
            m1=3;
        } else {
            m1=4;
        }
    }
    m=toBase(BigInt(m1.toString()+m2.toString()));
    // b=toBase(BigInt(b));
	//document.getElementById("res1").value=`https://lxa2.github.io/url/index.html?${verify1}${"1"}${m}${t}${b}`;
	document.getElementById("res1").value=`https://lxa2.github.io/url/index.html?aaa${"1"}${m}${t}${b}`;
	document.getElementById("qr1").innerHTML="";
	//new QRCode(document.getElementById("qr1"),`https://lxa2.github.io/url/index.html?${verify1}${"1"}${m}${t}${b}`);
    new QRCode(document.getElementById("qr1"),`https://lxa2.github.io/url/index.html?aaa${"1"}${m}${t}${b}`);
}
function text(a){
    if (a==""||a==undefined||a==null) {
        a=document.getElementById("textarea2").value;
    }
    ch();
    if (a.length==0) {
        return;
    }
}

const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@$^&*()-=_+[]{}|;:,./?';
const ben = 87n;
// const base="0123456789ABCDEF"
// const ben=16n;

function toBase(bint) {
	var num=bint;
    let arr = [];
    while (num > 0n) {
        arr.push(base[num % ben]);
        num = (num-(num%ben)) / ben;
    }
    return arr.reverse().join('');
}
function to10(str) {
	var baseNum=str;
    baseNum = baseNum.split('').reverse().join('');
    let val = 0n;
    for (let i = 0n; i < BigInt(baseNum.length); i++) {
        let c = baseNum[i];
        val += (BigInt(base.indexOf(c)) * (ben**i));
    }
    return val.toString();
}