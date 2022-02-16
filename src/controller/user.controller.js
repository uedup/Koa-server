const {createUser,getUserInfo} =  require('../service/user.service')

class UserController{
    async register(ctx,next){
        // 1. 获取数据
        // console.log(ctx.request.body)
        const { user_name, password } = ctx.request.body

        if(!user_name || !password){
          ctx.status = 400
          ctx.body = {
            code: 10001,
            message: '用户名或密码为空',
            result: '',
          }
          return 
        }
        if(await getUserInfo({user_name})){
          ctx.status = 409 //MDN 响应码
          ctx.body = {
            code: 10002,
            message: '用户名已经存在',
            result: '',
          }
          return 
        }

        // 2. 操作数据库
        const res = await createUser(user_name, password)
        // console.log(res)
        // 3. 返回结果
        ctx.body = {
            code: 0,
            message: '用户注册成功',
            result: {
              id: res.id,
              user_name: res.user_name,
            },
          }
    }
    
    async login(ctx,next){
        ctx.body = "登陆成功"
    }

}

module.exports = new UserController()