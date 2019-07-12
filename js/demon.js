
let currOrd = 0;
let myTimer = null;
function autoPlay(){
	let imgDoms = $("#bigBox").children;
	let liDoms = $("#titleBox").children;
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(()=>{
		let outOrd = currOrd;
		currOrd++;

		if(currOrd>2){
			currOrd = 0;
		}
		fadeInOut(imgDoms[currOrd],imgDoms[outOrd],1000);
		for(let i=0;i<liDoms.length;i++){
		liDoms[i].style.backgroundColor = "gray";
		}
		liDoms[currOrd].style.backgroundColor = "white";
	},3000);

}

function goImg(ord){
	let imgDoms = $("#bigBox").children;
	let liDoms = $("#titleBox").children;

	let outOrd = currOrd;
	currOrd = ord;

	if(currOrd>2){
		currOrd = 0;
	}
	fadeInOut(imgDoms[currOrd],imgDoms[outOrd],1000);
	for(let i=0;i<liDoms.length;i++){
		liDoms[i].style.backgroundColor = "gray";
	}
	liDoms[currOrd].style.backgroundColor = "white";
	
}



window.onload = function(){
	autoPlay();
	$("#bigBox").onmouseenter = function(){
		stopPlay();
	}

	$("#bigBox").onmouseleave = function(){
		autoPlay();
	}
	let lis = $("#titleBox").children;
	for(let i=0;i<lis.length;i++){
		lis[i].onclick = function(){
			goImg(i);
		};
	}
}
function stopPlay(){
	clearInterval(myTimer);
	myTimer = null;
}

// 淡入淡出函数
function fadeInOut(domObjIn,domObjOut,timeLong){
	//已知timeLong；
	let timerSpace= 16;
	let long = 1;
	let step = long/(timeLong/timerSpace) 
	
	let opacity = 0;

	let myTimer = setInterval(function(){
		opacity +=step;

		if(opacity>=1){
			opacity = 1;
			clearInterval(myTimer);
		}

		domObjIn.style.opacity = opacity;
		domObjOut.style.opacity = 1-opacity;

	},timerSpace);

}


// 元素节点的获取函数
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}




