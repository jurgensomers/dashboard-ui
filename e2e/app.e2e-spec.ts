import { DashquoiaPage } from './app.po';

describe('dashquoia App', function() {
  let page: DashquoiaPage;

  beforeEach(() => {
    page = new DashquoiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
