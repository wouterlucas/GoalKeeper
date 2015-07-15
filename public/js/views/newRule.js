NewRuleView = Backbone.View.extend({
    el: '#main',
    events: {
        'click .setType' : 'setType',
        'click .setRegExp' : 'setRegExp',
        'click .startOver' : 'startOver',
        'click .setName' : 'setName',
        'click .validateAndSaveRule' : 'validateAndSaveRule',
    },
    startOver: function(){
        console.log('Starting over, resetting everything');

        $('.ruleTypeDiv').hide();
        $('.regExpDiv').hide();
        $('.setNameDiv').hide();
        $('.codeDiv').hide();
        $('.startOver').addClass('hidden');

        //reset object
        this.newRule = {};

        // reset inputs
        $('#regExp').val('');
        $('#name').val('');
        $('#code').val('//your code goes here \n done(); //indicate that you are done with the changes');

        //show first form
        $('.ruleTypeDiv').fadeIn();
    },
    setType: function(){
        $('.regExpDiv').fadeIn();
        $('.ruleTypeDiv').hide();
        $('.startOver').removeClass('hidden');
        //$('#ruleType').prop({ 'disabled' : true});

        //get type
        var selectedTypeIdx = $('#ruleType')[0].selectedIndex;

        var lookUp = {
            0 : 'request',
            1 : 'response'
        };

        this.newRule[ 'type' ] = lookUp[ selectedTypeIdx ];
        console.log('selected Type');
        console.log(this.newRule);
    },
    setRegExp: function(){
        //$('#regExp').prop({ 'disabled' : true });
        //$('.setRegExp').addClass('disabled');
        var regExp = $('#regExp').val();

        if (regExp == '') {
            alert('Please fill in a non-empty value');
            
        } else {
            $('.regExpDiv').hide();
            $('.setNameDiv').fadeIn();


            this.newRule[ 'regExp' ] = regExp;
            console.log('setted RegExp');
            console.log(this.newRule); 
        }
    },
    setName: function(){

        var name = $('#name').val();

        if (name == ''){
            alert('Please fill in a non-empty value');
        } else {
            //TBD check uniqueness of the name...

            $('.setNameDiv').hide();
            $('.codeDiv').fadeIn();

            this.newRule[ 'nameOfProgram' ] = name;
            console.log('setted name');
            console.log(this.newRule);
        }
    },
    validateAndSaveRule: function(){
        var code = $('#code').val();
        var done = function(){ this.ended=true; }
        var request = {
            method : 'GET',
            url : '/a/b',
            body : {}
        }
        var response = {
            statusCode : 200,
            body : {}
        }     

        function saveCodeAndRules(newRule, code){            
            $('.codeDiv').hide();
            $('.pleaseWaitDiv').fadeIn();

            console.log('sending add program: ' + code); 
            clients.saveProgram(vars.clientId, newRule.nameOfProgram, code, function() {
                clients.addNewRule(vars.clientId, newRule, function(){
                    rulesView.render();
                });
            });
        }

        console.log(this.newRule);

        if (code != undefined || code != ''){
            try {
                eval(code);
            } catch(e){
                alert('Error in your program: ' + e);
                return;
            }

            saveCodeAndRules(this.newRule, code);
        }
    },
    render: function(name) {
        var that = this;
        this.newRule = {};       

        function _renderTemplate(clientInfo){
            $.get('templates/newrule.html', function(html) {
                var template = _.template(html, {
                    clientId : vars.clientId,
                    clientInfo : clientInfo
                });

                that.$el.html(template);
            });
        }

        clients.getInfoByClientId(vars.clientId, function(clientInfo){
            this.clientInfo = clientInfo;
            _renderTemplate(clientInfo);
        });
    }
});

var newRuleView = new NewRuleView();