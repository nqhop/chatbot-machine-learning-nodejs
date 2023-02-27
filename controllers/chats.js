let request = require('request-promise');

exports.getChat = (req, res, next) => {
    res.render('index');
}

async function myChatbot(candidate) {

    let options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/chatbot',
        body: candidate,
        json: true
    };

    let result;
    let sendrequest = await request(options)
        .then(function (parsedBody) {
            console.log(parsedBody);

            result = parsedBody['result'];
        })
        .catch(function (err) {
            console.log(err);
        });
    return result;
}

exports.partial = (req, res, next) => {
    console.log('In exports partial');
    const query = req.query.candidate;
    console.log('candidate: ', query);

    async function myFunction(query) {
        let result = await myChatbot(query);
        console.log('result in async await', result);
        res.send(result);
    }
    myFunction(query);
    console.log('end of partial');
}