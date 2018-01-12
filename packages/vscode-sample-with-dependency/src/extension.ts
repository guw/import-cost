import {ExtensionContext} from 'vscode';
import {Logger} from 'vscode-import-cost/out/src/logger';

const logger = new Logger();
export function activate(context: ExtensionContext) {
  try {
    logger.init(context);
    logger.log('starting...');
  } catch (e) {
    logger.log('wrapping error: ' + e);
  }
}

export function deactivate() {
  logger.log('stopping...');
}
