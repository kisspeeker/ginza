export default (info) => {
  const {
    title = '',
    label = '',
    city = '',
    category = '',
    description = {
      text: '',
      moreText: ''
    },
    params = []
  } = info || {}

  const adaptedParams = (params || []).map((param) => {
    const {
      type = '',
      value = ''
    } = param
    return {
      type,
      value
    }
  })

  return {
    title,
    label,
    description,
    city,
    category,
    params: adaptedParams
  }
}
