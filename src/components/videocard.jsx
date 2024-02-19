import './videocard.css';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function videocard(props) {
  return(
    <div className='videocard'>
      <div className="mute"><VolumeOffIcon className='videoIcon'/></div>
      <div className="caption"><ClosedCaptionIcon className='videoIcon'/></div>
      <img className='videoImg' src={props.thumbnail}/>
      <div className="duration">
        {props.duration}
      </div>
      <div className="videoData">
        <img className='channel_logo' src={props.img}/>
        <div className="details">
          <h5>{props.title}</h5>
          <p className='name'>{props.name}</p>
          <p>{props.views}</p>
        </div>
        <MoreVertIcon className='moreIcon'/>
      </div>
    </div>
  )
}
export default videocard;