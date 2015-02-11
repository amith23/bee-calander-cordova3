function isIndexDBAvailable() {
	return window.indexedDB;
}

function isLocalStorageSupport() {
	var isSupport = 1;
	if (typeof window.localStorage != 'object') {
		isSupport = 0;
	}
	return isSupport;
}

function intialize_data_set() {
	if (isLocalStorageSupport()) {
		for ( var i = 0; i < month.length; i++) {
			saveObject('' + i, month[i]);
		}

		for ( var j = 0; j < daysArray.length; j++) {
			saveObject(daysArray[j].key, daysArray[j]);
		}
	}

}

// if key is not available then add a note
// if available then append the note
function saveNote(k, n) {
	if (isLocalStorageSupport()) {
		// is key available
		var existingNote = getObject(k);
		if (typeof existingNote != "undefined") {
			// existing
			var noteArray = getObject(k).notes;
			var note = new Object();
			noteArray[noteArray.length] = n;

			note.notes = noteArray;
			deleteObject(k);
			saveObject(k, note);
		} else {
			// adding a new note
			var note = new Object();
			var notes = new Array();
			notes[0] = n;

			note.notes = notes;

			saveObject(k, note);
		}
	}
}
// ---------End of Specific API

// Generic API for data storage in local storage
function saveObject(key, value) {
	if (jQuery.type(value) == "object") {
		$.jStorage.set(key, value);
	}
}

function saveString(key, value) {
	if (jQuery.type(value) == "string") {
		$.jStorage.set(key, value);
	}
}

function getObject(key) {
	var value = $.jStorage.get(key);

	if (jQuery.type(value) == "object") {
		return value;
	}
}

function getString(key) {

	var value = $.jStorage.get(key);

	if (jQuery.type(value) == "string") {
		return value;
	}
}

function deleteObject(key) { // Key must be String
	if (jQuery.type(key) != "undefined") {
		$.jStorage.deleteKey(key);
	}
}

function flushDOMData() {
	$.jStorage.flush();
	localStorage.clear();
}

// ---------End of Generic API
