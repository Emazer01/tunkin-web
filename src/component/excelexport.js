import React from "react";
import Button from '@mui/material/Button';
import XLSX from 'sheetjs-style';
import FileSaver from "file-saver";

export const ExportExcel = ({ excelData, fileName }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <>
            <div className="col-12 col-md-4 sticky-top p-3 bg-putihdikit">
                <button className="btn btn-success w-100" onClick={(e) => exportToExcel(fileName)} >
                    <i class="bi bi-filetype-xlsx"></i>
                    &nbsp;Simpan Excel
                </button>
            </div>

        </>
    )

}