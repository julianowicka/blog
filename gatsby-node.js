const  path =  require("path")
const _ = require("lodash")

exports.createPages = async ({graphql, actions}) =>
{

    const {createPage} = actions
    const blogPostTemplate = path.resolve('./src/templates/BlogPost.tsx')
    const queryResults = await graphql(`
        {
          allContentfulBlogPost{
                edges{
                  node{
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
              }
            }
        }`
    )
    queryResults.data.allContentfulBlogPost.edges
    _.each(queryResults.data.allContentfulBlogPost.edges, (edge) => {
        createPage({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
                slug: edge.node.slug,
                blog: edge
            }
        })
    })
}
