import { NeighborconnectPage } from './app.po';

describe('neighborconnect App', () => {
  let page: NeighborconnectPage;

  beforeEach(() => {
    page = new NeighborconnectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
