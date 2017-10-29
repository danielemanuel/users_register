import { UsersRegisterPage } from './app.po';

describe('users-register App', function() {
  let page: UsersRegisterPage;

  beforeEach(() => {
    page = new UsersRegisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
