import React from 'react'
import { render, screen } from '@testing-library/react'
import BlogPost from '../../templates/BlogPost'
import { IBlogPostData, IContentfulBlogPost } from '../../model/templates/blogPostInterface'

describe('test of functional component BlogPost', () => {
  test('check if component have picture', () => {
    const preTestData: IContentfulBlogPost = {
      artwork: {
        file: {
          url: 'someString',
          fileName: 'someName'

        }
      },
      body: { body: '' },
      description: { description: '' },
      publishDate: '',
      slug: 'someSlug',
      title: ''

    }
    const testData: IBlogPostData = {
      contentfulBlogPost: preTestData

    }
    const inputData = {
      //  data: {
      data: testData
    }
    // }
    render(<BlogPost data={testData} />)
    expect(screen.getByTestId('blog-post').textContent).toContain('someSlug')
  })
})
