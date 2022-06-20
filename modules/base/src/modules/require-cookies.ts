export default interface RequireCookies {
  /**
   * Function handles cookies
   * @param action The action for the cookies
   */
  handleCookies(action: 'accept' | 'reject'): Promise<void>;
}
