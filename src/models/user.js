

const setUserList = function (state = {}, {payload}) {
  return {
    ...state,
    userList: []
  }
}

export default {
  setUserList
}