import { Browser, BrowserContext, Page } from 'playwright-core';
export default abstract class AbstractModule {
    protected browser: Browser;
    protected context: BrowserContext;
    protected page: Page;
    protected authenticatedContextPath: string;
    constructor(browser: Browser, context: BrowserContext, page: Page, authenticatedContextPath: string);
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
}
//# sourceMappingURL=AbstractModule.d.ts.map