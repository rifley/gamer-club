import { LiciousIndeedPage } from './app.po';

describe('licious-indeed App', () => {
  let page: LiciousIndeedPage;

  beforeEach(() => {
    page = new LiciousIndeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
