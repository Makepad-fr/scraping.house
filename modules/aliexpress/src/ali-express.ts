// import {
//   LaunchOptions, BrowserContextOptions, BrowserType, BrowserContext,
// } from 'playwright-core';
import {
  AbstractShoppingModule,
  ModuleInitializationOptions,
  ModuleOptions,
  RequireCookies
} from '@scraping.house/commons';
import selectors from './selectors';
import CategoryListModule from './category-list-module';

// TODO: Implement AliExpress login
export default class AliExpress extends AbstractShoppingModule implements RequireCookies {
  protected static override readonly BASE_URL: string = 'https://aliexpress.com';

  public static async init({
    browser = 'firefox',
    launchOptions = {},
    contextOptions = undefined,
    authenticatedContextPath
  }: ModuleInitializationOptions): Promise<AliExpress> {
    const options: ModuleOptions = await super.initOptions({
      browser,
      launchOptions,
      contextOptions,
      authenticatedContextPath
    });
    return new AliExpress(options);
  }

  public async handleCookies(action: 'accept' | 'reject'): Promise<void> {
    let buttonSelector = `${selectors.cookies.wrapper}${selectors.cookies.buttonsWrapper}`;
    if (action === 'accept') {
      buttonSelector = `${buttonSelector}${selectors.cookies.acceptButton}`;
    } else {
      buttonSelector = `${buttonSelector}${selectors.cookies.rejectButton}`;
    }
    await this.page.waitForSelector(buttonSelector);
    await this.page.click(buttonSelector);
  }

  public async categoryList(): Promise<CategoryListModule> {
    const module = new CategoryListModule(this.page);
    await module.init();
    return module;
  }

  //   public static async init(
  //     browser: 'chrome' | 'firefox' | 'webkit' = 'firefox',
  //     launchOptions: LaunchOptions = {},
  //     contextOptions: BrowserContextOptions | undefined = undefined,
  //     authenticatedContextPath: string = 'aliexpress.json',
  //   ): Promise<AliExpress> {
  //   }
}
