import { CrowdlyPage } from './app.po';

describe('crowdly App', () => {
  let page: CrowdlyPage;

  beforeEach(() => {
    page = new CrowdlyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
