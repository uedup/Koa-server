const {APP_PORT} = require('./config/config.default')
const app = require('./app/index')


app.use((ctx,next) => {
    ctx.body="whelcome !!!!!!!"
})

app.listen(APP_PORT, function () {
    console.log(`api server running at http://127.0.0.1:${APP_PORT}`)
  })