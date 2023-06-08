# GoogleBook
Google book search api with react-native

## Prerequisites

The following programs should be installed on your machine:

- [Node](https://nodejs.org) (version 10.15.0 or newer)
- [Yarn](https://yarnpkg.com)
- [Git](https://git-scm.com/)

You should also note that you will in some cases need:

- [XCode](https://developer.apple.com/xcode/) (for iOS development)
  **and/or**
- [Android Studio](https://developer.android.com/studio) (for Android development)

## Setting up

First clone the repository.

Run `yarn install` or `npm install` to install the dependencies used in this project.

We use [CocoaPods](https://cocoapods.org/) for installing native iOS libraries:

```
cd ios
pod install
```

In some cases, where the Cocoa Pods aren't working, use this command:

`pod deintegrate`

Then return to the `ios` folder and try to `pod install` again.

## Start up

**Start server:**

```
yarn start-server # or npm run start-server
```

This will start up the development server on your local environment, either in Android Studio _(Android)_ or in XCode _(iOS)_. This process requires that you press the "play"-button in either Android Studio or XCode.

---

**Run device simulators:**

Please note that using these commands below does not require the `yarn start-server` command.

```
yarn run-ios
#or
yarn run-android
```

---

## Google API

The API and Swagger documentation are available [here](https://developers.google.com/books/docs/v1/using).


## Built with

Technologies used to create this project:

- [React Native](https://reactnative.dev/blog/)


## Version used for below softwares.
 Binaries:
    Node: 18.16.0 - /usr/local/bin/node
    Yarn: 1.22.19 - /usr/local/bin/yarn
    npm: 9.5.1 - /usr/local/bin/npm
    Watchman: 2023.05.22.00 - /usr/local/bin/watchman
  Managers:
    CocoaPods: 1.12.1 - /usr/local/bin/pod
npmPackages:
    react: 18.2.0 => 18.2.0 
    react-native: 0.71.8 => 0.71.8 