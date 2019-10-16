import axios from 'axios'
import {HOST} from "./config"

export default function getResponse(params) {
  return new Promise((resolve, reject) => {
    const url = HOST + params
    axios.get(url)
      .then(res => {
        resolve(res)
      }).catch(error => {
      reject(error)
    })
  })
}
