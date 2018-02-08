import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabeledInput from '../common/form/labeledInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v

        let listOfCredits = 
            (this.props.credits && this.props.credits.length > 0) ? this.props.credits : [{}] 
        
        let listOfDebts = 
            (this.props.debts && this.props.debts.length > 0) ? this.props.debts : [{}]      

        return {
            sumOfCredits: listOfCredits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: listOfDebts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabeledInput} readOnly={readOnly}
                        label='Nome' cols={'12 4'} placeholder='Informe o nome' />

                    <Field name='month' component={LabeledInput} readOnly={readOnly}
                        label='Mês' cols={'12 4'} placeholder='Informe o mês' type='number' />
                        
                    <Field name='year' component={LabeledInput} readOnly={readOnly}
                        label='Ano' cols={'12 4'} placeholder='Informe o ano' type='number' />

                    <Summary credit={sumOfCredits} debt={sumOfDebts} />    

                    <ItemList cols={'12 6'} readOnly={readOnly}
                        list={credits} legend='Créditos' field='credits' />    

                    <ItemList cols={'12 6'} readOnly={readOnly}
                        list={debts} legend='Débitos' field='debts' showStatus={true} />                          
                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className="btn btn-default" style={{marginLeft: 5}}
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)