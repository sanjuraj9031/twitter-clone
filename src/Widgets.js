import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder='Search Twitter' type='text' />
        </div>
        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId='1658331847552806914' />
            <TwitterTimelineEmbed sourceType='profile' screenName='SanjuRa44112832' options={{height: 400}} />
            <TwitterShareButton url={'https://www.facebook.com/profile.php?id=100007118914452'} options={{ text: "Hello Everyone!", via: "SanjuRa44112832"}} />
        </div>
    </div>
  )
}

export default Widgets