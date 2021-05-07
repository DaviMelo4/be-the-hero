const crypto = require('crypto')
const connection = require('../database/connection')


module.exports = {

    /**
 * Lista as ongs cadastradas no banco de dados
 */
    async index(req,res){
        const ongs = await connection('ongs').select('*')
   
       return res.json(ongs)
   },

/**
 * Cadastra as ongs no DB
 */
    async create(req,res){
        const {name, email, whatsapp, city, uf} = req.body    

        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return res.json({id})
    }
}