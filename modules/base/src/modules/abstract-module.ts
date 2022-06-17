import {
  Browser,
  BrowserContext,
  BrowserContextOptions,
  BrowserType,
  chromium,
  firefox,
  LaunchOptions,
  Page,
  webkit
} from 'playwright-core';
import { loadBrowserContext } from '../utils/browser-helpers';
import { isFileExists } from '../utils/file-utils';

export interface ModuleOptions {
  browser: Browser;
  context: BrowserContext;
  page: Page;
  authenticatedContextPath: string;
}

export interface ModuleInitializationOptions {
  browser: 'chrome' | 'firefox' | 'webkit';
  launchOptions: LaunchOptions;
  contextOptions: BrowserContextOptions | undefined;
  authenticatedContextPath: string;
}

export default abstract class AbstractModule {
  protected browser: Browser;

  protected context: BrowserContext;

  protected page: Page;

  protected authenticatedContextPath: string;

  protected static readonly BASE_URL: string;

  protected static async initOptions({
    browser = 'firefox',
    launchOptions = {},
    contextOptions = undefined,
    authenticatedContextPath
  }: ModuleInitializationOptions): Promise<ModuleOptions> {
    let browserType: BrowserType;
    let bc: BrowserContext;
    switch (browser) {
      case 'chrome':
        browserType = chromium;
        break;
      case 'firefox':
        browserType = firefox;
        break;
      default:
        browserType = webkit;
    }
    const b: Browser = await browserType.launch(launchOptions);
    if (
      authenticatedContextPath !== undefined &&
      authenticatedContextPath !== null &&
      isFileExists(authenticatedContextPath)
    ) {
      bc = await loadBrowserContext(b, authenticatedContextPath);
    } else {
      bc = await b.newContext(contextOptions);
    }
    const page: Page = await bc.newPage();
    await page.goto(this.BASE_URL);
    return {
      browser: b,
      context: bc,
      page,
      authenticatedContextPath
    };
  }

  constructor({ browser, context, page, authenticatedContextPath }: ModuleOptions) {
    this.browser = browser;
    this.context = context;
    this.page = page;
    this.authenticatedContextPath = authenticatedContextPath;
  }

  /**
   * Function closes page, context and browser
   */
  public async close() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}
