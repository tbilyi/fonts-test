const MY_FONTS_BODY = "my-fonts-body";
const BUY_FONTS_BODY = "buy-fonts-body";
const SHOW_MY_FONTS = "show-my-fonts";
const MY_FONTS_BTN = "my-fonts-btn";
const BUY_FONTS_BTN = "buy-fonts-btn";
const ACTIVE = "active";

const showMyFonts = (isAdd) => {
	const params = [
		[MY_FONTS_BODY, SHOW_MY_FONTS, isAdd],
		[BUY_FONTS_BODY, SHOW_MY_FONTS, isAdd],
		[MY_FONTS_BTN, ACTIVE, isAdd ? true: false],
		[BUY_FONTS_BTN, ACTIVE, isAdd ? false: true]
	];
	params.forEach(param => setClass(...param));
}

const setClass = (searchClass, changeClass, isAdd) => {
	document.getElementsByClassName(searchClass)[0].classList.toggle(changeClass, isAdd);
}

/*
*  #2
*/
const parseURL = url => {
	const parser = document.createElement('a');
	parser.setAttribute('href', url);
	return 'protocol,host,hostname,port,pathname,search,hash'.split(',').reduce((a,b)=>(a[b]=parser[b],a),{});
}
let obj = parseURL("http://ffwagency.com:8080/do/any.php?a=1#foo");
console.log('protocol: ', obj.protocol);
console.log('host: ', obj.host);
console.log('hostname: ', obj.hostname);
console.log('port: ', obj.port);
console.log('pathname: ', obj.pathname);
console.log('search: ', obj.search);
console.log('hash: ', obj.hash);