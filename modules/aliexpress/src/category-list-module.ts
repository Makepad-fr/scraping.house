import { AbstractCategoryListModule, Logger } from '@scraping.house/commons';
import { Page } from 'playwright-core';
import Category from './models/category';
import selectors from './selectors';

const BASE_URL = 'https://www.aliexpress.com/all-wholesale-products.html';

export default class CategoryListModule extends AbstractCategoryListModule {
  private static logger: Logger = new Logger('CategoryListModule');

  public constructor(page: Page) {
    super(page, BASE_URL);
  }

  async init(): Promise<void> {
    await this.page.goto(this.baseURL);
  }

  public async getAll(): Promise<Category[]> {
    // TODO: Call init only if necessary
    await this.init();
    CategoryListModule.logger.log('Initialization complete');
    await this.page.waitForSelector(selectors.category.list.container);
    CategoryListModule.logger.log('Category list container appeared');
    const categoryContainer = `${selectors.category.list.container}${selectors.category.list.item.container}`;
    const categories = await this.page.$$(
      `${categoryContainer}${selectors.category.list.item.title}${selectors.category.list.item.link}`
    );

    CategoryListModule.logger.log(`Number of categories ${categories.length}`);
    for (let i = 0; i < categories.length; i += 1) {
      const categorySelector = `(${categoryContainer})[${i + 1}]`;
      const title = (
        await this.page.textContent(`${categorySelector}${selectors.category.list.item.title}`)
      )?.trim();
      const link = await (
        await this.page.$(`${categorySelector}${selectors.category.list.item.link}`)
      )?.getProperty('href');
      const subCategories = await this.page.$$(
        `${categorySelector}${selectors.category.list.item.sub.wrapper}${selectors.category.list.item.sub.container}${selectors.category.list.item.sub.item}`
      );
      CategoryListModule.logger.log(`Category title: ${title} link: ${link}`);
      for (let j = 0; j < subCategories.length; j += 1) {
        const subCategory = subCategories[j];
        const subCategoryTitle = (await subCategory?.textContent())?.trim();
        const subCategoryLink = await subCategory?.getProperty('href');
        CategoryListModule.logger.log(`SubCategory title ${subCategoryTitle}, link ${subCategoryLink}`);
      }
    }
    /*
     * TODO: Parse categories
     * For each category get subcategory list
     */
    return [];
  }
}
