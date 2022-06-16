import { Page } from 'playwright-core';
import BrowserHelpers from '../utils/browser-helpers';

export default abstract class AbstractSubModule {
  protected page: Page;

  protected helpers: BrowserHelpers;

  protected constructor(page: Page) {
    this.page = page;
    this.helpers = new BrowserHelpers(this.page);
  }

  protected async close() {
    await this.page.close();
  }

  protected abstract init(): void;
}
