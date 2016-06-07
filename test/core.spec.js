import {List, Map} from 'immutable'
import {expect} from 'chai'

import {setState, setUpVote, setTopic} from '../src/core'

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

describe('setState', () => {

	it('updates the state', () => {
		const state = Map()

		const nextState = setState(state, initState)
		expect(nextState).to.equal(initState)
	})

	it.skip('converts to immutable', () => {
		const state = Map()
		const newState = [
		  {
		    data: {
		      id: '1338',
		      title: 'KITTERS MROW',
		      url: 'test2',
		      subscribers: 12,
		      display_name: 'KITTERS',
		      // This could be an ipld link
		      subItems: [
		        {
		          data: {
		            score: 420,
		            id: 9000,
		            url: 'www.wat.com',
		            author: 'voxeot',
		            title: 'we',
		            body: 'This is the message body of the first post',
		            image: 'Qm...',
		            video: 'Qm...',
		            subPosts: [
		            	{
		            		data: {
		            			id: 1234,
		            			author: 'SomePoster',
		            			body: 'This is a response the subItem Post',
		            			image: 'Qm...',
		            			video: 'Qm...'
		            		}
		            	}
		            ]
		          }
		        }
		      ]
		    }
		  }
		]

		const nextState = setTurba(state, initState)
		expect(nextState).to.equal(initState)
	})

})

describe('setUpVote', () => {

	it('increments a sub post score', () => {
		const subItemId = 9000
		const state = initState
		const path = ['topics', 0, 'data', 'subItems', 0, 'data', 'score']
		const nextState = setUpVote(state, path)
		expect(nextState).to.equal(Map({
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
			            score: 421,
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
		}))
	})


})

describe('setTurba', () => {

	it('adds a turba sub thread to the state', () => {
		const state = initState
		const newTopic = initState.getIn(['topics', 0])
		const nextState = setTopic(state, newTopic)
		expect(nextState).to.equal(state.updateIn(['topics'], topic => topic.push(newTopic)))
	})
})