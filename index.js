const express = require('express')
const www = express()

www.use(express.static('client'))
www.listen(80)
