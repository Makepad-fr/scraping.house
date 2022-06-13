"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class AbstractModule {
    constructor(browser, context, page, authenticatedContextPath) {
        this.browser = browser;
        this.context = context;
        this.page = page;
        this.authenticatedContextPath = authenticatedContextPath;
    }
    /**
       * Saves the authenticated browser context
       * @param context The current browser context
       * @param filePath The filepath to save the authenticated browser context
       */
    static async saveAuthenticatedContext(context, filePath) {
        await context.storageState({ path: filePath });
    }
    /**
       * Loads a previously saved browser context in a new browser context
       * @param browser The browser to which we want to load authenticated context
       * @param filePath The file path of the authenticated context
       * @returns Returns the browser context created from the saved context
       */
    static async loadAuthenticatedContext(browser, filePath) {
        return browser.newContext({ storageState: filePath });
    }
    /**
       * Checks if a file exists or not
       * @param filePath The path of the file to check
       * @returns true if file path exists, false if not
      */
    static isFileExists(filePath) {
        return fs_1.default.existsSync(filePath);
    }
}
exports.default = AbstractModule;
//# sourceMappingURL=AbstractModule.js.map