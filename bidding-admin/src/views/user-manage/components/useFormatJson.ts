// export_json_to_excel的参数要求是一个二维数组
const formatJson = (headers: any, rows: any) => {
  return rows.map((item: any) => {
    return Object.keys(headers).map(key => {
      // 后端返回的角色是一个数组，需要进行处理
      if (headers[key] === 'roles') {
        const roles = item[headers[key]]
        return JSON.stringify(roles.map((role: any) => role.roleName))
      }
      return item[headers[key]]
    })
  })
}

export {
  formatJson
}
