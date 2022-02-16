const User = require('../model/user.model')

class UserService {
    async createUser(user_name, password) {
      // todo: 写入数据库

      const res = await User.create({ user_name, password })
      return res.dataValues
    }
    async getUserInfo({id,user_name,password,is_admin}){
      const whereOps = {}
      id && Object.assign(whereOps,{id})
      user_name && Object.assign(whereOps,{user_name})
      password && Object.assign(whereOps,{password})
      is_admin && Object.assign(whereOps,{is_admin})
      
      const res = await User.findOne({
        attributes:["id","user_name","password","is_admin"],
        where:whereOps
      })

      return res?res.dataValues:null
    } 
  }
  
  module.exports = new UserService()