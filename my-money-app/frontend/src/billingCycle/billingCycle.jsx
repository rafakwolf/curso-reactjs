import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import BillingCycleList from './billingCycleList'
import Form from './billingCycleForm'
import { init, create, update, remove } from './billingCycleActions'

class BillingCycle extends Component {

    componentWillMount(){
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader titulo="Ciclo de Pagamentos" subtitulo="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader icon="bars" label="Listar" target="tabList" />
                            <TabHeader icon="plus" label="Incluir" target="tabCreate" />
                            <TabHeader icon="pencil" label="Alterar" target="tabUpdate" />
                            <TabHeader icon="trash-o" label="Excluir" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id="tabCreate"> 
                              <Form onSubmit={this.props.create} submitLabel="Incluir" submitClass="primary" />  
                            </TabContent>
                            <TabContent id="tabUpdate"> 
                                <Form onSubmit={this.props.update} submitLabel="Alterar" submitClass="info" />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitLabel="Excluir" submitClass="danger" />  
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch) 

export default connect(null, mapDispatchToProps)(BillingCycle)