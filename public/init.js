//LABjs loader script, to async load all require modules
$LAB
//frameworks
	.script('js/vendor/jquery-2.0.3.min.js')
    .script('js/vendor/lodash.compat.min.js')
    .script('js/vendor/backbone-min.js')
    .script('js/vendor/bootstrap.min.js')
    .script('js/vendor/jquery.base64.js')
//model
	.script('js/model/clients.js')
    .script('js/model/log.js')
//views
    .script('js/views/homepage.js')
    .script('js/views/activeClients.js')
    .script('js/views/registeredClients.js')
    .script('js/views/log.js')
    .script('js/views/rules.js')
    .script('js/views/newRule.js')
//main
	.script('js/plugins.js').wait()
    .script('js/main.js').wait();