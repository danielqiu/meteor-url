Package.describe({
	summary: "url npm library wrapped in meteor"
});

Npm.depends({url: "0.10.1"});

Package.on_use(function(api){
	api.add_files(['url.js'], 'server', 'client');
	if(api.export)
		api.export('url');
});
