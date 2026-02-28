# 📋 Google Sheets Integration Setup Guide

This guide will help you set up the Google Apps Script integration for form submissions and dashboard display.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"Open Edge Form Submissions"**
4. The sheet will be named **"Submissions"** by default (or rename it)

### Step 2: Deploy Google Apps Script

1. In your spreadsheet, click **Extensions** → **Apps Script**
2. Delete any default code in the editor
3. Copy **ALL** the code from `google-apps-script.gs` in your project
4. Paste it into the Apps Script editor
5. Click the **💾 Save** icon (name it "Form Handler")
6. Run the `setup()` function once:
   - Select `setup` from the function dropdown
   - Click **▶ Run**
   - Authorize the script (click "Review Permissions" → Select your account → "Allow")

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ → Select **"Web app"**
3. Settings:
   - **Description**: "Form submission handler"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. **COPY THE WEB APP URL** (looks like: `https://script.google.com/macros/s/ABC.../exec`)

### Step 4: Configure Your App

1. In your project root, create a `.env` file (copy from `.env.example`)
2. Paste your Web App URL:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec
   ```
3. Save the file

### Step 5: Test It!

1. Run your app: `npm run dev`
2. Go to a form (Health Check or Training Application)
3. Fill it out and submit
4. Check your Google Sheet - you should see the data!
5. Go to `/admin` route to see the dashboard

---

## 📊 How It Works

### Form Submission Flow

```
User fills form → Submit button clicked
    ↓
Form data sent to Google Apps Script
    ↓
Script adds row to Google Sheet (with timestamp)
    ↓
Success message shown to user
```

### Dashboard Display Flow

```
Admin visits /admin
    ↓
React fetches data from Google Apps Script
    ↓
Script reads all rows from Google Sheet
    ↓
Dashboard displays submissions in table
    ↓
Admin can view details or delete submissions
```

---

## 🔧 Features Implemented

### ✅ Google Apps Script (`google-apps-script.gs`)

- **POST** - Accepts form submissions
- **GET** - Returns all submissions for dashboard
- **DELETE** - Removes submissions by row ID
- **Auto-header creation** - Creates column headers from first submission
- **Array handling** - Converts checkbox arrays to comma-separated strings
- **Timestamp tracking** - Adds submission time automatically

### ✅ Forms

- **Health Check Form** (`/health-check-form`)
  - Contact info, business details, operational challenges
  - Array fields: `operationalChallenges`, `losingValueAreas`
- **Training Application Form** (`/training-form`)
  - Personal info, experience, role preferences
  - Comprehensive application questions

### ✅ Admin Dashboard (`/admin`)

- **Stats Overview** - Total submissions, by type, latest
- **Filter by Type** - All / Training / Health Check
- **View Details** - Modal popup with full submission
- **Delete Submissions** - Remove unwanted entries
- **Refresh Button** - Reload data from Google Sheets
- **Responsive Design** - Works on mobile, tablet, desktop

---

## 📝 Google Sheet Structure

After the first submission, your sheet will have these columns:

### Health Check Submissions

```
Timestamp | FormType | fullName | businessName | businessType | location |
phoneNumber | email | yearsInOperation | staffSize | total12MonthRevenue |
lastMonthRevenue | monthlyProfitClarity | operationalChallenges | losingValueAreas
```

### Training Application Submissions

```
Timestamp | FormType | fullName | phoneNumber | email | currentRole |
yearsOfExperience | currentEmployer | targetRole | ... (more fields)
```

---

## 🐛 Troubleshooting

### Problem: Forms not submitting

**Solution:**

1. Check `.env` file has correct `VITE_GOOGLE_SCRIPT_URL`
2. Verify the script is deployed as "Anyone" can access
3. Check browser console for errors

### Problem: Dashboard shows "No submissions"

**Solution:**

1. Make sure at least one form has been submitted
2. Click the "Refresh" button
3. Check Google Sheet has data
4. Verify Web App URL in `.env` is correct

### Problem: "Network error" when submitting

**Solution:**

1. Check internet connection
2. Verify Google Apps Script is deployed (not just saved)
3. Make sure script has "Anyone" access permission

### Problem: Need to redeploy script after changes

**Solution:**

1. Make your changes in Apps Script editor
2. Save (💾)
3. Click **Deploy** → **Manage deployments**
4. Click ✏️ Edit on your existing deployment
5. Change **Version** to "New version"
6. Click **Deploy**
7. URL stays the same - no need to update `.env`

---

## 🔒 Security Notes

- The script is set to "Anyone" can access because forms need to submit without authentication
- Only the script owner can view/edit the spreadsheet
- Consider adding basic authentication if needed
- Never commit your `.env` file to git (it's in `.gitignore`)

---

## 📈 Next Steps

1. **Test both forms** thoroughly
2. **Customize the spreadsheet** - Add formulas, conditional formatting, etc.
3. **Set up email notifications** - Apps Script can email you on new submissions
4. **Export data** - Download as CSV/Excel anytime from Google Sheets
5. **Add analytics** - Track submission rates over time

---

## 💡 Pro Tips

- **Backup your data**: File → Download → Excel/CSV regularly
- **Use filters**: Google Sheets has powerful filtering/sorting
- **Create charts**: Visualize submission trends
- **Share access**: Add team members to the spreadsheet
- **Version control**: Apps Script has version history

---

## ✅ Verification Checklist

- [ ] Google Sheet created
- [ ] Apps Script code pasted
- [ ] `setup()` function run successfully
- [ ] Web app deployed with "Anyone" access
- [ ] `.env` file created with correct URL
- [ ] Test submission successful
- [ ] Data appears in Google Sheet
- [ ] Dashboard at `/admin` shows data
- [ ] Can view submission details
- [ ] Can delete submissions

---

**🎉 You're all set! Your form submission system is ready to use!**
