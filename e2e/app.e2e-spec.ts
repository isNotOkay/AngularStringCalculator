import { AngularStringCalculatorPage } from './app.po';

describe('angular-string-calculator App', () => {
  let page: AngularStringCalculatorPage;

  beforeEach(() => {
    page = new AngularStringCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
