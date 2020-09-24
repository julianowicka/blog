

export interface IContentfulBlogPost{
    body: {
        body: string
    }
    description:{
    description: string
    }
    publishDate: string,
    slug: string,
    title: string
}
export interface IBlogPostData {
    contentfulBlogPost: IContentfulBlogPost
}