import React from 'react'
import { graphql } from 'gatsby'
import { IBlogPostGridData } from '../model/templates/blogGridInterface'

const BlogGrid = ({ data }: {data: IBlogPostGridData }) => {
  console.log(data)
  return (
    <div>
            kebap
    </div>
  )
}
export default BlogGrid

export const allContentfulBlogPostQuery = graphql`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    id
                    slug
                    description {
                        description
                    }
                    artwork {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }`
