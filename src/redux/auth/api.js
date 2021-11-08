import axios from 'axios'

export const getToken = ({ email, password }) => {
  const url = `https://reqres.in/api/login`
  const body = {
    email: email,
    password: password,
  }

  return axios.post(url, body).then((r) => r.data)
}
