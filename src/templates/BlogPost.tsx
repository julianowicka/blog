import React from "react"
import {graphql} from "gatsby";
import {IBlogPostData, IContentfulBlogPost} from "../model/templates/blogPostInterface";


const BlogPost = ( {data}: {data: IBlogPostData} ) => {
 // TODO: fix interface
// @ts-ignore
const {contentfulBlogPost}: IContentfulBlogPost = data
 console.log(contentfulBlogPost)
    const {body} = contentfulBlogPost.body
    console.log(body)
    const {description} = contentfulBlogPost.description
    const {publishDate} = contentfulBlogPost
    const {slug} = contentfulBlogPost
    const {title} = contentfulBlogPost

    return(
        <div>
            {description}
            {publishDate}
            {slug}
            {title}
        </div>
    )
}

export default BlogPost

export const blogPostQuery = graphql`
 query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {              
    title
    slug
    description {
    description        
    }
      body {
      body
      }
    publishDate

    
}
}`