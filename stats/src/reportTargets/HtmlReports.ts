import { OutputTarget } from "../Summary";
import fs from 'fs'

export class HtmlReport implements OutputTarget {
    constructor(public fileName: string = 'report.html') {}
    print(report: string): void {
        const html = `
        <div>
            <h1>Analysis Outpu</h1>
            <div>${report}</div>
        </div>`;
        fs.writeFileSync(this.fileName, html)
    }
}