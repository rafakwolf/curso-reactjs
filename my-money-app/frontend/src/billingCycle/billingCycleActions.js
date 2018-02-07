import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits:[{}], debts: [{}]}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

function submit(values, method) {
    console.log('método', method)
    return dispatch => {
        const id = method != 'post' ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init)
            })
            .catch(error => {
                const errors = error.response.data.errors || ['Algo de errado acounteceu.'] 
                errors.forEach(msg => toastr.error('Erro', msg))
            })        
    }   
}

export function create(values){
    return submit(values,'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showRemove(billingCycle){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}