// import * as server from '../util/server';
import server = require('../util/server');
import * as companyEntity from '../models/company';

var companyModel = new companyEntity();

const dbConfig: any = server.openConnection();

const insertDocuments = function(db: any, data: companyModel, callback: any) {
    const collection = db.collection('admins');
    collection.insert([
      
    ], function(err : any, result: any) {
      callback(result);
    });
}

var data;

insertDocuments(dbConfig, data, function(err: any, db: any) {
    if(err) {
        console.log("Data insertion failed");
    } else {
        console.log("Data inserted")
    }
});

function callback(res: any) {
    console.log(res);
}
