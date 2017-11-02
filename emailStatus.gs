/*
 * Sends email when the status of an item is updated.
 */ 
function docEdited(e){
  var statusClm = 3.0;
  var rowsUsed = 2.0;

  // I am using my third column as for status holder. And I am using the first two rows for Title and other things. 
  if((e.range.getRow() > (rowsUsed + 1)) && (e.range.getColumn() == statusClm)){
    
    // Setting things up. 
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getRange(sheet.getSheetName() + "!" + e.range.getRow() + ":" + e.range.getRow()).getValues();
    var docName = SpreadsheetApp.getActive().getName();
    var color = "green";
    
    // Getting the link of the document.
    var link = SpreadsheetApp.getActiveSpreadsheet().getUrl() + "#gid=" +  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getSheetId();
    
    // Setting the status color.
    if(data[0][2] == "PENDING"){
      color = "orange";
    }else if(data[0][2] == "SUBMITTED"){
      color = "green";
    }else{
      color = "red";
    }
    
    // Our awesome email to be sent.
    var body = "Hi,<br>The Item: <b>'" + data[0][0] + "'</b> status was updated to " + "<b style='color:" + color + "'>" + data[0][2] + "</b><br>"
    + "To have a detailed look at the timeline and other information, visit: <a href='" + link + "'>" + link 
    + "</a><br><br><b>Best Regards,</b><br>Khaled Mohammad";
    
    // Send Email.
    MailApp.sendEmail({
      to: "itskhaledmohammad@gmail.com",
      subject: "The status of an item of '" + docName + "' was updated",
      htmlBody: body
    });
    
  }       
}