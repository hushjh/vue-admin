
var common={
    getDbData: function (lb, dt, callback) {//取数据：接口名称，参数，回调函数
        var csz = {};
        csz.lb = lb;
        csz.cs = dt;
        var param = {};
        param.sqlcsz = this.objectToParam(csz);
        var url = this.getHostPath() + '/ashx/dbread.ashx'
        this.cdgetWebService(url, param, function (json) {
                callback(json);
            });
    },
    cdgetWebService: function(url,da, callback) {
        $.ajax({
            url: url,
            type: "post",
            data: da,
            dataType: "json",
            success: function (rdt) {
                if (callback) {
                    if (typeof callback === "function") {
                        callback(rdt);
                    } 
                }                   
            },
            error: function (rdt) {
                console.log(rdt);
            }
        });
    },
    objectToParam: function(obj) {
        var array = [];
        for (var item in obj) {
            if (item == "cs") {
                if (obj[item] != null && typeof obj[item] === "object") {
                    var csarray = [],
                        csz = obj[item];
                    for (var cz in csz) {
                        csarray.push(cz + ":" + csz[cz]);
                    }
                    if (csarray.length > 0) {
                        array.push("[" + item + "]=" + csarray.join("$"));
                    }
                }
            } else {
                var val = "[" + item + "]=" + obj[item];
                array.push(val);
            }
        }
        return array.join("#");
    },
    getFormValue:function($el){//获取指定元素内的 Input值
        var $inputs=$("input",$el);
        var json={};
        $.each($inputs,function(i,n){
            var name=$(n).attr("name");
            var type=$(n).attr("type");
            if(type==="text" || type==="number" || type==="password"){
                switch(type){
                    case 'text':
                        var val=$(n).val() || "";
                        break;
                    case 'password':
                        var val = $(n).val() || "";
                        break;
                    case 'number':
                        var val=$(n).val() || 0;
                        break;
                }
                json[name]=val;
            }
            
        })
        return json;
    },
    GetQueryString:function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    getTime: function () {
        var curDate = new Date();
        var year = curDate.getFullYear();
        var month = +curDate.getMonth() + 1;
        var date = curDate.getDate();
        var h = curDate.getHours();
        var m = curDate.getMinutes();
        var s = curDate.getSeconds();
        return year + '/' + month + '/' + date + ' ' + h + ':' + m + ':' + s
    },
    getHostPath: function () {
        //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
        var curWwwPath = window.document.location.href;
        //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        //获取主机地址，如： http://localhost:8083
        var localhostPath = curWwwPath.substring(0, pos);
        return localhostPath;
    },
    getGuid:function() {//调用方法 var guid=new GUID();guid.newGUID();
        var GUID=function(){
            this.date=new Date();
            if (typeof this.newGUID != 'function') {   /* 生成GUID码 */
                GUID.prototype.newGUID = function () {
                    this.date = new Date(); var guidStr = '';var sexadecimalDate='',sexadecimalTime='';
                    sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16);
                    sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16);
                    for (var i = 0; i < 9; i++) {
                        guidStr += Math.floor(Math.random() * 16).toString(16);
                    }
                    guidStr += sexadecimalDate;
                    guidStr += sexadecimalTime;
                    while (guidStr.length < 32) {
                        guidStr += Math.floor(Math.random() * 16).toString(16);
                    }
                    return this.formatGUID(guidStr);
                }
                /* * 功能：获取当前日期的GUID格式，即8位数的日期：19700101 * 返回值：返回GUID日期格式的字条串 */
                GUID.prototype.getGUIDDate = function () {
                    return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDay());
                }
                /* * 功能：获取当前时间的GUID格式，即8位数的时间，包括毫秒，毫秒为2位数：12300933 * 返回值：返回GUID日期格式的字条串 */
                GUID.prototype.getGUIDTime = function () {
                    return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds()) + this.addZero(parseInt(this.date.getMilliseconds() / 10));
                }
                /* * 功能: 为一位数的正整数前面添加0，如果是可以转成非NaN数字的字符串也可以实现 * 参数: 参数表示准备再前面添加0的数字或可以转换成数字的字符串 * 返回值: 如果符合条件，返回添加0后的字条串类型，否则返回自身的字符串 */
                GUID.prototype.addZero = function (num) {
                    if (Number(num).toString() != 'NaN' && num >= 0 && num < 10) {
                        return '0' + Math.floor(num);
                    } else {
                        return num.toString();
                    }
                }
                /*  * 功能：将y进制的数值，转换为x进制的数值 * 参数：第1个参数表示欲转换的数值；第2个参数表示欲转换的进制；第3个参数可选，表示当前的进制数，如不写则为10 * 返回值：返回转换后的字符串 */GUID.prototype.hexadecimal = function (num, x, y) {
                    if (y != undefined) { return parseInt(num.toString(), y).toString(x); }
                    else { return parseInt(num.toString()).toString(x); }
                }
                /* * 功能：格式化32位的字符串为GUID模式的字符串 * 参数：第1个参数表示32位的字符串 * 返回值：标准GUID格式的字符串 */
                GUID.prototype.formatGUID = function (guidStr) {
                    var str1 = guidStr.slice(0, 8) + '-', str2 = guidStr.slice(8, 12) + '-', str3 = guidStr.slice(12, 16) + '-', str4 = guidStr.slice(16, 20) + '-', str5 = guidStr.slice(20);
                    return str1 + str2 + str3 + str4 + str5;
                }
            }
        };
        var guid=new GUID();
        return guid.newGUID();
    }
};

export default common;
