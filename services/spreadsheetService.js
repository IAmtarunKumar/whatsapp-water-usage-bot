const xlsx = require('xlsx');

const saveDataToSpreadsheet = (date, value) => {
  const filePath = './water_usage_data.xlsx';
  let workbook;
  let worksheet;

  try {
    workbook = xlsx.readFile(filePath);
    worksheet = workbook.Sheets['Data'];
  } catch (err) {
    workbook = xlsx.utils.book_new();
    worksheet = xlsx.utils.aoa_to_sheet([['Date', 'Value']]);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Data');
  }

  const newRow = [date, value];
  xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

  xlsx.writeFile(workbook, filePath);
};

module.exports = {
  saveDataToSpreadsheet,
};
