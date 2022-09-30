import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';



function Sidebar() {
  return (
    <div className='sidebar'>
        
      
        <Link to='/'>
        <SidebarRow style={{TextDecoder: "none"}} Icon={HomeIcon} title="Home" />
        </Link>
      
        <SidebarRow Icon={ExploreIcon} title="Explore" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
        <hr />
    </div>
  )
}

export default Sidebar