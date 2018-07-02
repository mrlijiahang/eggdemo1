const Controller = require('egg').Controller
class PostController extends Controller {
  async index() {
    this.ctx.body = await this.service.post.findAll()
  }
  async create() {
    let post = {
      name: 'lijiahang',
      pwd: '456'
    }
    await this.service.post.create(post)
    this.ctx.body = '增加字段{name:lijiahang,pwd:456}'
    console.log(post)
  }
  async find() {
    let msg = {
      name: 'lijiahang'
    }
    this.ctx.body = await this.service.post.find(msg)
  }
  async del() {
    this.ctx.body = '删除字段lijiahang'
    await this.service.post.del()
    console.log(this.service.post.del())
  }
  async find1() {
    const {
      ctx,
      service
    } = this
    const createRule = {
      title: {
        type: 'string'
      },
      content: {
        type: 'string'
      }
    }
    // ctx.validate(createRule)
    console.log(ctx)
    console.log(222)
    ctx.request.header.cookie = 1233
    ctx.body = ctx
    ctx.status = 201

  }
}
module.exports = PostController