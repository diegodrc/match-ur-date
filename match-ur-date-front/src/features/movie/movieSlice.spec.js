import movieReducer, {
  changeMovie
} from './movieSlice';

describe('movie reducer', () => {
  const initialState = {
    value: 'movie-inicial'
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 'movie-inicial'
    });
  });

  it('should handle changeMovie', () => {
    const actual = movieReducer(initialState, changeMovie('outra-movie'));
    expect(actual.value).toEqual('outra-movie');
  });
});
