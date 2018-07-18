## Dealing with Universal Apps ##

Share code for tablets and phones

Reuse internal components but have a different layout for each.

iOS CHANGE SIMULATOR
This can be achieved on of two ways...  (just so you know)
You can open the project in XCode and next to the run button there
is a drop down menu where you can select the simulator you want to
use

or...
Just read this shit
https://facebook.github.io/react-native/docs/running-on-simulator-ios.html

xcrun simctl list devices  // copy paste device to

react-native run-ios --simulator="device"
