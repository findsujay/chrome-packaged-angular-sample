# Chrome Packaged App with Angular
A sample project to demonstrate integration of Angular in a chrome packaged app. Using the latest version of Chrome OS results in console errors on the app, but using an older version of the OS causes no errors.

# Build
run `npn run build`<br />
This will create the build files in chrome-package/dist

# Deploy
1. After building, copy the entire chrome-package over to a Chromebook. Make sure the Chrome OS version is 109 or higher.
2. On the Chromebook, side load the app. To side load
   - Open Chrome browser. Go to chrome://extensions. Enable Developer mode via the toggle on the right.
   - Click on the "Load Unpacked" button on the left. 
   - On the dialog box, select the chrome-package folder (that you had copied over earlier).
   - You should now see the app listed on the Extensions page.
3. Launch the Sample App from the tray. You will notice the UI loads.
4. On the page, alt-click to show the contextual menu. Click on "Inspect". This will launch the console.
5. You will see errors.
6. If you downgrade to OS version 108 or lower and follow the same steps 1 through 5, you will see no console errors.
