import AliExpress from '@scraping.house/aliexpress';

async function main() {
  const aliExpress = await AliExpress.init({
    browser: 'firefox',
    launchOptions: {
      headless: false
    },
    contextOptions: undefined,
    authenticatedContextPath: './aliexpress.json'
  });
  await aliExpress.handleCookies('accept');
  const aliExpressCategoryList = await aliExpress.categoryList();
  await aliExpressCategoryList.getAll();
  // TODO: Get the list of all categories

  // TODO: Accept/refuse notifications
  // TODO: Save browser path
  // TODO: Get list of all categories
}

main().then();
