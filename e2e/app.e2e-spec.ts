import { IViewerPage } from './app.po';

describe('i-viewer App', function() {
  let page: IViewerPage;

  beforeEach(() => {
    page = new IViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
