import React from 'react'
import { graphql } from 'gatsby'
import { IBlogPostGridData, IBlogPostNode } from '../model/templates/blogGridInterface'
interface IObj {
  name: string
  surname?: string
}
interface IListaZ{
  zmienna: any
}
const BlogGrid = ({ data }: {data: IBlogPostGridData }) => {
  console.log(data)
  const imageStyles = {
    width: 100,
    height: 100
  }

  return (
    <div>
      {data.allContentfulBlogPost.edges.map((blogPostNode: IBlogPostNode) => {
        // console.log(blogPostNode.node.slug)
        return (
          <div>{blogPostNode.node.slug}
            {blogPostNode.node.description.description}
            <a href={blogPostNode.node.slug}><img style={imageStyles} src={blogPostNode.node.artwork.file.url} /></a>
          </div>

        )
      })}
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
