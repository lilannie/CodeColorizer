

document.addEventListener('DOMContentLoaded', function(e){


	document.getElementById('code-input').addEventListener('input', function(e){

		displayResult(document.getElementById('code-input').value, document.getElementById('language-select').value)
	});
	document.getElementById('language-select').addEventListener('change', function(e){

		displayResult(document.getElementById('code-input').value, document.getElementById('language-select').value)
	});
	document.getElementById('copy').addEventListener('click', function(e){
		copyToClipboard(document.getElementById('result-pretty').innerHTML);
	});
});

function displayResult(input,language) {
	var parser = null;
	switch(language) {
		case "js":
			parser=jsParser;
			break;
		case "css":
			parser=cssParser;
			break;
		case "html":
			parser = htmlParser;
			break;
		case "php":
			parser = null;
			break;
		case "json":
			parser = jsonParser;
			break;
	}

	if(parser == null) return;
	document.getElementById('result-pretty').className = language;
	document.getElementById('result-pretty').innerHTML = parse(input, parser);
	document.getElementById('result-raw').innerHTML = parse(document.getElementById('result-pretty').innerHTML, htmlParser);
}

function parse(input, parser) {
	try {
		return parser.parse(input);
	} catch (e) {

	}
	return 'error';
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