# Sample React Native for CDS Participant

This is an [Sample CDS App](https://clinicaldatas.net) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Library Requirement
   ```bash
   node version 18
   react native version 0.76.2
   Java 17
   ```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## to enable build an Android, iOS archives locally, run following command to download necessary files for android.
   ````bash
   npx expo run:android
   npx expo run:ios
   ````

## Generate new keytool in order to publish android app
   ````bash
      keytool -genkey -v -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -storepass cdspassword -keypass cdspassword -alias cdsalias -keystore release.keystore -dname "CN=net.clinicaldatas.demo.reactnative,OU=,O=,L=,S=,C=US"
   ````

## Generate APK in release format
   ````bash
   cd android
   ./gradlew assembleRelease
   ````
The apk file will be generated in folder android/app/build/outputs/apk/app-release.apk.

# Setup ios locally
   ````bash
   npx expo run:ios
   ````
Above command to initially setup ios directory download and install necessary files using CocoaPods tool and start running on iOS emulator if xcode is set up correctly before.