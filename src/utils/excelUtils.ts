
import * as XLSX from 'xlsx';

export class ExcelHelper {

    static readExcel(filePath: string, sheetName?: string): any[] {

        // Read the Excel workbook
        const workbook = XLSX.readFile(filePath ,{ type: 'buffer' });

        // Get the specified sheet or the first sheet
        const selectedSheet = sheetName || workbook.SheetNames[0];

        // Get worksheet
        const worksheet = workbook.Sheets[selectedSheet];

        if (!worksheet) {
            throw new Error(`Sheet "${selectedSheet}" not found`);
        }

        // Convert worksheet data into JSON objects
        const records = XLSX.utils.sheet_to_json(worksheet);

        return records;
    }
}
