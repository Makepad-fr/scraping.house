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
  const categories = await aliExpressCategoryList.getAll();
  console.log('Categories');
  console.log(JSON.stringify(categories, undefined, 4));
  // TODO: Get the list of all categories

  // TODO: Accept/refuse notifications
  // TODO: Save browser path
  // TODO: Get list of all categories
}

main().then();
