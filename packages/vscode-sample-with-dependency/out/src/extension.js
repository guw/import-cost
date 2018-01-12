"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("vscode-import-cost/out/src/logger");
function activate(context) {
    try {
        logger_1.logger.init(context);
        logger_1.logger.log('starting...');
    }
    catch (e) {
        logger_1.logger.log('wrapping error: ' + e);
    }
}
exports.activate = activate;
function deactivate() {
    logger_1.logger.log('stopping...');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map