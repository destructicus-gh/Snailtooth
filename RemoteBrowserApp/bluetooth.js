var device_names = {};
var updateDeviceName = function(device) {
	console.log("device update", device);
  device_names[device.address] = device.name;
};
var removeDeviceName = function(device) {
		console.log("device remove", device);

  delete device_names[device.address];
}


var powered = false;
chrome.bluetooth.getAdapterState(function(adapter) {
  powered = adapter.powered;
  console.log(powered);
});

chrome.bluetooth.onAdapterStateChanged.addListener(
  function(adapter) {
    if (adapter.powered != powered) {
      powered = adapter.powered;
      if (powered) {
        console.log("Adapter radio is on");
      } else {
        console.log("Adapter radio is off");
      }
    }
  });

// Add listeners to receive newly found devices and updates
// to the previously known devices.
chrome.bluetooth.onDeviceAdded.addListener(updateDeviceName);
chrome.bluetooth.onDeviceChanged.addListener(updateDeviceName);
chrome.bluetooth.onDeviceRemoved.addListener(removeDeviceName);

// With the listeners in place, get the list of devices found in
// previous discovery sessions, or any currently active ones,
// along with paired devices.
chrome.bluetooth.getDevices(function(devices) {
  for (var i = 0; i < devices.length; i++) {
    updateDeviceName(devices[i]);
	console.log(devices[i]);
  }
});

// Now begin the discovery process.
chrome.bluetooth.startDiscovery(function() {
  // Stop discovery after 30 seconds.
  console.log("start discovery");
  setTimeout(function() {
    chrome.bluetooth.stopDiscovery(function() {
		console.log("timeout");
		chrome.bluetooth.getDevices(function(devices) {
		  for (var i = 0; i < devices.length; i++) {
			updateDeviceName(devices[i]);
			console.log(devices[i]);
		  }
});
	});
  }, 30000);
});

