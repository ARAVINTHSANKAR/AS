var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var insertDocuments = function (db, callback) {
    var collection = db.collection('admins');
    collection.insertMany([
        { a: 1 }, { a: 2 }
    ], function (err, result) {
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};
function callback(res) {
    console.log(res, "XXXXXXXX");
}
var DbClient = /** @class */ (function () {
    function DbClient() {
        this.url = 'mongodb://localhost:27017';
        this.dbName = 'TestAdmin';
        // public dbDisconnect(): any {
        // }
    }
    DbClient.prototype.dbConnect = function (url, dbName) {
        MongoClient.connect(url, function (err, client) {
            console.log("Connected successfully");
            var db = client.db(dbName);
            insertDocuments(db, callback);
            client.close();
        });
    };
    return DbClient;
}());
var dbObj = new DbClient();
dbObj.dbConnect(dbObj.url, dbObj.dbName);
