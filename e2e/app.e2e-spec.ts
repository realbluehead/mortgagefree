import { MortgagefreePage } from './app.po';

describe('mortgagefree App', () => {
  let page: MortgagefreePage;

  beforeEach(() => {
    page = new MortgagefreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
