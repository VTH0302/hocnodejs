const db = require('../common/db');
let sql;
const info = function(info){
    this.id = info.id;
    this.name = info.name;
    this.facebook = info.facebook;
    this.email = info.email;
}

info.get_all = function (result){
    db.query("SELECT * FROM Customers", function(err, info){
        if(err){
            result(null);
        } else{
            result(info);
        }
    });
}

info.getById = function (id, result){
    db.query("SELECT * FROM Customers WHERE id=?", id, function(err, info){
        if(err || info.length==0){
            result(null);
        } else{
            result(info[0]);
        }
    });
}

info.create = function (data, result){
    db.query("INSERT INTO Customers Set ?", data , function(err, info){
        if(err){
            result(null);
        } else{
            result({id: info.insertId, ...data});
        }
    })
}

info.remove = function (id, result) {
    db.query("DELETE FROM Customers WHERE id = ?", id , function(err, info){
        if(err){
            result(null);
        } else{
            result("Xoa info co id"+ id + "thanh cong");
        }
    });
}


info.update = function(data, result){
    db.query("UPDATE Customers SET name=?,facebook=?,email=? WHERE id=?", [data.name,data.facebook,data.email,data.id] ,function(err, info){
        if(err){
            result(null);
        }
        else{
            result(data);
        }
    });
}
module.exports = info;