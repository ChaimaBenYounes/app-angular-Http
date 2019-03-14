import {
    YouTubeSearchService, 
    YOUTUBE_API_KEY,
    YOUTUBE_API_URL
} from './../services/youtube-search.service'; 

// make these constants injectable to :
//1. have code that injects the right constants for a given environment at deploy time and
//2. replace the injected value easily at test-time
export const youtubeSearchInjectables : Array<any> = [
    { provide: YouTubeSearchService, useClass: YouTubeSearchService},
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];