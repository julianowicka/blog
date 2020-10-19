import React from 'react'
import { graphql } from 'gatsby'
import { IBlogPostData, IContentfulBlogPost } from '../model/templates/blogPostInterface'

const BlogPost = ({ data }: {data: IBlogPostData}) => {
  // TODO: fix interface
// @ts-ignore
  console.log({ data })
  // @ts-ignore
  const { contentfulBlogPost }: IContentfulBlogPost = data
  // console.log(contentfulBlogPost)
  const { body } = contentfulBlogPost.body
  // console.log(body)
  const { description } = contentfulBlogPost.description
  const { publishDate } = contentfulBlogPost
  const { slug } = contentfulBlogPost
  const { title } = contentfulBlogPost
  const { artwork } = contentfulBlogPost
  // console.log(artwork)
  const imageStyles = {
    width: 100,
    height: 100
  }
  return (

    <div data-testid='blog-post' className='container'>
      {title}
      {description}
      {publishDate}
      {slug}
      <img style={imageStyles} src={artwork.file.url} />

    </div>
  )
}
export default BlogPost

export const blogPostQuery = graphql`
 query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {              
    title
    slug
    artwork {
    file {
        url
        fileName                        
           }
    }
    description {
    description        
    }
      body {
      body
      }
    publishDate

    
}
}`
