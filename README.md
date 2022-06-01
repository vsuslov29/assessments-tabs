# Assessments Tabs

## Technologies used
  React Native, Redux, Typescript
  
## Description
  Render tabs with dropdowns from `json` data

## Local development

### Dependencies
* Node v12.16.3 and higher
* NPM v6.14.4 and higher

### Installing
* Fork and clone this repository
* Run `npm install` in your terminal

### Running on desktop device
* Run `npm start`
* Follow the link to devtools
* In new window click 'Run'

### Running on Android device
  #### Enable Debugging over USB
    To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to `Settings` → `About phone` → `Software information` and       then tapping the `Build number` row at the bottom seven times. You can then go back to `Settings` → `Developer options` to enable "USB debugging".
  #### Plug in your device via USB
    Let's now set up an Android device to run our React Native projects. Go ahead and plug in your device via USB to your development machine.
    Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running adb devices.
    `$ adb devices
      List of devices attached
      emulator-5554 offline   # Google emulator
      14ed2fcc device         # Physical device`
     Seeing device in the right column means the device is connected. You must have only one device connected at a time.
   #### Run your app
    Type the following in your command prompt to install and launch your app on the device:
    `$ npx react-native run-android`
      
      
