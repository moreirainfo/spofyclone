import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import PodcastsAction from '~/store/ducks/podcasts';

export function* load() {
  try {
    const response = yield call(api.get, 'podcasts');
    yield put(PodcastsAction.loadSuccess(response.data));
  } catch (err) {
    yield put(PodcastsAction.loadFailure());
  }
}
