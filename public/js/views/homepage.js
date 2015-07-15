HomepageView = Backbone.View.extend({
    el: '#main',
    events: {
        'click .save': 'save',
        'click .showActive': 'showActive',
        'click .showRegistered': 'showRegistered'
    },
    save: function(ev) {
        var clientId = $('#clientId').val();
        
        if (clientId !== ''){
            vars.clientId = clientId;
            localStorage.setItem('clientId', clientId);            
            window.location.reload(true);
        } else {
            alert('Client Id must have a non-empty value');
        }        
    },
    showActive : function(){
        router.navigate('#/activeClients');
    },
    showRegistered : function(){
        router.navigate('#/registeredClients');
    },
    render: function() {
        var that = this;

        $.get('templates/home.html', function(html) {
            var template = _.template(html, {
                vars: vars,
                registeredClients: [],
                activeClients: [],
                'root': null,
                'err': null
            });
            that.$el.html(template);

            clients.getRegisteredClients(function(registeredClients){
                $('#registeredClients').html(registeredClients.length);
            });

            clients.getActiveClients(function(activeClients){
                $('#activeClients').html(activeClients.length);
            });
        });

    }
});

var homepageView = new HomepageView();