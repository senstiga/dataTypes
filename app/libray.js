'use strict'

var file = {}
file.dataTypes = function(args){
	if(( args == null)||( args == undefined)){
		return "no value";
	}else if(args == true){
		return true;
	}else if(args == false){
		return false;
	}else if(typeof args == "number"){
		if(parseInt(args) < 100){
			return "less than 100";
		}else if(parseInt(args) > 100){
			return "more than 100"
		}else if(parseInt(args) === 100){
			return "equal to 100";
		}
	}else if(typeof args == "string"){
		if(args === ""){
			return 0
		}else{
			return args.length;
		}
		
	}else if(args instanceof Array){
		if(args.length === 0){
			return undefined;
		}else if(args.length >= 3){
			return args[2];
		}
	}else if(typeof args == "function"){
		return args(true);
	}
}
 module.exports = file;