import { PersonalPagePage } from './app.po';

describe('personal-page App', function() {
  let page: PersonalPagePage;

  beforeEach(() => {
    page = new PersonalPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
