import { LaunchOptions, BrowserContextOptions } from 'playwright-core';

export default class AliExpress {
  public static async init(
    browser: 'chrome' | 'firefox' | 'webkit' = 'firefox',
    launchOptions: LaunchOptions = {},
    contextOptions: BrowserContextOptions | undefined = undefined,
    authenticatedContextPath: string = 'aliexpress.json'
  ): Promise<AliExpress> {}
}
