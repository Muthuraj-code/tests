const expect = require('chai').expect;
const MongoClient = require('mongodb').MongoClient;
const DB_URL = "mongodb://localhost:27017/test"; //Use mlab.com to get started without setting up mongo.
const {insertDB,countDocs}= require('./methods/method');
let docs=[{
    id:1,
    name:'docs1'
},
{
id:2,
name:'doc2'
}]
let collectios= 'Collection1';
describe('Finding the all the collectons',()=>{
    it('Insert collection into DB',(done)=>{
       
    const outPutinertDB = insertDB(collectios,docs);
    expect(outPutinertDB.acknowledged).to.equal(true);
    done();
    });

    it('Insert DB with No document',(done)=>{
        const output=insertDB();
        expect(output.acknowledged).to.equal(false);
        done();

    })
});

describe('getting count of collections',()=>{
const query1={
id=1
}
const query2={
    name:'doc2'
}
const query3={};
it('get count by one id',(done)=>{
    let count1=countDocs(collectios,query1);
    expect(count1).to.equal(1);
    let count2=countDocs(collectios,query2);
    expect(count2).to.equal(1);
    let count3 = countDocs(collectios,query3);
    expect(count3).to.equal(2);
    done();
})
})