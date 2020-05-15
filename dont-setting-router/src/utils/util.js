//驼峰法转下划线
const humpToLine = name =>{
	return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}

//下划线转驼峰法
const lineToHump = name =>{
	let nameArr = name.split('_').map((item,index) => {
		if(index){
			item = item[0].toUpperCase() + item.substring(1);
		}
		return item
	})
	return nameArr.join('')
}

module.exports = {
	humpToLine,
	lineToHump
}