var console = require("./index");

console.log("abcdefaldkjfadflaf");
console.animate(null, {
	content: "lalala"
});
setTimeout(function(){
	console.log("ddfa");
	console.animate("default", {
		content: "ddddddd"
	});
	setTimeout(function(){
		console.animate(false, {
			content: "aaa"
		});
		setTimeout(function(){
			console.log("sss");
			console.log("dkjklfjakljdfl");
		}, 5000);
	}, 5000);
}, 5000);