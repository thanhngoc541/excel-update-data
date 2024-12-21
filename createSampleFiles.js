const XLSX = require('xlsx');
const fs = require('fs');

// Sample data for first file (old prices)
const firstFileData = [
    { Name: 'Apple', Price: 1.5 },
    { Name: 'Banana', Price: 0.8 },
    { Name: 'Orange', Price: 1.2 },
    { Name: 'Grapes', Price: 2.0 },
];

// Sample data for second file (new prices)
const secondFileData = [
    { Name: 'Apple', 'New Price': 1.8 },
    { Name: 'Banana', 'New Price': 0.9 },
    { Name: 'Orange', 'New Price': 1.3 },
];

// Write first file
const firstWorkbook = XLSX.utils.book_new();
const firstWorksheet = XLSX.utils.json_to_sheet(firstFileData);
XLSX.utils.book_append_sheet(firstWorkbook, firstWorksheet, 'Prices');
XLSX.writeFile(firstWorkbook, 'firstFile.xlsx');

// Write second file
const secondWorkbook = XLSX.utils.book_new();
const secondWorksheet = XLSX.utils.json_to_sheet(secondFileData);
XLSX.utils.book_append_sheet(secondWorkbook, secondWorksheet, 'NewPrices');
XLSX.writeFile(secondWorkbook, 'secondFile.xlsx');

console.log('Sample Excel files created: firstFile.xlsx and secondFile.xlsx');
