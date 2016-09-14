

module.exports = {

	structure : {},

	getStructure:function() {

		var ordered = {};
		var unordered =  this.structure;

		Object.keys(unordered).sort().forEach(function(key) {
			ordered[key] = unordered[key];
		});
		return ordered;
	},

	log:function( url,controller,view,layout ){

		this.structure[url] = {
			url: url,
			controller: controller,
			view: view,
			layout: layout
		};

	}

};
