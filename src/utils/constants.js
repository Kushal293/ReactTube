const API_KEY = process.env.REACT_APP_YOUTUBE_API_URL;
// const API_KEY = "AIzaSyCgjwIqztm9u_-G3n43IV7knCgaBa-WgxA";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&key=" + API_KEY;

export const YOUTUBE_SINGLE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=VIDEO_ID&key=" + API_KEY;

export const COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=uniqeId&textFormat=plainText&key=" + API_KEY;

export const COMMENT_REPLIES_API = "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=commentId&key=" + API_KEY;

export const YOUTUBE_RELATED_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId=id=video&key=" + API_KEY;   

export const YOUTUBE_SEARCHRESULT_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" + API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_CHANNEL_INFO = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=CHANNEL_ID&key=" + API_KEY;

export const LIVE_MESSAGE_MAX_COUNT = 25;