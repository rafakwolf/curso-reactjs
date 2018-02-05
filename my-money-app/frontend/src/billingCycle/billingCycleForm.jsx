import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabeledInput from '../common/form/labeledInput'
import { init } from './billingCycleActions'

class BillingCycleForm extends Component {

    render(){
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabeledInput} 
                        label='Nome' cols={'12 4'} placeholder='Informe o nome' />
                    <Field name='month' component={LabeledInput}
                        label='Mês' cols={'12 4'} placeholder='Informe o mês' type='number' />
                    <Field name='year' component={LabeledInput}
                        label='Ano' cols={'12 4'} placeholder='Informe o ano' type='number' />
                </div>
                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Salvar</button>
                    <button type='button' className="btn btn-default" style={{marginLeft: 5}}
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)