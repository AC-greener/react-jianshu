import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators }from './store/index'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
class Login extends PureComponent {

  render() {
    const { loginStatus} = this.props;
    if(!loginStatus) {
      return (
        <LoginWrapper >
          <LoginBox className='animated bounceInRight'>
            <Input placeholder='用户名*' innerRef={(input) => {this.account = input}} />
            <Input placeholder='密码*' type='password' innerRef={(input) => {this.password= input}}/>
            <Button className={'animated'} onClick={() => this.props.handleButtonClick(this.account, this.password, this.button)} innerRef={(button) => {this.button= button}}>登 录</Button>
          </LoginBox>

        </LoginWrapper>
        // <img src='../../statics/formBorder.png' alt='' />

      )  
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
  flag: state.getIn(['flag', 'login']),

})

const mapDispatch = (dispatch) => ({
  handleButtonClick(account, password, button) {
    var password = password.value
    console.log(button.className)
    
    if(password.length > 11 ) {
      this.login(account, password)
    } else {
      button.className = 'animated shake sc-kEYyzF jGZSAE'
      console.log(button.className)
      setTimeout(function() {
        button.className = 'sc-kEYyzF jGZSAE'
      }, 2000)
    }
    
  },
  login(accountEle, passwordEle) {
    dispatch(actionCreators.login(accountEle.value, passwordEle.value))
  }
})
export default connect(mapState, mapDispatch)(Login)
