export default {
  cookies: {
    wrapper: "//div[contains(@class,'global-gdpr-wrap')]",
    buttonsWrapper: "//div[contains(@class,'global-gdpr-btn-wrap')]",
    acceptButton: "//button[contains(@data-role,'gdpr-accept')]",
    rejectButton: "//button[contains(@data-role,'gdpr-reject')]"
  },
  category: {
    list: {
      container: "//div[contains(@class, 'cg-main')]",
      item: {
        container: "//div[contains(@class, 'item util-clearfix')]",
        title: "//h3[contains(@class, 'big-title')]",
        link: '//a',
        sub: {
          wrapper: "//div[contains(@class, 'sub-item-cont-wrapper')]",
          container: "//ul[contains(@class, 'sub-item-cont util-clearfix')]",
          item: '//li/a'
        }
      }
    }
  }
};
