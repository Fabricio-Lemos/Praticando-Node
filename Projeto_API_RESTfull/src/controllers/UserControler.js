const User = require('../models/User')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

function genereteToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 78300,
    })
}
module.exports = {
    async logout (req, res){
        const islogged = 0
        const id = req.params.user_id

        const user = await User.findOne({where: {id}})

        if(!user){
            return res.status(400).send({
                status: 0,
                mensage: 'Usuário não encontrado'
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

        return res.status(200).send({
            status: 1,
            mensage: 'Usuário deslogado com sucesso',
        })
    },
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

        const token = genereteToken({id: user.id})

        return res.status(200).send({
            status: 1,
            mensage: 'Usuário, logado com sucesso!',
            user, token
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
        const token = genereteToken({id: user.id})
        return res.status(200).send({
            status: 1,
            mensage: 'Usuário cadastrado com sucesso',
            user, token
        })
    },

    async update(req, res) {
        const {name, password, email} = req.body;
        const {user_id} = req.params;

          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
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
                    mensage: 'Usuário atualizado com sucesso',
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

}//68.468.741.684.614.648.416.813.684.136.456.987.697.542.431.564.364.236.542.646.543.543.564.985.641.364.165.476.675.471.457.165.473.676.546.766.175.461.765.646.165.847.937.487.635.489.168.759.478.196.587.493.796.478.391.769.549.265.979.789.978.797.897,89