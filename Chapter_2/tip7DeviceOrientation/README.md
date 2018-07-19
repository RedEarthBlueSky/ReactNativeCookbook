### CHAPTER TWO Tip Seven ###
## Detecting Orientation Changes ##

Render different UI Components based upon the device's orientation.  
Here a menu system based on screen orientation, using the third party library

##### react-native-Orientation #####

Add library and then the configuration, go to

/android/app/src/main/java/com/tip7deviceorientation/MainActivity.ja

Update the file to look like This;
***************************************
package com.deviceorientation;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "DeviceOrientation";
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
      super.onConfigurationChanged(newConfig);
      Intent intent = new Intent("onConfigurationChanged");
      intent.putExtra("newConfig", newConfig);
      this.sendBroadcast(intent);
    }
}
