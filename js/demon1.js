// DOM节点获取函数
function $(str) {
    if (str.charAt(0)=="#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0)=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}


// window.onload=function(){
//     var cols=document.getElementsByClassName("ass");
//     // console.log(cols)
//     for (key in cols) {
//         cols[key].onmouseenter = function (event) {
//             var evt = event || window.event;
//             console.log("hahhah")
//             var div=document.createElement("div");
//             cols[0].appendChild(div);
//         }
//     }
// }
window.onload=function(){
    var cols=document.getElementsByClassName("serveSupshow");
    console.log("cols")

        cols[0].onmouseenter = function () {
            console.log("hahhah")

            document.getElementsByClassName("serveSup").style.display="block";

        }

}