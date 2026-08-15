const SHEET_NAME = 'Scores';
const HEADERS = ['Timestamp','Name','QuizId','QuizTitle','Score','Total','Percentage','Maritime','MaritimeTotal'];
function doGet(){return json_({ok:true,message:'Keithogram scoreboard is available.'});}
function doPost(e){try{const sheet=SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);if(!sheet)throw new Error('Create a sheet tab named Scores.');if(sheet.getLastRow()===0)sheet.appendRow(HEADERS);const d=JSON.parse(e.postData.contents);sheet.appendRow([new Date(),clean_(d.Name),Number(d.QuizId),clean_(d.QuizTitle),Number(d.Score),Number(d.Total),Number(d.Percentage),Number(d.Maritime),Number(d.MaritimeTotal)]);return json_({ok:true});}catch(err){return json_({ok:false,error:String(err)});}}
function clean_(v){return String(v||'').replace(/^[=+\-@]/,"'").slice(0,100);}
function json_(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);}
