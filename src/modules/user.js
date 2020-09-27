export const loginUser = async (data) => {
  return await fetch('http://localhost:3000/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
}

export const registerUser = async (data) => {
  return await fetch('http://localhost:3000/api/users', {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify({...data})
  })
}

export const getUsersList = async (token) => {
  return await fetch(`http://localhost:3000/api/control/users/?${token}`)
}

export const refreshUserToken = async (userTokens) => {
  return await fetch(`http://localhost:3000/api/control/users/`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'POST',
      body: JSON.stringify({userTokens})
  })
}

export const deleteUser = async (token, userId) => {
  return await fetch(`http://localhost:3000/api/control/user/?${token}`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'DELETE',
    body: JSON.stringify({userId})
  })
}

export default{
  loginUser,
  registerUser,
  getUsersList,
  refreshUserToken,
  deleteUser
}