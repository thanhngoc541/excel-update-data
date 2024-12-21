const ExcelJS = require('exceljs');

async function updatePrices() {
    const firstWorkbook = new ExcelJS.Workbook();
    await firstWorkbook.xlsx.readFile('firstFile.xlsx');
    const firstWorksheet = firstWorkbook.worksheets[0];

    const secondWorkbook = new ExcelJS.Workbook();
    await secondWorkbook.xlsx.readFile('secondFile.xlsx');
    const secondWorksheet = secondWorkbook.worksheets[0];

    const priceMap = {};

    // Map names to new prices
    secondWorksheet.eachRow((row, rowIndex) => {
        if (rowIndex > 1) {
            const name = row.getCell(1).value;
            const newPrice = row.getCell(2).value;
            priceMap[name] = newPrice;
        }
    });

    // Update prices in the first sheet
    firstWorksheet.eachRow((row, rowIndex) => {
        if (rowIndex > 1) {
            const name = row.getCell(1).value;
            if (priceMap[name] !== undefined) {
                row.getCell(2).value = priceMap[name];
            }
        }
    });

    await firstWorkbook.xlsx.writeFile('updatedFile.xlsx');
    console.log('Prices updated and saved as updatedFile.xlsx');
}

updatePrices().catch(err => console.error(err));
