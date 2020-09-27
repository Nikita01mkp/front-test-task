import React, {useState} from "react";
import {connect} from 'react-redux'
import {Input, Button,} from 'antd';
import {UserOutlined, LockFilled} from '@ant-design/icons';
import Header from "../../conponents/Header/Header"
import {Link} from "react-router-dom"
import './Login.scss'
import {setUser} from '../../actions'
import {loginUser} from '../../modules'

const Login = ({history, ...props}) => {

  const [data, setData] = useState({login: '', password: ''});
  const [btnDisable, setBtnDisable] = useState(false);

  const onChangeLogin = (event) => {
    let newData = {...data};
    newData.login = event.target.value
    setData(newData)
  }

  const onChangePassword = (event) => {
    let newData = {...data};
    newData.password = event.target.value
    setData(newData)
  }

  const login = () => {
    setBtnDisable(true)
    const {saveData} = props
    const isLogin = data.login !== '';
    const isPassword = data.password !== '';
    const isValid = isLogin && isPassword
    if (isValid) {
      loginUser(data).then(resp => {
        if (resp.status === 200) {
          return resp.json().then(resp => {
            saveData(resp)
            if (resp.userRole === 'User') {
              history.push('/account')
            }
            if (resp.userRole === 'Admin') {
              history.push('/users')
            }
          })
        }
        resp.text().then((err) => {
          if (resp.status === 400) {
            //Todo validators
          }
          if (resp.status === 401) {
            //Todo validators
          }
        })
      })
      setData({login: '', password: ''})
    }
    if (!isLogin) {
      //ToDo validation
    }
    if (!isPassword) {
      //ToDo validation
    }
  }

  return (
    <div className={'loginPage'}>
      <Header title={'Login'} subtitle={''}/>
      <div className={'loginContent'}>
        <div className={'inputLoginBox'}>
          <Input
            className={'inputLogin'}
            placeholder="Input Login"
            prefix={<UserOutlined/>}
            value={data.login}
            onChange={onChangeLogin}
            size={'large'}
          />
          <Input.Password
            className={'inputLogin'}
            placeholder="Input Password"
            prefix={<LockFilled/>}
            value={data.password}
            onChange={onChangePassword}
            size={'large'}
          />
          <Button onClick={login} disabled={btnDisable}>
            Login
          </Button>
          <div className={'signUpBox'}>
            <p>Do not have an account?</p>
            <Link to={'/registration'}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => {
  return {
    saveData: data => {
      dispatch(setUser(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)