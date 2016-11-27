// /**
//  * Function makeTag
//  * Usage:makeTag(num,direction,link_name,value_x,value_y,link)
//  * -----------------------------------------------------------------
//  * func:return a tag dom 
//  * @param {String} num -标签分支线数量
//  * @param {String} direction -（"right"|"left"）
//  * @param {String} link_name -（tag_name）
//  * @param {Num}    value_x -inject Dom a horizontal value
//  * @param {Num}    value_y -inject Dom a vertical value
//  * @param {String}/{Boolean} link - a click to buy link href
//  */
 
// 	function makeTag(num,direction,link_name,value_x,value_y,link){
// 		if(num=="single"){
// 			var tagItemTmp = "<div class='tag_container' style='position:absolute;left:l_leftpx;top:t_toppx' x=_value_x y=_value_y >"+
// 								"<div class='anchor'></div>"+
// 								"<div class='anchor_edge'></div>"+
// 								"<div class='tag_name_single__direction' _href>_link_name</div>"+
// 							"</div>"
// 		}else{
// 			var tagItemTmp = "<div class='tag_container' style='position:absolute;left:l_leftpx;top:t_toppx' x=_value_x y=_value_y >"+
// 								"<div class='anchor'></div>"+
// 								"<div class='anchor_edge'></div>"+
// 								"<div class='tree__direction'></div>"+
// 								"<div class='link__direction'>"+"_buy"+"</div>"+
// 								"<div class='tag_name_double__direction' _href>_link_name</div>"+
// 							"</div>"
// 		}
// 		tagItemTmp = tagItemTmp.replace(/_value_x/g,value_x)
// 								.replace(/_value_y/g,value_y)
// 								.replace(/_direction/g,direction)
// 								.replace(/_link_name/g,link_name)
// 								.replace(/_buy/g,"this is a link")
// 								.replace(/l_left/g,value_x)
// 								.replace(/t_top/g,value_y)
// 		if(link){
// 			tagItemTmp = tagItemTmp.replace("_href","href='"+link+"' target='_blank'")
// 		}else{
// 			tagItemTmp = tagItemTmp.replace("_href","")
// 		}
// 		return tagItemTmp;
// 	}

// /**
//  * Function: formatTags
//  * Usage: formatTags(umedia,cWidth,cHeight)
//  * ----------------------------------------
//  * umedia: data(DOM) fetched from the user media API 
//  * @param cWidth: img Container Width 
//  * @param cHeight: img Container Height
//  */

// function formatTags(tags,cWidth,cHeight){
// 	var tags_arr=[]
// 	for (i in tags){
// 		var tag_pos_1 =String(tags[i].position).split("")[0]
// 		var tag_pos_2 =String(tags[i].position).split("")[1]
// 		var x = tags[i].x
// 		var y = tags[i].y
// 		var dname = tags[i].tag_name
// 		if(tag_pos_1==="1"){
// 			if(tag_pos_2==0||tag_pos_2==2){
// 				var tags = makeTag("single","right",dname,x*cWidth,y*cHeight,"")
// 			}else{
// 				var tags = makeTag("single","left",dname,x*cWidth,y*cHeight,"")
// 			}
// 		}else{
// 			if(tag_pos_2==0||tag_pos_2==2){
// 				var tags = makeTag("double","right",dname,x*cWidth,y*cHeight,"")
// 			}else{
// 				var tags = makeTag("double","left",dname,x*cWidth,y*cHeight,"")
// 			}
// 		}
// 		tags_arr.push(tags)
// 	}
// 	var tags_stream= tags_arr.join("")
// 	return tags_stream;
//  }

(function() {
	var root = this;
	var T = function(obj) {
		if (obj instanceof T) return obj;
		if (!(this instanceof T)) return new T(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
    	if (typeof module !== 'undefined' && module.exports) {
      	exports = module.exports = T;
    	}
    	exports.T = T;
  	} else {
		root.T = T;
  	}

	T.VERSION = '0.0.1';
	/**
	 * Function makeTag
	 * Usage:makeTag(num,direction,link_name,value_x,value_y,link)
	 * -----------------------------------------------------------------
	 * func:return a tag dom 
	 * @param {String} num -标签分支线数量
	 * @param {String} direction -（"right"|"left"）
	 * @param {String} link_name -（tag_name）
	 * @param {Num}    value_x -inject Dom a horizontal value
	 * @param {Num}    value_y -inject Dom a vertical value
	 * @param {String}/{Boolean} link - a click to buy link href
	 */
	var makeTag = function(num,direction,link_name,value_x,value_y,link){
		if(num=="single"){
			var tagItemTmp = "<div class='tag_container' style='position:absolute;left:l_leftpx;top:t_toppx' x=_value_x y=_value_y >"+
								"<div class='anchor'></div>"+
								"<div class='anchor_edge'></div>"+
								"<div class='tag_name_single__direction' _href>_link_name</div>"+
							"</div>"
		}else{
			var tagItemTmp = "<div class='tag_container' style='position:absolute;left:l_leftpx;top:t_toppx' x=_value_x y=_value_y >"+
								"<div class='anchor'></div>"+
								"<div class='anchor_edge'></div>"+
								"<div class='tree__direction'></div>"+
								"<div class='link__direction'>"+"_buy"+"</div>"+
								"<div class='tag_name_double__direction' _href>_link_name</div>"+
							"</div>"
		}
		tagItemTmp = tagItemTmp.replace(/_value_x/g,value_x)
								.replace(/_value_y/g,value_y)
								.replace(/_direction/g,direction)
								.replace(/_link_name/g,link_name)
								.replace(/_buy/g,"this is a link")
								.replace(/l_left/g,value_x)
								.replace(/t_top/g,value_y)
		if(link){
			tagItemTmp = tagItemTmp.replace("_href","href='"+link+"' target='_blank'")
		}else{
			tagItemTmp = tagItemTmp.replace("_href","")
		}
		return tagItemTmp;
	}

	/**
	 * Function: formatTags
	 * Usage: formatTags(umedia,cWidth,cHeight)
	 * ----------------------------------------
	 * umedia: data(DOM) fetched from the user media API 
	 * @param cWidth: img Container Width 
	 * @param cHeight: img Container Height
	 */

	T.formatTags=function(tags,cWidth,cHeight){
		var tags_arr=[]
		for (i in tags){
			var tag_pos_1 =String(tags[i].position).split("")[0]
			var tag_pos_2 =String(tags[i].position).split("")[1]
			var x = tags[i].x
			var y = tags[i].y
			var dname = tags[i].tag_name
			if(tag_pos_1==="1"){
				if(tag_pos_2==0||tag_pos_2==2){
					var tags = makeTag("single","right",dname,x*cWidth,y*cHeight,"")
				}else{
					var tags = makeTag("single","left",dname,x*cWidth,y*cHeight,"")
				}
			}else{
				if(tag_pos_2==0||tag_pos_2==2){
					var tags = makeTag("double","right",dname,x*cWidth,y*cHeight,"")
				}else{
					var tags = makeTag("double","left",dname,x*cWidth,y*cHeight,"")
				}
			}
			tags_arr.push(tags)
		}
		var tags_stream= tags_arr.join("")
		return tags_stream;
	}

}.call(this));