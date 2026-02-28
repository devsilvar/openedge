# Google Sheets Integration - Troubleshooting Guide

## Problem: Form submissions not appearing in spreadsheet

### Step-by-Step Fix:

#### 1. **Run the Setup Function FIRST** ⚠️
This is the most common issue! The script needs to know which spreadsheet to use.

1. Open your Google Apps Script editor
2. In the toolbar at the top, find the function dropdown (it probably says "doPost" or "handleRequest")
3. **Change it to "setup"**
4. Click the **Run** button (▶ play icon)
5. You'll be asked to authorize the script - click **Review Permissions**
6. Choose your Google account
7. Click **Advanced** → **Go to [Project Name] (unsafe)**
8. Click **Allow**

✅ The setup function is now complete! This only needs to be done ONCE.

---

#### 2. **Deploy as Web App**
1. In Apps Script, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Form Submission Handler"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. Copy the **Web App URL** (it looks like: `https://script.google.com/macros/s/...../exec`)

---

#### 3. **Add URL to Your .env File**
1. Open your project's `.env` file
2. Add or update this line:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Replace with YOUR actual Web App URL from step 2
4. **IMPORTANT**: Restart your dev server after changing .env

---

#### 4. **Test the Integration**

**Option A: Test in Apps Script (Recommended First)**
1. In Apps Script, change function dropdown to **doPost**
2. Click **Run**
3. Check your spreadsheet - you should see a "Submissions" tab created
4. If you see headers appear, the script is working!

**Option B: Test from Your Website**
1. Make sure your dev server is running
2. Fill out and submit the health check form
3. Open browser console (F12) and check for any errors
4. Look for network requests to your Google Script URL
5. Check your spreadsheet for the new row

---

#### 5. **Common Issues & Solutions**

##### ❌ "API_URL not configured" error
- Make sure `.env` file has `VITE_GOOGLE_SCRIPT_URL=...`
- Restart your dev server (`npm run dev`)

##### ❌ Script runs but no data appears
- Did you run the `setup()` function? (Step 1)
- Check if "Submissions" sheet exists in your spreadsheet
- Check Apps Script execution logs: **View** → **Executions**

##### ❌ CORS or network errors
- Make sure "Who has access" is set to **Anyone** in deployment settings
- Redeploy the web app if you changed any settings

##### ❌ Data appears in wrong format
- The script auto-creates headers based on your first submission
- If you want to reset: Delete the "Submissions" sheet and submit again

---

## Verify Everything is Working

### Checklist:
- [ ] Ran `setup()` function in Apps Script
- [ ] Script is deployed as Web App
- [ ] Web App URL is in `.env` file as `VITE_GOOGLE_SCRIPT_URL`
- [ ] Dev server restarted after adding URL
- [ ] "Submissions" sheet exists in spreadsheet
- [ ] Test submission creates a new row

---

## Expected Spreadsheet Structure

After first submission, your spreadsheet should have:

**Sheet Name**: `Submissions`

**Headers (Row 1)**:
```
Timestamp | FormType | fullName | businessName | businessType | location | phoneNumber | email | yearsInOperation | staffSize | total12MonthRevenue | lastMonthRevenue | monthlyProfitClarity | operationalChallenges | losingValueAreas
```

**Sample Row**:
```
2/25/2026 10:30:45 | Health Check | John Doe | Azure Hotel | Hotel | Lagos | +234... | john@email.com | ...
```

---

## Still Having Issues?

1. Check Apps Script execution logs: **View** → **Executions**
2. Look for error messages in red
3. Check browser console for network errors
4. Make sure the spreadsheet isn't protected/locked

---

## Pro Tips

- The script automatically creates headers from your first submission
- Arrays (checkboxes) are saved as comma-separated values
- Each submission includes a timestamp and form type
- You can view all executions in Apps Script to debug issues
