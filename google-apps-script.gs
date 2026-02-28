// ============================================
// GOOGLE APPS SCRIPT - DEPLOY AS WEB APP
// ============================================
// Instructions:
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Paste this code
// 4. Click Deploy > New Deployment
// 5. Select "Web app"
// 6. Set Execute as: "Me"
// 7. Set Who has access: "Anyone" (for form submissions) or "Only myself" (if you add auth)
// 8. Copy the Web App URL
// 9. Paste it in your .env file as VITE_GOOGLE_SCRIPT_URL=your_url
// ============================================

const SHEET_NAME = "Submissions";
const SCRIPT_PROP = PropertiesService.getScriptProperties();

function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  SCRIPT_PROP.setProperty("key", doc.getId());
}

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
    const sheet = doc.getSheetByName(SHEET_NAME) || doc.insertSheet(SHEET_NAME);

    // GET request - return all data
    if (e.parameter.action === "get") {
      const rows = sheet.getDataRange().getValues();
      const headers = rows.shift();
      
      const data = rows.map((row, index) => {
        const obj = {};
        headers.forEach((header, i) => {
          obj[header] = row[i];
        });
        obj.id = index + 2; // Row number in sheet (1-indexed + header)
        return obj;
      });

      return ContentService
        .createTextOutput(JSON.stringify({ status: "success", data }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // GET request - return visitor stats
    if (e.parameter.action === "getVisitors") {
      const visitors = getVisitors();
      return ContentService
        .createTextOutput(JSON.stringify({ status: "success", data: visitors }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // POST request - add new row
    if (e.parameter.action === "post") {
      const { payload } = e.parameter;
      const values = JSON.parse(payload);
      
      // Initialize headers if sheet is empty
      if (sheet.getLastRow() === 0) {
        const headers = ["Timestamp", "FormType"];
        Object.keys(values).forEach(key => {
          if (key !== "formType") {
            headers.push(key);
          }
        });
        sheet.appendRow(headers);
      }
      
      // Get current headers
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      
      // Build row matching header order
      const row = [];
      headers.forEach(header => {
        if (header === "Timestamp") {
          row.push(new Date());
        } else if (header === "FormType") {
          row.push(values.formType || "unknown");
        } else {
          // Handle arrays (checkboxes) by converting to comma-separated string
          const value = values[header];
          if (Array.isArray(value)) {
            row.push(value.join(", "));
          } else {
            row.push(value !== undefined ? value : "");
          }
        }
      });

      sheet.appendRow(row);

      return ContentService
        .createTextOutput(JSON.stringify({ status: "success", message: "Submission saved!" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // POST request - log visitor
    if (e.parameter.action === "logVisitor") {
      logVisitor(e.parameter.payload);
      return ContentService
        .createTextOutput(JSON.stringify({ status: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // DELETE request - delete a row
    if (e.parameter.action === "delete") {
      const rowNumber = parseInt(e.parameter.id);
      
      if (rowNumber > 1) {
        sheet.deleteRow(rowNumber);
        return ContentService
          .createTextOutput(JSON.stringify({ status: "success", message: "Row deleted!" }))
          .setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService
          .createTextOutput(JSON.stringify({ status: "error", message: "Cannot delete header!" }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // POST request - update submission status
    if (e.parameter.action === "updateStatus") {
      const { id, status, starred } = JSON.parse(e.parameter.payload);
      const rowNumber = parseInt(id);
      
      if (rowNumber > 1) {
        const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        
        // Find Status and Starred columns
        const statusCol = headers.indexOf("Status") + 1;
        const starredCol = headers.indexOf("Starred") + 1;
        
        // Add columns if they don't exist
        if (statusCol === 0) {
          sheet.getRange(1, sheet.getLastColumn() + 1).setValue("Status");
          sheet.getRange(1, sheet.getLastColumn() + 2).setValue("Starred");
        }
        
        // Get updated headers
        const updatedHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        const newStatusCol = updatedHeaders.indexOf("Status") + 1;
        const newStarredCol = updatedHeaders.indexOf("Starred") + 1;
        
        if (status !== undefined && newStatusCol > 0) {
          sheet.getRange(rowNumber, newStatusCol).setValue(status);
        }
        if (starred !== undefined && newStarredCol > 0) {
          sheet.getRange(rowNumber, newStarredCol).setValue(starred ? "true" : "false");
        }
        
        return ContentService
          .createTextOutput(JSON.stringify({ status: "success", message: "Status updated!" }))
          .setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService
          .createTextOutput(JSON.stringify({ status: "error", message: "Cannot update header!" }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: "Invalid action" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// ============================================
// SHEET COLUMN HEADERS (Row 1)
// ============================================
// These MUST match exactly. The script will auto-create if not present:
// Timestamp | FormType | [form fields...]
// ============================================

// ============================================
// VISITOR TRACKING (Add these new functions)
// ============================================

function logVisitor(payload) {
  const doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
  let sheet = doc.getSheetByName('VisitorLog');
  
  // Auto-create sheet if it doesn't exist
  if (!sheet) {
    sheet = doc.insertSheet('VisitorLog');
    sheet.appendRow(['Timestamp', 'PageURL', 'Referrer', 'DeviceType', 'Browser', 'SessionID']);
  }
  
  const data = JSON.parse(payload);
  sheet.appendRow([
    data.timestamp,
    data.pageURL,
    data.referrer,
    data.deviceType,
    data.browser,
    data.sessionID
  ]);
}

function getVisitors() {
  const doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
  const sheet = doc.getSheetByName('VisitorLog');
  
  if (!sheet) {
    return [];
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const visitors = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const visitor = {};
    for (let j = 0; j < headers.length; j++) {
      visitor[headers[j]] = row[j];
    }
    visitor.id = i;
    visitors.push(visitor);
  }
  
  return visitors;
}
