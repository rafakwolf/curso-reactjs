const express = require('express')

module.exports = function(server){
    
    // base
    const router = express.Router()
    server.use('/api', router)

    // ciclos de pagamentos
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}