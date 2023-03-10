async function principal(req, res) {
    res.render('principal')
}
async function login(req, res) {
    res.render('login')
}
async function cardapio(req, res) {
    res.render('cardapio')
}
async function almoco(req, res) {
    res.render('almoco')
}
async function contatos(req, res) {
    res.render('contatos')
}
async function detalhar(req, res) {
    res.render('detalhar')
}
async function noticias(req, res) {
    res.render('noticias')
}


module.exports = {
    principal,
    login,
    cardapio,
    almoco,
    contatos,
    detalhar,
    noticias
}