import _ from 'lodash';

import { FETCH_VIDEOS, SELECT_VIDEO } from '../actions';

const initalState = {
	id: '',
	slug: '',
	url: ''
}

const reducerVideo = (state = initalState, action) => {
	swith (action.type) {
		case FETCH_VIDEOS:
			console.log(action)
			break;
		case SELECT_VIDEO:
			break;
		default:
			return state
	}
}

export default reducerVideo
// export default function(state = {}, action) {
// 	switch (action.type) {
// 	case FETCH_VIDEOS:
// 		let data = action.payload.data.data;
// 		data.map(o => o.selected = false);
// 		let createUrlSlug = (video) => {
// 			// a bit ugly, could potentially break up into functions:
// 			// lower cases, replaces spaces with hyphens, finds original hyphens from vid name and truncates to just so there aren't patterns like video-name---example
// 			const slug = video.name.toLowerCase().split(' ').join('-').replace(/-{2,}/g, '-')
// 			return video.slug = slug;
// 		}
// 		data.map(createUrlSlug);
// 		return _.mapKeys(data, (v, k) => { return k })
// 	case SELECT_VIDEO:
// 		return _.forOwn(state, (v, k) => { v.name === action.videoSelected.name ? (v.selected = true) : (v.selected = false) })
// 	default:
// 		return state;
// 	}
// }
