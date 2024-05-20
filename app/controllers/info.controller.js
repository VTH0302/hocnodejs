const info = require('../models/info.model');
exports.get_list = function(req, res){
    info.get_all(function(data){
        res.send({result:data});
    });
}

exports.details = function(req, res){
    info.getById(req.params.id, function(response){
        res.send({result:response});
    });
    
}

exports.add_info = function(req, res){
    var data = req.body;
    info.create(data, function(response){
        res.send({result:response});
    });
}

exports.remove_info = function(req, res){
    var id = req.params.id;
    info.remove(id, function(response){
        res.send({result:response});
    });
};

exports.update_info = function(req, res){
    var data = req.body;
    info.update(data, function(response){
        res.send({result:response});
    });
};