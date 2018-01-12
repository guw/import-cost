import {OutputChannel, ExtensionContext, window} from 'vscode';

export class Logger {
  private channel: OutputChannel;
  private context: ExtensionContext;
  private debug: boolean = false;

  init(context: ExtensionContext) {
    this.context = context;
    if (this.debug) {
      this.channel = window.createOutputChannel('ImportCost');
      context.subscriptions.push(this.channel);
    }
  }

  log(text: string) {
    if (this.debug) {
      this.channel.appendLine(text);
    }
  }
}