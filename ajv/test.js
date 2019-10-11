const users = require('./test.json');

// schema validation keyword: https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md

const schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      fullname: {
        type: 'string',
        minLength: 2,
        maxLength: 10
      }
    }
  }
}

const Ajv = require('ajv')
const ajv = new Ajv()

const validate = ajv.compile(schema)
const valid = validate(users)

if (!valid) {
  console.log(validate.errors)
}
