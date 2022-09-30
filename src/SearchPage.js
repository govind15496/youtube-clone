import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneIcon from '@mui/icons-material/Tune';
import './SearchPage.css';


function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneIcon />
            <h2>FILTER</h2>
        </div>
        <hr />


        <ChannelRow
            image="https://yt3.ggpht.com/ytc/AMLnZu_V-OMX9x52_z-wtPltdXqRxkGNJN4qwY-T7X_FBJ0=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Lex Fridman"
            verified
            subs="2.09M"
            noOfVideos={705}
            description="Lex Fridman podcast and other videos"
         />


         <hr />

         <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
        <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
        <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
        <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
         <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
         <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
         <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
         <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
         <VideoRow 
            views="942K"
            subs="13.1M"
            description="Taken from JRE #1875 w/Dave Smith" 
            timestamp="9 hours ago" 
            channel="PowerfulJRE"
            title="Dave Smith Breaks Down the Reasons Russia Invaded Ukraine"
            image="https://i.ytimg.com/an_webp/evXremPsFyk/mqdefault_6s.webp?du=3000&sqp=CP7H1JkG&rs=AOn4CLC6Bx3tpVLP5OLDLTLi6eWMahPWeg"
         />
    </div>
  )
}

export default SearchPage