import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/Videocall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MicIcon from '@mui/icons-material/Mic';
import YTicon from './svg/YT-2.png';
import './Header.css';

import HomeIcon from '@mui/icons-material/Home';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DownloadIcon from '@mui/icons-material/Download';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TheatersIcon from '@mui/icons-material/Theaters';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FeedIcon from '@mui/icons-material/Feed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SidebarRow from './components/SidebarRow';
import './Sidebar.css';
import SubscriptionRow from './components/SubscriptionRow';

function Header() {
  let togglebar = () => {
    let sidebar = document.querySelector(".sidebar");
    let mini_sidebar = document.querySelector(".small_sidebar");

    if(sidebar) {
      sidebar.classList.toggle('active');
    }
    if(mini_sidebar) {
      mini_sidebar.classList.toggle('active');
    }
  }

  return(
    <div className="main_header">
      <div className="header">
        <div className="header_left">
          <div onClick={togglebar}><MenuIcon/></div>
          <img className='header_logo' src={YTicon}/>
        </div>

        <div className="header_input">
          <div className="header_middle">
            <input className="SearchBar" placeholder="Search" type="text"/>
            <SearchIcon className='header_searchbtn'/>
          </div>
          <MicIcon className='header_mic'/>
        </div>

        <div className="header_right">
          <VideoCallIcon className='header_icons'/>
          <NotificationsNoneIcon className='header_icons'/>
          <AccountCircleIcon/>
        </div>
      </div>

      <div className="sidebar">
        <SidebarRow icon={HomeIcon} title='Home'/>
        <SidebarRow icon={ShortcutIcon} title='Shorts'/>
        <SidebarRow icon={SubscriptionsIcon} title='Subscriptions'/>
        <hr/>
        <h4 className='sidebar_header'>You</h4>
        <SidebarRow icon={AccountBoxIcon} title='Your channel'/>
        <SidebarRow icon={HistoryIcon} title='History'/>
        <SidebarRow icon={SlideshowIcon} title='Your videos'/>
        <SidebarRow icon={WatchLaterIcon} title='Watch later'/>
        <SidebarRow icon={DownloadIcon} title='Downloads'/>
        <SidebarRow icon={ThumbUpOffAltIcon} title='Liked videos'/>
        <SidebarRow icon={ExpandMoreIcon} title='Show more'/>
        <hr/>
        <h4 className='sidebar_header'>Subscriptions</h4>
        <SubscriptionRow img='https://yt3.ggpht.com/h7VqJBh9AxwE9JkkWWtA9JnXV7wBTstqLm4tHbgNTc5WvCZW1ZolopJimZylOyRYW4hXx-hHpQ=s88-c-k-c0x00ffffff-no-rj' name='Orb'/>
        <SubscriptionRow img='https://yt3.ggpht.com/ytc/AIf8zZQeFkrQgL4XWN3PCndnANXlnU5kmCZfhTOi9zZ9Eg=s88-c-k-c0x00ffffff-no-rj' name='Forge Labs'/>
        <SubscriptionRow img='https://yt3.ggpht.com/vQ3lCfPafHV2Gzzrq41qlmw1QgXnbX1OWrc0GYu_HBf7Kp6-q3r_IKYPL4DO1r6DoMyM0OG3=s88-c-k-c0x00ffffff-no-rj' name='PeenoisePlays'/>
        <SubscriptionRow img='https://yt3.ggpht.com/ytc/AIf8zZSMNobgCLCeQ2OsHGg37Ffj4ba92MwS9pfpCi6rig=s88-c-k-c0x00ffffff-no-rj' name='Markiplier'/>
        <SubscriptionRow img='https://yt3.ggpht.com/ytc/AIf8zZT5oHX08VGU1k4Y6ArhSaLmE4bloPvZD3m0-WIx8A=s88-c-k-c0x00ffffff-no-rj' name='Gamology'/>
        <SubscriptionRow img='https://yt3.ggpht.com/ytc/AIf8zZSeZnm4V0-fsluajPfTfxL-1KRxyuHPsJDPiDgd6g=s88-c-k-c0x00ffffff-no-rj' name='SSundee'/>
        <SubscriptionRow img='https://yt3.ggpht.com/UlAMBo5x3kCK1jYOvKMviEZ7cUHg7UgLNLY33T-kHEFw9AU3xvVXfziGURctCy7n6zsl1iyk=s88-c-k-c0x00ffffff-no-rj' name='CSS-Tricks'/>
        <SidebarRow icon={ExpandMoreIcon} title='Show more'/>
        <hr/>
        <h4 className='sidebar_header'>Subscriptions</h4>
        <SidebarRow icon={WhatshotIcon} title='Trending'/>
        <SidebarRow icon={MusicNoteIcon} title='Music'/>
        <SidebarRow icon={MovieCreationIcon} title='Movies'/>
        <SidebarRow icon={SportsEsportsIcon} title='Gaming'/>
        <SidebarRow icon={FeedIcon} title='News'/>
        <SidebarRow icon={EmojiEventsIcon} title='Sports'/>
        <hr/>
        <h4 className='sidebar_header'>More from YouTube</h4>
        <SidebarRow icon={YouTubeIcon} title='YouTube Premium'/>
        <SidebarRow icon={TheatersIcon} title='YouTube Studio'/>
        <SidebarRow icon={PlayCircleIcon} title='YouTube Music'/>
        <SidebarRow icon={YouTubeIcon} title='YouTube Kids'/>
        <hr/>
        <SidebarRow icon={SettingsIcon} title='Settings'/>
        <SidebarRow icon={EmojiFlagsIcon} title='Report history'/>
        <SidebarRow icon={HelpOutlineIcon} title='Help'/>
        <SidebarRow icon={FeedbackIcon} title='Send feedback'/>
        <hr/>
        <div className="footer">
          <p>About &nbsp; Press &nbsp; Copyright</p>
          <p>Contact us &nbsp; Creators</p>
          <p>Advertise &nbsp; Developers</p>
          <br/>
          <p>Terms &nbsp; Privacy</p>
          <p>Policy & Safety</p>
          <p>How YouTube works</p>
          <p>Test new features</p>
          <br/>
          <p style={{color:'lightgrey'}}>&#169; 2024 Google LLC</p>
        </div>
      </div>
      <div className="small_sidebar">
        <div className="smallDiv">
          <HomeIcon/>
          <p>Home</p>
        </div>
        <div className="smallDiv">
          <ShortcutIcon/>
          <p>Shorts</p>
        </div>
        <div className="smallDiv">
          <SubscriptionsIcon/>
          <p>Subscriptions</p>
        </div>
        <div className="smallDiv">
          <VideoLibraryIcon/>
          <p>You</p>
        </div>
        <div className="smallDiv">
          <DownloadIcon/>
          <p>Downloads</p>
        </div>
      </div>
    </div>
  )
}
export default Header