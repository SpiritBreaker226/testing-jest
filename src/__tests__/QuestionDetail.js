import React from 'react'
import TestRenderer from 'react-test-renderer'

import {
  mapStateToProps,
  QuestionDetailDisplay
} from '../components/QuestionDetail'

describe('The Question Detail Component', () => {
  describe('for container element', () => {
    describe('mapStateToProps', () => {
      it('should map the state to props correctly', () => {
        const sampleQuestion = {
          question_id: 42,
          body: 'Space is big',
        }
        const appState = { questions: [sampleQuestion] }
        const ownProps = { question_id: 42 }
        const componentState = mapStateToProps(appState, ownProps)

        expect(componentState).toEqual(sampleQuestion)
      })
    })
  })

  describe('display element', () => {
    it('should not regress', () => {
      const tree = TestRenderer.create(
        <QuestionDetailDisplay
          title="The meaning of life"
          body="42"
          answer_count={0}
          tags={['hitchhiking']}
        />
      )

      expect(tree.toJSON()).toMatchSnapshot()
    })
  })
})
