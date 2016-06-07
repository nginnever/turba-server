import {expect} from 'chai'
import {List, Map} from 'immutable'

describe('immutability', () => {

	describe('a number', () => {

		function increment(currentState) {
			return currentState + 1
		}

		it('is immutable', () => {
			let state = 42
			let nextState = increment(state)

			expect(nextState).to.equal(43)
			expect(state).to.equal(42)
		})
	})

	describe('a list', () => {

		function addPost(currentState, post) {
			return currentState.push(post)
		}

		it('is immutable', () => {
			let state = List.of('test1', 'test2')
			let nextState = addPost(state, 'test3')

			expect(nextState).to.equal(List.of(
				'test1',
				'test2',
				'test3'
			))
			expect(state).to.equal(List.of(
				'test1',
				'test2'
			))
		})
	})

	describe('a tree', () => {
		function addPost(currentState, post) {
			return currentState.set(
				'posts',
				currentState.get('posts').push(post)
			)
		}

		it('is immutable', () => {
			let state = Map({
				posts: List.of(
					'test1',
					'test2'
				)
			})
			let nextState = addPost(state, 'test3')

			expect(nextState).to.equal(Map({
				posts: List.of(
					'test1',
					'test2',
					'test3'
				)
			}))
			expect(state).to.equal(Map({
				posts: List.of(
					'test1',
					'test2'
				)
			}))
		})
	})
})