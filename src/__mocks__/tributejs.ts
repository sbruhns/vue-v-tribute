// __mocks__/sound-player.js
export default class Tribute {
  constructor() {}

  attach = mockAttach;
}
export const mockAttach = jest.fn();
