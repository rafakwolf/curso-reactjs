module.exports = function(req, res, next){
    res.header('Access-Controll-Allow-Origin', '*')
    res.header('Access-Controll-Allow-Methods', 'GET, POST, OPTIONS, PATH, PUT, DELETE')
    res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}