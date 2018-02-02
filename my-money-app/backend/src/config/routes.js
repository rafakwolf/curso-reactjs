const express = require('express')

module.exports = function(server){
    // Base
    const router = express.Router()
    server.use('/api', router)

    // Ciclos de pagamentos
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}