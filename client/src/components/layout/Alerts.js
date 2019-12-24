import React, { useContext, Fragment, useState } from 'react'
import AlertContext from '../../context/alert/alertContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const {alert} = alertContext
    return (
    <Fragment>
    <TransitionGroup>
    {alertContext.alert !== null && (
      <CSSTransition 
       timeout={500} classNames="item">
      <div  className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"/> {alert.msg}

      </div>
      </CSSTransition>
      

    )}
    </TransitionGroup>
    </Fragment>
    
  )

}

export default Alerts
