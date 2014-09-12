Package.describe({
	name: "mrt:url",
	summary: "url npm library wrapped in meteor",
	author: "Daniel Qiu",
	version: "0.0.2",
	git: "https://github.com/danielqiu/meteor-url.git"
});

Npm.depends({url: "0.10.1"});

Package.on_use(function(api){
	api.versionsFrom('METEOR@0.9.1.1');

	api.add_files(['url.js'], 'server', 'client');
	
	if(api.export)
		api.export('url');
});
