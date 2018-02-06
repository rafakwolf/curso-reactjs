import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showRemove } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount(){
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(item => (           
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td className="table-actions">
                    <button className="btn btn-warning" style={{marginRight: 5}}
                        onClick={()=> this.props.showUpdate(item)}>
                        <i className="fa fa-pencil"></i>    
                    </button>

                    <button className="btn btn-danger"
                        onClick={()=> this.props.showRemove(item)}>
                        <i className="fa fa-trash-o"></i>    
                    </button>

                </td>
            </tr>               
        ))
    }    

    render () {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToPros = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showRemove}, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(BillingCycleList)