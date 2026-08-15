# Setup Guide

## Replace the current GitHub project in one upload

1. Download and unzip `Keithogram-Challenge-Complete.zip`.
2. Open the existing `Keithogram-Challenge` repository on GitHub.
3. On the Code page, choose **Add file**, then **Upload files**.
4. Drag all eight unzipped files into the upload area. Keep the exact filenames.
5. Enter the commit message `Replace complete Keithogram website`.
6. Choose **Commit directly to the main branch**, then **Commit changes**.
7. Open the repository's **Actions** tab and confirm the Pages deployment finishes successfully.
8. Open the published site and perform a hard refresh (`Ctrl+F5` on Windows or `Command+Shift+R` on macOS).

## GitHub Pages settings, if needed

1. Open **Settings**, then **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**.
4. Save.

## Optional shared Google Sheets scoreboard

Without this section, scores are saved separately in each browser.

1. Create a blank Google Sheet.
2. Rename its first tab exactly `Scores`.
3. Put these headings in row 1, one per column:
   `Timestamp | Name | QuizId | QuizTitle | Score | Total | Percentage | Maritime | MaritimeTotal`
4. In the sheet choose **Extensions**, then **Apps Script**.
5. Replace the editor contents with `google-apps-script.gs` and save.
6. Choose **Deploy**, **New deployment**, type **Web app**.
7. Set **Execute as** to yourself and access to **Anyone**.
8. Deploy, approve the requested permissions and copy the `/exec` web app URL.
9. Edit `config.js` and paste that URL between the quotes in `webAppUrl`.
10. Commit the changed `config.js` to GitHub.

The browser leaderboard works even when `webAppUrl` is blank.
