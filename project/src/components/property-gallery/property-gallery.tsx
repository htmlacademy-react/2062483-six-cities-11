type PropertyGalleryProps = {
  images: string[];
  type: string;
}

function PropertyGallery({images, type}: PropertyGalleryProps): JSX.Element{
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((src) => (
          <div className="property__image-wrapper" key={src}>
            <img className="property__image" src={src} alt={type} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyGallery;
