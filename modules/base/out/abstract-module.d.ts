import { Browser, BrowserContext, BrowserContextOptions, LaunchOptions, Page } from 'playwright-core';
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
    protected static initOptions({ browser, launchOptions, contextOptions, authenticatedContextPath, }: ModuleInitializationOptions): Promise<ModuleOptions>;
    constructor({ browser, context, page, authenticatedContextPath, }: ModuleOptions);
    /**
       * Saves the authenticated browser context
       * @param context The current browser context
       * @param filePath The filepath to save the authenticated browser context
       */
    protected static saveAuthenticatedContext(context: BrowserContext, filePath: string): Promise<void>;
    /**
       * Loads a previously saved browser context in a new browser context
       * @param browser The browser to which we want to load authenticated context
       * @param filePath The file path of the authenticated context
       * @returns Returns the browser context created from the saved context
       */
    protected static loadAuthenticatedContext(browser: Browser, filePath: string): Promise<BrowserContext>;
    /**
       * Checks if a file exists or not
       * @param filePath The path of the file to check
       * @returns true if file path exists, false if not
      */
    protected static isFileExists(filePath: string): boolean;
    /**
     * Function closes page, context and browser
     */
    close(): Promise<void>;
    abstract login(username: string, password: string, rememberMe: boolean): Promise<void>;
}
//# sourceMappingURL=abstract-module.d.ts.map