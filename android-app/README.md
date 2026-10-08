# Android app

This folder turns Edunts Extreme Trucking into an Android APK. You don't need to touch it.

- The app opens the live website at thespectrumtechengine.com/edunts-extreme-trucking/, so changes
  you push to the website show up in the app straight away.
- With no signal it shows a "No signal" screen (`offline.html`) with a Try again button.
- Every push to `main` runs `.github/workflows/android-apk.yml`, which builds a
  signed APK and publishes it as a GitHub Release. The newest APK is always at:
  https://github.com/SpectrumTechEngine/edunts-extreme-trucking/releases/latest/download/edunts-extreme-trucking.apk

The signing key is NOT in this repo. It lives in GitHub secrets
(ANDROID_KEYSTORE_BASE64, ANDROID_KEYSTORE_PASSWORD) and in your backed-up
keys folder (edunts-extreme-trucking.jks).
