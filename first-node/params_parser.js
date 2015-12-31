function parse(req) {
	var arreglo_parametros= [], parametros = {};
		if (req.url.indexOf("?")>0){
		// /?nombre=lenin
		var url_data = req.url.split("?");
		var arreglo_parametros = url_data[1].split("&");
	}

		for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
		var parametro = arreglo_parametros[i];
		var param_data = parametro.split("=");
		parametros[param_data[0]]= param_data[1];
	};

return parametros;
}

function render(html_string, parametros){
	var nombre="";
	var variables= html_string.match(/[^\{\}]+(?=\})/g);

	for (var i = variables.length - 1; i >= 0; i--) {
		var value= eval(variables[i]);
		var variable = variables[i];
		html_string = html_string.replace("{"+variables[i]+"}",parametros[variables[i]]);	
	};

	return html_string;

}

module.exports.parse= parse;
module.exports.render= render;