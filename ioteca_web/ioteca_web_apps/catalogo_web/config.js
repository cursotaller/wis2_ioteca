
var catalogoUrl = 'http://localhost:8000/api/catalogo/';


var config = {
    
    catalogoUrl: catalogoUrl,


};

angular.module('app')

.value('config_catalogo', config);
