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
import fs from 'fs';

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
      this.isFileExists(authenticatedContextPath)
    ) {
      bc = await this.loadAuthenticatedContext(b, authenticatedContextPath);
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
   * Saves the authenticated browser context
   * @param context The current browser context
   * @param filePath The filepath to save the authenticated browser context
   */
  protected static async saveAuthenticatedContext(context: BrowserContext, filePath: string) {
    await context.storageState({ path: filePath });
  }

  /**
   * Loads a previously saved browser context in a new browser context
   * @param browser The browser to which we want to load authenticated context
   * @param filePath The file path of the authenticated context
   * @returns Returns the browser context created from the saved context
   */
  protected static async loadAuthenticatedContext(
    browser: Browser,
    filePath: string
  ): Promise<BrowserContext> {
    return browser.newContext({ storageState: filePath });
  }

  /**
   * Checks if a file exists or not
   * @param filePath The path of the file to check
   * @returns true if file path exists, false if not
   */
  protected static isFileExists(filePath: string): boolean {
    return fs.existsSync(filePath);
  }

  /**
   * Function closes page, context and browser
   */
  public async close() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }

  abstract login(username: string, password: string, rememberMe: boolean): Promise<void>;
}
