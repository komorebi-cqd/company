const middleware = {}

middleware['metaTitle'] = require('..\\middleware\\metaTitle.js')
middleware['metaTitle'] = middleware['metaTitle'].default || middleware['metaTitle']

export default middleware
