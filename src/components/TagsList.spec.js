import React from 'react'
import TestRenderer from 'react-test-renderer'

import TagsList from './TagsList'

describe('The tags list', () => {
  it('renders as expected', () => {
    const tree = TestRenderer.create(
      <TagsList tags={['css', 'html', 'go']} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
