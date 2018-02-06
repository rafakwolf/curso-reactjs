import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabeledInput from '../common/form/labeledInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'

class BillingCycleForm extends Component {

    render(){
        const { handleSubmit, readOnly, credits, debts } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabeledInput} readOnly={readOnly}
                        label='Nome' cols={'12 4'} placeholder='Informe o nome' />

                    <Field name='month' component={LabeledInput} readOnly={readOnly}
                        label='Mês' cols={'12 4'} placeholder='Informe o mês' type='number' />
                        
                    <Field name='year' component={LabeledInput} readOnly={readOnly}
                        label='Ano' cols={'12 4'} placeholder='Informe o ano' type='number' />

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