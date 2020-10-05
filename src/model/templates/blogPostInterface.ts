

export interface IContentfulBlogPost{
    body: {
        body: string
    }
    description:{
    description: string
    }
    publishDate: string,
    slug: string,
    title: string,
    artwork: IArtwork
}
export interface IBlogPostData {
    contentfulBlogPost: IContentfulBlogPost
}
export interface IArtwork {
    file:{
        url: string,
        fileName: string
    }
}