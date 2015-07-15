clientsModel = function(){
    this.activeClients;
    this.registeredClients;
    this.clientInfo;

    this.getActiveClients = function(cb){
        if (!cb) return;

        if (this.activeClients === undefined){
            $.get('/activeClients')
            .done(function(activeClients){
                this.activeClients = activeClients;
                cb(activeClients);
            });
        } else {
            cb(activeClients)
        }
    }

    this.getRegisteredClients = function(cb){
        if (!cb) return;

        if (this.registeredClients === undefined){
            $.get('/registeredClients')
            .done(function(registeredClients){
                this.registeredClients = registeredClients;
                cb(registeredClients);
            });
        } else {
            cb(registeredClients);
        }
    }

    this.getInfoByClientId = function(id, cb){
        if (!cb) return;

        $.get('/client/' + id)
        .done(function(clientInfo){
            if (clientInfo === null){
                clientInfo = {
                    requestRegExpList : [],
                    responseRegExpList : []
                };
            }

            clientInfo.requestRegExpList = JSON.parse(clientInfo.requestRegExpList);
            clientInfo.responseRegExpList = JSON.parse(clientInfo.responseRegExpList);
            this.clientInfo = clientInfo;

            cb(clientInfo);
        });

    }

    this.addNewRule = function(clientId, newRule, cb){
        /*
         *     requestRegExpList: [{ regExp : 'abc', regExpMap : nameOfProgram } , {..}]
         *     responseRegExpList : [{ regExp : 'abc', regExpMap : nameOfProgram }, {...}],
         *     nameOfProgram: 'code'
         */   
        function _addRule(){
            if (newRule.type == 'request'){
                this.clientInfo.requestRegExpList.push({ regExp : newRule.regExp, regExpMap : newRule.nameOfProgram });
            } else if (newRule.type == 'response'){
                this.clientInfo.responseRegExpList.push({ regExp : newRule.regExp, regExpMap : newRule.nameOfProgram });
            }

            console.log('sending clientinfo: ' + JSON.stringify(this.clientInfo)); 

            $.ajax({
              method: 'PUT',
              contentType: 'application/json',
              url: '/client/' + vars.clientId,
              data: JSON.stringify(clientInfo)
            })
            .done(function( msg ) {
                cb(true);
            });
        }

        if (this.clientInfo == undefined) {
            this.getInfoByClientId(clientId, function(){
                _addRule();
            });
        } else {
            _addRule();
        }
    }

    this.saveProgram = function(clientId, nameOfProgram, code, cb){
        $.ajax({
            method: 'PUT',
            contentType: 'application/javascript',
            url: '/client/' + clientId + '/addProgram/' + nameOfProgram,
            data : code
        })
        .done(function(msg){
            cb();
        });
    }

    this.deleteProgram = function(clientId, nameOfProgram, cb){
        $.ajax({
            method: 'DELETE',
            url: '/client/' + clientId + '/removeProgram/' + nameOfProgram,
        })
        .done(function(msg){
            cb();
        });
    }

    this.deleteRule = function(clientId, type, name, cb){
        /*
         *     requestRegExpList: [{ regExp : 'abc', regExpMap : nameOfProgram } , {..}]
         *     responseRegExpList : [{ regExp : 'abc', regExpMap : nameOfProgram }, {...}],
         *     nameOfProgram: 'code'
         */   

        function _findRule(clientInfo){
            var arrayToBeInspected;

            if (type == 'request'){
                arrayToBeInspected = clientInfo.requestRegExpList;
            } else if (type == 'response'){
                arrayToBeInspected = clientInfo.responseRegExpList;
            }

            if (arrayToBeInspected == undefined || arrayToBeInspected.length == 0) cb(false);

            for (var i=0; i<arrayToBeInspected.length; i++){
                var programName = arrayToBeInspected[i].regExpMap;

                if (programName == name){
                    _deleteRuleAtIndex(clientInfo, type, i);
                    break;
                }
            }
        }

        function _deleteRuleAtIndex(clientInfo, type, index){
            if (type == 'request'){
                clientInfo.requestRegExpList.splice(index, 1);
            } else if (type == 'response'){
                clientInfo.responseRegExpList.splice(index, 1);
            }

            console.log('sending clientinfo: ' + JSON.stringify(clientInfo)); 

            $.ajax({
              method: 'PUT',
              contentType: 'application/json',
              url: '/client/' + vars.clientId,
              data: JSON.stringify(clientInfo)
            })
            .done(function( msg ) {
                cb(true);
            });            
        }

        if (this.clientInfo == undefined) {
            this.getInfoByClientId(clientId, function(clientInfo){
                _findRule(clientInfo);
            });
        } else {
            _findRule(this.clientInfo);
        }
    }
}