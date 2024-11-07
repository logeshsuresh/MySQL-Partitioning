const envSchema = require('env-schema');

const schema = {
  type: 'object',
  required: ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'PORT', 'LOG_LEVEL'],
  properties: {
    DB_HOST: {
      type: 'string',
      default: '127.0.0.1'
    },
    DB_PORT: {
      type: 'integer',
      default: 3306
    },
    DB_USER: {
      type: 'string'
    },
    DB_PASSWORD: {
      type: 'string'
    },
    DB_NAME: {
      type: 'string'
    },
    PORT: {
      type: 'integer',
      default: 4005
    },
    LOG_LEVEL: {
      type: 'string',
      default: 'info'
    }
  }
};

const env = envSchema({ schema: schema, dotenv: true });

module.exports = env;