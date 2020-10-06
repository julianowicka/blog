import { IContentfulBlogPost } from './blogPostInterface'

interface IBlogPostNode {
    node: IContentfulBlogPost
}
export interface IBlogPostGridData {
    allContentfulBlogpPost:{
        edges: IBlogPostNode[]
    }
}
