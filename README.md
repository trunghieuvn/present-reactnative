# present-reactnative
React Native By Facebook

## how to run 

setup lib: 
```
npm i
``` 
run android: 
```
react-native run-android
```
run ios: 
```
react-native run-ios
```

## setup build apk offline 

mkdir android/app/src/main/assets

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

cd android ^ ./gradlew assembleDebug 
