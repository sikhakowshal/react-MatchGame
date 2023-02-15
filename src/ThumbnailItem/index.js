import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, checkThumbnailImgToMatchImg} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnailImg = () => {
    checkThumbnailImgToMatchImg(id)
  }

  return (
    <li className="thumbnail-item" onClick={onClickThumbnailImg}>
      <button className="button" type="button">
        <img src={thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
