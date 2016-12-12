

document.addEventListener('DOMContentLoaded', function (e){
	document.getElementById('HTML-example').innerHTML = parse(document.getElementById('HTML-example').innerHTML,htmlParser);
	document.getElementById('CSS-example').innerHTML = parse(document.getElementById('CSS-example').innerHTML,cssParser);
	document.getElementById('JSON-example').innerHTML = parse(document.getElementById('JSON-example').innerHTML, jsonParser);
	document.getElementById('JS-example').innerHTML = parse(document.getElementById('JS-example').innerHTML, jsParser);

	document.getElementById('HTML-style-printed').innerHTML = parse(document.getElementById('HTML-style').innerHTML,cssParser);
	document.getElementById('CSS-style-printed').innerHTML = parse(document.getElementById('CSS-style').innerHTML,cssParser);
	document.getElementById('JSON-style-printed').innerHTML = parse(document.getElementById('JSON-style').innerHTML,cssParser);
	document.getElementById('JS-style-printed').innerHTML = parse(document.getElementById('JS-style').innerHTML,cssParser);

	document.getElementById('html-style-copy').addEventListener('click', function(e){
		copyToClipboard(document.getElementById('HTML-style-printed').innerHTML);
	});
	document.getElementById('css-style-copy').addEventListener('click', function(e){
		copyToClipboard(document.getElementById('CSS-style-printed').innerHTML);
	});
	document.getElementById('json-style-copy').addEventListener('click', function(e){
		copyToClipboard(document.getElementById('JSON-style-printed').innerHTML);
	});
	document.getElementById('js-style-copy').addEventListener('click', function(e){
		copyToClipboard(document.getElementById('JS-style-printed').innerHTML);
	});

	var html_color_inputs = document.getElementsByClassName('html-color-input');
	for (var i = 0; i < html_color_inputs.length; i++)
	{
		html_color_inputs[i].addEventListener('change', function(e){
			var html = "#"+document.getElementById('html-main-color').value;
			var html_tag ="#"+ document.getElementById('html-tag-color').value;
			var html_attr = "#"+document.getElementById('html-attr-color').value;
			var html_attr_value = "#"+document.getElementById('html-attr-value-color').value;
			var html_comment = "#"+document.getElementById('html-comment-color').value;
			changeHTMLStyle(html, html_tag, html_attr, html_attr_value, html_comment);
		});
	}
	var css_color_inputs = document.getElementsByClassName('css-color-input');
	for (i = 0; i < css_color_inputs.length; i++)
	{
		css_color_inputs[i].addEventListener('change', function(e){
			var css = "#"+document.getElementById('css-main-color').value;
			var css_tag_selector = "#"+document.getElementById('css-selector-tag-color').value;
			var css_class_selector = "#"+document.getElementById('css-selector-class-color').value;
			var css_id_selector = "#"+document.getElementById('css-selector-id-color').value;
			var css_attr = "#"+document.getElementById('css-attr-color').value;
			var css_comment = "#"+document.getElementById('css-comment-color').value;
			changeCSSStyle(css, css_tag_selector, css_class_selector, css_id_selector, css_attr, css_comment);
		});
	}
	var json_color_inputs = document.getElementsByClassName('json-color-input');
	for (i = 0; i < json_color_inputs.length; i++)
	{
		json_color_inputs[i].addEventListener('change', function(e){
			var json = "#"+document.getElementById('json-main-color').value;
			var json_key = "#"+document.getElementById('json-key-color').value;
			var json_string = "#"+document.getElementById('json-string-color').value;
			var json_number = "#"+document.getElementById('json-number-color').value;
			changeJSONStyle(json, json_key, json_string, json_number);
		});
	}
	var js_color_inputs = document.getElementsByClassName('js-color-input');
	for (i = 0; i < js_color_inputs.length; i++)
	{
		js_color_inputs[i].addEventListener('change', function(e){
			var js = "#"+document.getElementById('js-main-color').value;
			var js_keyword = "#"+document.getElementById('js-keyword-color').value;
			var js_string = "#"+document.getElementById('js-string-color').value;
			var js_parameter = "#"+document.getElementById('js-parameter-color').value;
			var js_function_call = "#"+document.getElementById('js-function-call-color').value;
			var js_comment = "#"+document.getElementById('js-comment-color').value;
			changeJSStyle(js, js_keyword, js_string, js_parameter, js_function_call, js_comment);
		});
	}


	var html = "#"+document.getElementById('html-main-color').value;
	var html_tag ="#"+ document.getElementById('html-tag-color').value;
	var html_attr = "#"+document.getElementById('html-attr-color').value;
	var html_attr_value = "#"+document.getElementById('html-attr-value-color').value;
	var html_comment = "#"+document.getElementById('html-comment-color').value;
	changeHTMLStyle(html, html_tag, html_attr, html_attr_value, html_comment);

	var css = "#"+document.getElementById('css-main-color').value;
	var css_tag_selector = "#"+document.getElementById('css-selector-tag-color').value;
	var css_class_selector = "#"+document.getElementById('css-selector-class-color').value;
	var css_id_selector = "#"+document.getElementById('css-selector-id-color').value;
	var css_attr = "#"+document.getElementById('css-attr-color').value;
	var css_comment = "#"+document.getElementById('css-comment-color').value;
	changeCSSStyle(css, css_tag_selector, css_class_selector, css_id_selector, css_attr, css_comment);

	var json = "#"+document.getElementById('json-main-color').value;
	var json_key = "#"+document.getElementById('json-key-color').value;
	var json_string = "#"+document.getElementById('json-string-color').value;
	var json_number = "#"+document.getElementById('json-number-color').value;
	changeJSONStyle(json, json_key, json_string, json_number);

	var js = "#"+document.getElementById('js-main-color').value;
	var js_keyword = "#"+document.getElementById('js-keyword-color').value;
	var js_string = "#"+document.getElementById('js-string-color').value;
	var js_parameter = "#"+document.getElementById('js-parameter-color').value;
	var js_function_call = "#"+document.getElementById('js-function-call-color').value;
	var js_comment = "#"+document.getElementById('js-comment-color').value;
	changeJSStyle(js, js_keyword, js_string, js_parameter, js_function_call, js_comment);
});


