Package.describe({
	name: "mrt:url",
	summary: "url npm library wrapped in meteor",
	author: "Daniel Qiu",
	version: "0.0.3",
	git: "https://github.com/danielqiu/meteor-url.git"
});

Package.on_use(function(api){
	api.versionsFrom('1.0');

	api.add_files(['url.js'], 'server');
	
	api.export('url', 'server');
});

Npm.depends({url: "0.10.1"});

