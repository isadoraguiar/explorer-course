const AppError = require('../utils/AppError')
const knex = require('../database/knex')
const { hash, compare } = require('bcryptjs')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    if (!password) throw new AppError('Senha é obrigatorio')

    const checkUser = await knex('users').where({ email }).first()

    if (checkUser) throw new AppError('Email já em uso')

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({ name, email, password: hashedPassword })

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const { id } = request.params

    const user = await knex('users').where({ id }).first()

    if (!user) throw new AppError('User not found')

    const userWithEmail = await knex('users').where({ email }).first()

    if (userWithEmail && userWithEmail.id !== user.id) {
      throw new AppError('Email já em uso')
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password)
      throw new AppError('é preciso informar a senha antiga')

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) throw new AppError('Senha antiga não confere')

      user.password = await hash(password, 8)
    }

    const updated_at = knex.fn.now()

    await knex('users')
      .update({
        name: user.name,
        email: user.email,
        password: user.password,
        updated_at
      })
      .where({ id: user.id })

    return response.json()
  }
}

module.exports = UsersController
