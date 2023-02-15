/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function (launchData) {
    //
    // Launch app main window
    //
    chrome.app.window.create(
      'src/index.html',
      {
        id: 'mainWindow',
        alwaysOnTop: false,
      }
    );
  });