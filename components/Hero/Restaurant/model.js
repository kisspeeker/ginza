export default (info) => {
  const {
    image = '',
    popupImage = '',
    logo = '',
    type = '',
    placeName = '',
    placeParent = '',
    city = '',
    url = '',
    menuFile = ''
  } = info
  return {
    image,
    popupImage,
    logo,
    type,
    placeName,
    placeParent,
    city,
    url,
    menuFile
  }
}
