import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './SubscriptionRow.css';

function SubscriptionRow(props) {
  return(
    <div className="subscription">
      <div className="left">
        <img className='channel_logo' src={props.img}/>
        <p className='channel_name'>{props.name}</p>
      </div>
      <div className="right">
        <FiberManualRecordIcon className='dot' fontSize='inherit'/>
      </div>
    </div>
  )
}
export default SubscriptionRow