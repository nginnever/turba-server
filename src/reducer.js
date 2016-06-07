import {setState, setUpVote, setTopic, INITIAL_STATE} from './core'

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case 'SET_TOPIC':
	  //return state.update(['topics'], topicState => setTopic(topicState, action.newTopic))
	  return setTopic(state, action.newTopic)
	}
}