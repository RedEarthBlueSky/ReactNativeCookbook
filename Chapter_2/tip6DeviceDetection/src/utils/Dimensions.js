import { Dimensions as RNDimensions, Alert } from 'react-native';

//  Tablet Portrait Dimensions
const tablet = {
  width: 552,
  height: 960,
};

class Dimensions {

  isPhone() {
    const dm = this.getPortraitDimensions();
    return dm.height < tablet.height;
  }

  isTablet() {
    const dm = this.getPortraitDimensions();
    return dm.height >= tablet.height;
  }

  getPortraitDimensions() {
    const { width, height } = RNDimensions.get('window');
    return {
      width: Math.min(width, height),
      height: Math.max(width, height),
    };
  }

  getLandscapeDimensions() {
    const { width, height } = RNDimensions.get('window');
    return {
      width: Math.max(width, height),
      height: Math.min(width, height),
    };
  }
}

const dimensions = new Dimensions();
export default dimensions;
