RulesView = Backbone.View.extend({
    el: '#main',
    events: {
        'click .register' : 'register',
        'click .edit' : 'edit',
        'click .delete' : 'delete'
    },
    register: function(){
        newRuleView.render();
    },
    edit: function(ev){
        var name = $(ev.currentTarget).data('name');
        if (name !== ''){
            newRuleView.render(name);
        }    
    },
    delete: function(ev){
        var name = $(ev.currentTarget).data('name');
        var type = $(ev.currentTarget).data('type');
        if (name !== '' && type !== ''){
            clients.deleteProgram(vars.clientId, name, function(){
                clients.deleteRule(vars.clientId, type, name, function(){
                    rulesView.render();
                });
            });
        }           
    },
    render: function(start, end) {
        var that = this;

        clients.getInfoByClientId(vars.clientId, function(clientInfo){
            if (clientInfo === null){
                clientInfo = undefined;
            }

            $.get('templates/rules.html', function(html) {
                var template = _.template(html, {
                    clientId : vars.clientId,
                    clientInfo : clientInfo
                });

                that.$el.html(template);
            });
        });
    }
});

var rulesView = new RulesView();