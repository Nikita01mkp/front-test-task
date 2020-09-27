import React from "react";
import { Spin, Space } from 'antd';

const Home = ({history}) => {
  React.useEffect(() => {
    const isUser = false;
    const isAdmin = false;
    if (isUser) {
      return history.push('/account')
    }
    if (isAdmin) {
      return history.push('/users')
    }
    return history.push('/login')
  }, [])
  return (
    <div>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  )
}

export default Home