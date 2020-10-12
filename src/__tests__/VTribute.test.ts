import VTribute from '../directives/VTribute';
import { mockAttach } from '../__mocks__/tributejs';
describe('VTribute', () => {
  const options = {
    values: [],
  };
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('#bind', () => {
    it('should not attach Tributejs if no textarea or input existis', () => {
      const el = document.createElement('div');
      el.appendChild(document.createElement('p'));
      const vTribute = new VTribute(options);
      vTribute.bind(
        el,
        { value: {}, modifiers: {}, name: '' },
        { isRootInsert: false, isComment: false },
        { isRootInsert: false, isComment: false },
      );
      expect(mockAttach).toBeCalledTimes(0);
    });

    it('should attach Tributejs to input', () => {
      const el = document.createElement('div');
      const input = document.createElement('input');
      el.appendChild(input);
      const vTribute = new VTribute(options);
      vTribute.bind(
        el,
        { value: { bindingOption: 'test' }, modifiers: {}, name: '' },
        { isRootInsert: false, isComment: false },
        { isRootInsert: false, isComment: false },
      );
      expect(mockAttach).toHaveBeenNthCalledWith(1, input);
    });

    it('should attach Tributejs to textarea', () => {
      const el = document.createElement('div');
      const input = document.createElement('textarea');
      el.appendChild(input);
      const vTribute = new VTribute(options);
      vTribute.bind(
        el,
        { value: { bindingOption: 'test' }, modifiers: {}, name: '' },
        { isRootInsert: false, isComment: false },
        { isRootInsert: false, isComment: false },
      );
      expect(mockAttach).toHaveBeenNthCalledWith(1, input);
    });

    it('should attach if input element is toplevel element', () => {
      const el = document.createElement('input');
      const vTribute = new VTribute(options);
      vTribute.bind(
        el,
        { value: {}, modifiers: {}, name: '' },
        { isRootInsert: false, isComment: false },
        { isRootInsert: false, isComment: false },
      );
      expect(mockAttach).toHaveBeenNthCalledWith(1, el);
    });
  });
});
