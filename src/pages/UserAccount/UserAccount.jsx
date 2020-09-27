import React, {useState} from "react";
import './UserAccount.scss'
import Header from "../../conponents/Header/Header";
import {Space, Spin} from "antd";
import {setUser} from "../../actions";
import {connect} from "react-redux";
import {getUser} from '../../modules'


const UserAccount = ({...props}) => {

  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    age: '',
    email: '',
  })

  React.useEffect(() => {
    const {user, history} = props;
    if (user === undefined || Object.keys(user).length === 0) {
      return history.push('/login')
    }
    getUser({token: user.token}).then(resp => {
      if(resp.ok){
        resp.json().then(data => {
          setUserData({
            name: data.name || '',
            gender: data.gender || '',
            age: data.age || '',
            email: data.email || '',
          })
          return setLoading(false)
        })
      }
    })
  }, []);

  return (
    <div className={'userAccountMain'}>
      <Header title={'Account'} subtitle={''}/>
      <div className={'content'}>
        {loading?
          <div className={'loader'}>
            <Space size="middle">
              <Spin size="large"/>
            </Space>
          </div>:
          <div>
            
          </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  state
})

const mapDispatchToProps = dispatch => {
  return {
    saveData: data => {
      dispatch(setUser(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)