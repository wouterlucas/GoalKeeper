RegisteredClientsView = Backbone.View.extend({
    el: '#main',
    events: {
        'click .select': 'selectClient'
    },
    selectClient: function(ev){
        var clientId = $(ev.currentTarget).data('clientid');
        if (clientId !== ''){
            vars.clientId = clientId;
            localStorage.setItem('clientId', clientId);            
            window.location.reload(true);
        } else {
            alert('Client Id must have a non-empty value');
        }             
    },
    render: function() {
        var that = this;
        clients.getRegisteredClients(function(registeredClients){
            $.get('templates/clientList.html', function(html) {
                var template = _.template(html, {
                    clients : registeredClients
                });

                that.$el.html(template);
            });
        });
    }
});

var registeredClientsView = new RegisteredClientsView();