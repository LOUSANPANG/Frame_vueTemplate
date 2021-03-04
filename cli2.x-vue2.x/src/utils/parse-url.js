// hash 解析参数
export const utilsParseHashUrl = (tagetParams) => {
  const parmas = location.hash.indexOf('?')
  const query = location.hash.substring(parmas + 1)
  const queryArr = query.split('&')

  for (let i = 0; i < queryArr.length; i++) {
    const queryPair = queryArr[i].split('=')
    if (queryPair[0] === tagetParams) {
      return queryPair[1]
    }
  }
  return false
}

// history 解析参数
export const utilsParseHistoryUrl = (tagetParams) => {
  const query = window.location.search.substring(1)
  const queryArr = query.split('&')

  for (let i = 0; i < queryArr.length; i++) {
    const queryPair = queryArr[i].split('=')
    if (queryPair[0] === tagetParams) {
      return queryPair[1]
    }
  }
  return false
}
