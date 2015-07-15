// Goal Keeper - wouterlucas.com
// Wouter van Boesschoten
// MIT

$('#goalKeeperVersion').html('0.1.0');

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function doReload() {
    window.location.reload(true);
}

if (($.support.ajax === true) && ($.support.cors === false) && window.XDomainRequest) {
    //enable cors for ie8
    console.log('Ajax is true, cors is false and window.XDomainRequest is present. Trying to override jQuery cors support (are we on IE8?)');
    $.support.cors = true;
}

var vars = {
    clientId: localStorage.getItem('clientId')
};

if (vars.clientId) {
    $('#selectedClientId').html(vars.clientId);
} else {
    $('#selectedClientId').html('No client selected');
}

/****************************** Model ********************************/

var clients = new clientsModel();
var logs = new logModel();

/****************************** Routes ********************************/

var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'logs': 'logs',
        'logs/:start/:end': 'logsByPage',
        'rules': 'rules',
        'activeClients' : 'activeClients',
        'registeredClients': 'registeredClients',
    }
});

var router = new Router();

router.on('route:home', function() {
    console.log('router: Homepage');
    homepageView.render();
});

router.on('route:activeClients', function(){
    console.log('router: activeClients');
    activeClientsView.render();
});

router.on('route:registeredClients', function(){
    console.log('router: registeredClients');
    registeredClientsView.render();
});

router.on('route:logs', function(){
    console.log('router: logs');
    logView.render(undefined, undefined);
});

router.on('route:logsByPage', function(start, end){
    console.log('router: log by page start: ' + start + ' end: ' + end);
    logView.render(start, end);
});

router.on('route:rules', function(){
    console.log('router: rules');
    rulesView.render();
});

Backbone.history.start();