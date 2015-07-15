/****************************** Model ********************************/

var Root = Backbone.Model.extend({
    url: '/',
});

//I know, we shouldn't be doing this. After the override we should write it to a proper backbone model
//unfortunately I do not have time for that, therefor we fake it.
var Dummy = Backbone.Model.extend({
    url: '/'
});