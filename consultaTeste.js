var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
let senha = '123teste123'
let login = 'testeiro'
    // ObjectID de algum contato existente
var _idProcurado = new ObjectID('5dbafcb7ac3e78c6eab8c292');
let uri = `mongodb+srv://${login}:${senha}@teste-j0o3k.mongodb.net/test?retryWrites=true&w=majority`
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
    function(erro, db) {
        if (erro) {
            console.log(erro)
            return
        }
        db.db('testeApi').collection('contato').findOne({ _id: _idProcurado },
            function(erro, contato) {
                if (erro) throw erro;
                console.log(contato);
            }
        );
        db.close();
    }
);