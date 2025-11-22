import businessInfo from '../../data/businessInfo'

const GoogleMap = ({ height = '450px', showBorder = true }) => {
  return (
    <div className={`w-full ${showBorder ? 'rounded-lg overflow-hidden shadow-lg' : ''}`}>
      <iframe
        src={businessInfo.address.mapUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="PJ's Auto Care Location"
      ></iframe>
    </div>
  )
}

export default GoogleMap
