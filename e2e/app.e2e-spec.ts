import { SportAssistantPage } from './app.po';

describe('sport-assistant App', function() {
  let page: SportAssistantPage;

  beforeEach(() => {
    page = new SportAssistantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
