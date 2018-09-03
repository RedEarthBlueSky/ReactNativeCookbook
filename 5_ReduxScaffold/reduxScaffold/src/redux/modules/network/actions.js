//  Network Module action
//  action will trigger when the network status changes.

export const NETWORK_CHANGE = 'network/change';

export function setConnectivity(network) {
  const status = network.toUpperCase();
  return {
    type:  NETWORK_CHANGE,
    payload: {
      isOnline: status !== 'NONE',
      isOffline: status === 'NONE',
    }
  };
}
