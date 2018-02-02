import axios from 'axios'

const url = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${url}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}