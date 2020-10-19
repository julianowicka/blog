import { IContentfulBlogPost } from './blogPostInterface'

export interface IBlogPostNode {
    node: IContentfulBlogPost
}
export interface IBlogPostGridData {
    allContentfulBlogPost:{
        edges: IBlogPostNode[]
    }
}
