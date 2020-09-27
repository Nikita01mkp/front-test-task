import React from "react";
import {setUser} from "../../actions";
import {connect} from "react-redux";
import Header from "../../conponents/Header/Header"
import {getUsersList, refreshUserToken, deleteUser} from "../../modules/index"
import {Space, Spin, Table} from "antd";
import './Users.scss'


const Users = ({...props}) => {

  const [users, setUsers] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const deleteSelectUser = (rowData) => {
    const {user} = props;
    deleteUser(user.token, rowData._id).then(resp => {
      if(resp.ok){
        let newUsersData = [...users];
        newUsersData = newUsersData.filter(user => user._id !== rowData._id);
        setUsers(newUsersData);
      }
    })
  }

  React.useEffect(() => {
    const {user, history} = props;
    console.log('user user user user', user)
    if (user === undefined || Object.keys(user).length === 0) {
      return history.push('/login')
    }
    if (user.userRole !== 'Admin') {
      return history.push('/account')
    }
    console.log('store', user.token)
    getUsersList(user.token).then(resp => {
      if (resp.status === 401) {
        const userTokens = {
          token: user.token,
          refreshToken: user.refreshToken
        }
        refreshUserToken(userTokens).then(resp => {
          console.log('refreshUserToken resp', resp)
        })
      }
      if (resp.status === 200) {
        resp.json().then(resp => {
          setLoading(false)
          setUsers([...resp])
        })
      }
    })
  }, [])

  const columns = [
    {
      title: 'Login',
      dataIndex: 'login',
    },
    {
      title: 'ID',
      dataIndex: '_id',
    },
    {
      title: 'Action',
      render: (rowData) => <a onClick={() => deleteSelectUser(rowData)}>Delete</a>,
    },
  ];
  return (
    <div className={'usersMain'}>
      <Header title={'Admin'} subtitle={'Users List'}/>
      {loading ?
        <div className={'loader'}>
          <Space size="middle">
            <Spin size="large"/>
          </Space>
        </div> :
        <div className={'table'}>
          <Table dataSource={users} columns={columns} />
        </div>
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)