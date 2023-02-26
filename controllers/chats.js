exports.getChat = (req, res, next) =>{
    res.render('index');
}

exports.partial = (req, res, next) =>{
    console.log('In exports partial');
    const query = req.query.candidate;
    console.log('candidate: ', query);

    // res.render('partial', {result: 'result'});
    res.send(query);
}