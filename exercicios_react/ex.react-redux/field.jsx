import React, {Component} from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label>
                <br/>
                <input onChange={this.props.changeValue} value={this.props.value}/>
            </div>
        )
    }
}

function mapStateToPros(state){
    return {
        value: state.field.value
    }
}

function mapDispatchToPros(dispatch){
    return bindActionCreators({changeValue}, dispatch)
}

export default connect(mapStateToPros, mapDispatchToPros)(Field)