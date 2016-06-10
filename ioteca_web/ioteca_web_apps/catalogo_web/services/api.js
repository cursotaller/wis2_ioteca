angular.module('app')

    .factory("API", function($resource, config_catalogo) {
    var url = config_catalogo.catalogoUrl;
    return {
        Categoria: $resource(url + "categorias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),
    };
});
