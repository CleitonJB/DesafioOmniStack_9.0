const User = require('../models/User');

/*

index, show, store, update, destroy

index: Retorna uma listagem de sessões;
show: Retorna apenas uma sessão;
store: Criação de uma sessão;
update: Alteração de uma sessão;
destroy: Remover/deltar uma sessão;
*/

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
           user = await User.create({ email });
        }

        return res.json(user);
    }
};