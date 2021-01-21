const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
    async login (req, res){
        const {password, email, islogged} = req.body
        const user = await User.findOne({where: {email}})

        if (!user){
            return res.status(400).send({
                status: 0,
                mensage: 'E-Mail ou Senha Incorreta'
            })
        }

        if (!bcrypt.compareSync(password, user.password)){
            return res.status(400).send({
                status: 0,
                mensage: 'E-Mail ou Senha Incorreta'
            })
        }

        const user_id = user.id

        await User.update({
            islogged
        }, {
            where: {
                id: user_id
            }
        })

        user.password = undefined

        return res.status(200).send({
            status: 1,
            mensage: 'Usuário, logado com sucesso!',
            user
        })
    },

    async index(req, res) {
        const users = await User.findAll();
        
        if (users == "" || users == null) {
            return res.status(200).send({mensage: "Nenhum usuário cadastrado"})
        }

        return res.status(200).send({users})
    },

    async store(req, res) {
        const {name, password, email} = req.body;
        const user = await User.create({name, password, email})
        return res.status(200).send({
            status: 1,
            mensage: 'Usuário cadastrado com sucesso',
            user
        })
    },

    async update(req, res) {
        const {name, password, email} = req.body;
        const {user_id} = req.params;

          await bcrypt.genSalt(10, function(err, salt){
                    bcrypt.hash(password, salt, function(err, hash){
                        const password = hash
                        User.update({
                            name, password, email
                        }, {
                            where: {
                                id: user_id
                            }
                        })
                        return res.status(200).send({
                            status: 1,
                            mensage: 'Usuário atualizado com sucesso'
                        })
                    })
            })
    },

    async delete(req, res) {
        const {user_id} = req.params;

        await User.destroy({
            where: {
                id: user_id
            }
        })
        return res.status(200).send({
            status: 1,
            mensage: 'Usuário deletado com sucesso'
        })
    }

}