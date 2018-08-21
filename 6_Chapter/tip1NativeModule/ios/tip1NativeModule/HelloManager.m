//
//  HelloManager.m
//  tip1NativeModule
//
//  Created by Ian Salt on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HelloManager.h"

@implementation HelloManager
//  for the App to be able to access the module from the JavaScript layer
//  we need to register it with the javascript bridge in the header file
RCT_EXPORT_MODULE();

//  getuser method accepts two arugments name and isAdmin
RCT_EXPORT_METHOD(greetUser:
  (NSString *)name isAdmin:(BOOL *)isAdmin callback:
  (RCTResponseSenderBlock) callback)  {
    NSString *greeting = [NSString stringWithFormat:
      @"Welcome %@, you %@ an administrator", name, isAdmin ?
                          @"are" : @"are not"];
  callback(@[greeting]);
}

@end

