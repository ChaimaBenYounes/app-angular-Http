/**
* SearchResult is a data-structure that holds an individual
* record from a YouTube video search
*/
export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

   //obj?: any lets us simulate keyword arguments
   //using a hard-coded URLformat.
   //use the video id directly in view to build URL 
   constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl ||
        `https://www.youtube.com/watch?v=${this.id}`; 

   }
}
