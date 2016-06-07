import {List, Map} from 'immutable'

export function setState(state, newState) {
	return state.merge(newState)
}

export function setUpVote(state, path) {
	// get the number of subItems in a turba
	// const number = state.get('turbas')
	//	.get(0)
	//	.getIn(['data', 'subItems']).size
	// const score = state.get('turbas')
	// 	.get(0)
	// 	.getIn(['data', 'subItems'])
	// 	.get(0)
	// 	.getIn(['data', 'score'])

	return state.updateIn(path, score => score + 1)
}

export function setTopic(state, newTopic) {
	return state.updateIn(['topics'], topic => topic.push(newTopic))
}
