import { NgHmrPage } from './app.po';

describe('ng-hmr App', function() {
  let page: NgHmrPage;

  beforeEach(() => {
    page = new NgHmrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
