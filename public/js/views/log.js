LogView = Backbone.View.extend({
    el: '#main',
    events: {
        'click .prev' : 'prev',
        'click .next' : 'next'
    },
    prev: function(){
        if (vars.start <= 0) return;
        this.render(vars.start-50, vars.end-50 );
    },
    next: function(){
        this.render(vars.start+50, vars.end+50 );
    },    
    render: function(start, end) {
        var that = this;

        if (start === undefined) start=0;
        if (end === undefined) end=50;

        vars.start = start;
        vars.end = end;

        clients.getActiveClients(function(activeClients){
            $.get('templates/logs.html', function(html) {
                var template = _.template(html, {
                    clientId : vars.clientId,
                    start : start,
                    end : end,
                    logs : undefined
                });

                that.$el.html(template);

                logs.getLogsByClientAndPage(vars.clientId, start, end, function(result){
                    if (!result) return;

                    var template = _.template(html, {
                        clientId : vars.clientId,
                        start : start,
                        end : end,
                        logs : result
                    });

                    that.$el.html(template);

                });
            });
        });
    }
});

var logView = new LogView();