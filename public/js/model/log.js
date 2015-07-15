logModel = function(){
    var logData = {};

    this.getLogsByClientAndPage = function(force, start, end, cb){
        if (!cb) return;
        if (!start || !end) cb([]);
        if (!vars.clientId || vars.clientId === '') cb([]);

        if (logData[start + ':' + end] !== undefined && force === false) {
            cb(logData[start + ':' + end]);
        } else {
            ///logs/:clientId/:start/:end
            var url = '/logs/' + vars.clientId + '/' + start + '/' + end;

            $.get(url)
            .done(function(logs){
                logData[start + ':' + end] = logs;                                
                cb(logs);
            });
        }
    };

    this.getLatestLogLines = function(cb){
        if (!cb) return;
        if (!vars.clientId || vars.clientId === '') cb([]);

        function _mergeLogs(newLogs){
            var latestLogs = [];

            if (!newLogs || newLogs.length === 0) cb([]);

            for (var i=0; i<newLogs.length; i++){
                if (this.logs[page].indefOf( newLogs[i] ) ){
                    continue;
                } else {
                    latestLogs.push( newLogs[i] );
                    this.logs[page].push( newLogs[i] );
                }

                if (i ==  newLogs.length-1){
                    cb(newLogs);
                }
            }
        }

        var start = 0;
        var end = 10;

        ///logs/:clientId/:start/:end
        var url = '/logs/' + vars.clientId + '/' + start + '/' + end;

        $.get(url)
        .done(function(logs){
            _mergeLogs(logs);
        });

    };
};