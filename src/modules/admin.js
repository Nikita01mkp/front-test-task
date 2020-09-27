export const getUsersList = async (token) => {
  return await fetch(`http://localhost:3000/api/control/users/?${token}`)
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