function parse(input, parser) {
	try {
		return parser.parse(input);
	} catch (e) {

	}
	return input;
}

function changeHTMLStyle(html,tag,attr,attr_value,comment){
	var style = ""+
".html {"+"\n"+
"	color: " + html + ";"+"\n"+
"}"+"\n"+
".html .html-tag {"+"\n"+
"	color: " + tag + ";"+"\n"+
"}"+"\n"+
".html .html-attr {"+"\n"+
"	color: " + attr + ";"+"\n"+
"}"+"\n"+
".html .html-attr-value {"+"\n"+
"	color: " + attr_value + ";"+"\n"+
"}"+"\n"+
".html .html-comment {"+"\n"+
"	color: " + comment + ";"+"\n"+
"}"+"\n"+
"";
	document.getElementById('HTML-style').innerHTML = style;
	document.getElementById('HTML-style-printed').innerHTML = parse(document.getElementById('HTML-style').innerHTML,cssParser);
}

function changeCSSStyle(css, tag_selector, class_selector, id_selector, attr, comment){
	var style = ""+
".css {"+"\n"+
"	color: "+css+";"+"\n"+
"}"+"\n"+
".css .css-selector-tag {"+"\n"+
"	color: "+tag_selector+";"+"\n"+
"}"+"\n"+
".css .css-selector-class {"+"\n"+
"	color: "+class_selector+";"+"\n"+
"}"+"\n"+
".css .css-selector-id {"+"\n"+
"	color: "+id_selector+";"+"\n"+
"}"+"\n"+
".css .css-attr {"+"\n"+
"	color: "+attr+";"+"\n"+
"}"+"\n"+
".css .css-comment {"+"\n"+
"	color: "+comment+";"+"\n"+
"}"+"\n"+
"";
	document.getElementById('CSS-style').innerHTML = style;
	document.getElementById('CSS-style-printed').innerHTML = parse(document.getElementById('CSS-style').innerHTML,cssParser);
}

function changeJSONStyle(json, key, string, number){
	var style = ""+
".json {"+"\n"+
"	color: "+json+";"+"\n"+
"}"+"\n"+
".json .json-key {"+"\n"+
"	color: "+key+";"+"\n"+
"}"+"\n"+
".json .json-string {"+"\n"+
"	color: "+string+";"+"\n"+
"}"+"\n"+
".json .json-number {"+"\n"+
"	color: "+number+";"+"\n"+
"}"+"\n"+
".json-object {"+"\n"+
"	list-style: none;"+"\n"+
"}"+"\n"+
".json-attribute,"+"\n"+
".json-array > .json-array-value{"+"\n"+
"	padding-left: 1em;"+"\n"+
"	display: list-item;"+"\n"+
"}"+"\n"+
"";
	document.getElementById('JSON-style').innerHTML = style;
	document.getElementById('JSON-style-printed').innerHTML = parse(document.getElementById('JSON-style').innerHTML,cssParser);
}

function changeJSStyle(js, keyword, string, parameter, function_call, comment){
	var style = ""+
		".js {"+"\n"+
		"	color: "+js+";"+"\n"+
		"}"+"\n"+
		".js .js-keyword {"+"\n"+
		"	color: "+keyword+";"+"\n"+
		"}"+"\n"+
		".js .js-string {"+"\n"+
		"	color: "+string+";"+"\n"+
		"}"+"\n"+
		".js .js-parameter {"+"\n"+
		"	color: "+parameter+";"+"\n"+
		"}"+"\n"+
		".js .js-function-name {"+"\n"+
		"	font-style: italic;"+"\n"+
		"}"+"\n"+
		".js .js-function-call {"+"\n"+
		"	color: "+function_call+";"+"\n"+
		"}"+"\n"+
		".js .js-comment {"+"\n"+
		"	color: "+comment+";"+"\n"+
		"}"+"\n"+
		"";
	document.getElementById('JS-style').innerHTML = style;
	document.getElementById('JS-style-printed').innerHTML = parse(document.getElementById('JS-style').innerHTML,cssParser);
}

/*http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript*/
function copyToClipboard(text){
	if (window.clipboardData && window.clipboardData.setData) {
		// IE specific code path to prevent textarea being shown while dialog is visible.
		return clipboardData.setData("Text", text);

	} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
		var textarea = document.createElement("textarea");
		textarea.textContent = text;
		textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
		document.body.appendChild(textarea);
		textarea.select();
		try {
			return document.execCommand("copy");  // Security exception may be thrown by some browsers.
		} catch (ex) {
			console.warn("Copy to clipboard failed.", ex);
			return false;
		} finally {
			document.body.removeChild(textarea);
		}
	}
}