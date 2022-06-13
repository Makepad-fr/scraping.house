import { AbstractModule, ModuleInitializationOptions, ModuleOptions } from '@scraping.house/commons';
import selectors from './selectors';
import UserProfileModule from './user-profile-module';

export { UserProfile } from './user-profile-module';

export default class Linked extends AbstractModule {
  protected static override readonly BASE_URL = 'https://linkedin.com';

  /**
   * Creates a new instance of Linkedjs by initialising browser, browsercontext and page
   * @param browser The type of the browser to use
   * @param contextOptions Context options that will be used in browsercontext
   * @param launchOptions Launch options that will be used while launching browsers
   * @param authenticatedContextPath The path to load or save the authenticated browser context
   * @returns A new onstance of Linkedjs by initialising browser, browser context
   * and creating a new page
   */
  public static async init({
    browser = 'firefox',
    launchOptions = {},
    contextOptions = undefined,
    authenticatedContextPath
  }: ModuleInitializationOptions): Promise<Linked> {
    const options: ModuleOptions = await super.initOptions({
      browser,
      launchOptions,
      contextOptions,
      authenticatedContextPath
    });
    return new Linked(options);
  }

  /**
   * Login to your LinkedIn account with username and password
   * @param username The linkedin username to log in
   * @param password The password used to log in
   * @param rememberMe The boolean indicating that login credentials will be remembered next time.
   */
  public async login(username: string, password: string, rememberMe: boolean = true) {
    if (AbstractModule.isFileExists(super.authenticatedContextPath)) {
      // If the authenticated context already exists, do nothing
      return;
    }
    await super.page.fill(selectors.login.username, username);
    await super.page.fill(selectors.login.password, password);
    await super.page.click(selectors.login.submit);
    if (rememberMe) {
      await AbstractModule.saveAuthenticatedContext(super.context, super.authenticatedContextPath);
    }
  }

  /**
   * Goes to the user's profile page and returns the UserProfile instance
   * @param id The id of the user
   * @param isolated If true the user profile will be created on a new page. Defaults to true
   * @returns The UserProfile object
   */
  public async user(id: string, isolated: boolean = true): Promise<UserProfileModule> {
    const u: UserProfileModule = new UserProfileModule(
      id,
      isolated ? await super.context.newPage() : super.page
    );
    await u.init();
    return u;
  }

  private constructor({ browser, context, page, authenticatedContextPath }: ModuleOptions) {
    super({
      browser,
      context,
      page,
      authenticatedContextPath
    });
  }
}
