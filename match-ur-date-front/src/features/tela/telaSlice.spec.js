import telaReducer, {
  changeTela
} from './telaSlice';

describe('tela reducer', () => {
  const initialState = {
    value: 'tela-inicial'
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 'tela-inicial'
    });
  });

  it('should handle changeTela', () => {
    const actual = telaReducer(initialState, changeTela('outra-tela'));
    expect(actual.value).toEqual('outra-tela');
  });
});
