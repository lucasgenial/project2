import { CICOMPage } from './app.po';

describe('cicom App', () => {
  let page: CICOMPage;

  beforeEach(() => {
    page = new CICOMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
