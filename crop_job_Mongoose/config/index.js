
if(process.env.NODE_ENV !== 'production'){  // NODE_ENV valida el hambiente de trabajo
    require('dotenv').config(); // usa las variables de entorno del .env
}

module.exports = {
    MONGO_URI: process.env.MONGO_URI
}