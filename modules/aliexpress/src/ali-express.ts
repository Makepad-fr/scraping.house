// import {
//   LaunchOptions, BrowserContextOptions, BrowserType, BrowserContext,
// } from 'playwright-core';
import { AbstractModule, ModuleInitializationOptions, ModuleOptions } from '@scraping.house/commons';

export default class AliExpress extends AbstractModule {
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

  login(username: string, password: string, rememberMe: boolean): Promise<void> {
    throw new Error('Method not implemented.');
  }
  //   public static async init(
  //     browser: 'chrome' | 'firefox' | 'webkit' = 'firefox',
  //     launchOptions: LaunchOptions = {},
  //     contextOptions: BrowserContextOptions | undefined = undefined,
  //     authenticatedContextPath: string = 'aliexpress.json',
  //   ): Promise<AliExpress> {
  //   }
}
