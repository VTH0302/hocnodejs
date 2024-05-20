module.exports = function(router){
    var infoController = require('../controllers/info.controller');

    router.get('/info/list', infoController.get_list);

    router.get('/info/details/:id', infoController.details);

    router.post('/info/add', infoController.add_info);

    router.delete('/info/delete/:id', infoController.remove_info);

    router.put('/info/update', infoController.update_info);
}
