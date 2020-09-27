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

export const refreshUserToken = async (userTokens) => {
  return await fetch(`http://localhost:3000/api/users/`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'POST',
      body: JSON.stringify({userTokens})
  })
}

export const getUser = async (token) => {
  return await fetch('http://localhost:3000/api/users/getUser', {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'PUT',
    body: JSON.stringify(token)
  })
}