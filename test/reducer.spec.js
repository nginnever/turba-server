import {Map, List} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

const initState = Map({
	topics: List.of(
		Map({
	    data: Map({
	      id: '1338',
	      title: 'KITTERS MROW',
	      url: 'test2',
	      subscribers: 12,
	      display_name: 'KITTERS',
	      // This could be an ipld link
	      subItems: List.of(
	        Map({
	          data: Map({
	            score: 420,
	            id: 9000,
	            url: 'www.wat.com',
	            author: 'voxeot',
	            title: 'we',
	            body: 'This is the message body of the first post',
	            image: 'Qm...',
	            video: 'Qm...',
	            subPosts: List.of(
	            	Map({
	            		data: Map({
	            			id: 1234,
	            			author: 'SomePoster',
	            			body: 'This is a response the subItem Post',
	            			image: 'Qm...',
	            			video: 'Qm...'
	            		})
	            	})
	            )
	          })
	        })
	      )
	    })
		})
	)
})

describe('reducer', () => {

	it('sets a new topic', () => {
		const newTopic = initState.getIn(['topics', 0])
		const action = {type: 'SET_TOPIC', newTopic: newTopic}
		const nextState = reducer(initState, action)
		expect(nextState).to.equal(initState.updateIn(['topics'], topic => topic.push(newTopic)))
	})

	it('has an init state', () => {
		const newTopic = initState.getIn(['topics', 0])
		const action = {type: 'SET_TOPIC', newTopic: newTopic}
		const nextState = reducer(undefined, action)
		expect(nextState).to.equal(initState)
	})
})