function paintBasicInfo() {

	document.getElementById("currentYear").innerHTML = this_year;
	document.getElementById("currentMonth").innerHTML = month[this_month].name;
	;
}

function drawGrid(day1) {

	longTouch = 0;
	var ts = "";
	var d = 0;
	var img = month[this_month].image;

	ts += "<table class='table' >";

	ts += "<tr class='active'><td>Sun</td><td>Mon</td>";
	ts += "<td>Tue</td><td>Wed</td>";
	ts += "<td>Thu</td><td>Fri</td>";
	ts += "<td>Sat</td></tr>";

	for ( var i = 0; i < num_weeks_in_month; i++) {

		var m = 7
		ts += "<tr>";
		for ( var j = 0; j < 7; j++) {
			var y = d;
			var nk = "" + this_year + "_" + this_month + "_" + (y + 1);

			var isNoteAvailable = 0;
			if ((typeof getNotes(nk) != "undefined")) {
				isNoteAvailable = 1;
			}

			var sunday = 0;
			var x = m % 7;
			if (x == 0) {
				sunday = 1;
			} else {
				sunday = 0;
			}
			m--;
			if (i === 0 && j < day1) {
				ts += " <td> "
						+ drawDiv(
								".\\img\\glyphicons\\png\\glyphicons-10-magic.png",
								"", 0.0001, 0, sunday, 0)
						+ "</td>";
			} else if (d < num_days_in_month) {
				++d;
				var k = "" + this_year + "_" + this_month + "_" + (d);
				if ((typeof getCalenderDate(k, daysArray) != "undefined")) {

					if (getCalenderDate(k, daysArray).status == "0") {

						ts += " <td> "
								+ drawDiv(
										".\\img\\glyphicons\\png\\glyphicons-249-asterisk.png",
										(d), 1, 1, sunday, isNoteAvailable)
								+ "</td>";
					} else if (getCalenderDate(k, daysArray).status == "1") {
						ts += " <td> "
								+ drawDiv(
										".\\img\\glyphicons\\png\\glyphicons-196-circle-info.png",
										(d), 1, 1, sunday, isNoteAvailable)
								+ "</td>";
					}
				} else {
					ts += " <td> "
							+ drawDiv(
									".\\img\\glyphicons\\png\\glyphicons-10-magic.png",
									(d), 0.0001, 0, sunday, isNoteAvailable)
							+ "</td>";
				}
			} else {
				ts += " <td> "
						+ drawDiv(
								".\\img\\glyphicons\\png\\glyphicons-10-magic.png",
								(""), 0.0001, 0, sunday, isNoteAvailable)
						+ "</td>";
			}
		}
		if ((d) >= days + 1 && d < maxDCount) {
			ts += " <td> "
					+ drawDiv(
							".\\img\\glyphicons\\png\\glyphicons-10-magic.png",
							"", 0.0001, 0, sunday, isNoteAvailable) + "</td>";
		}
	}

	ts += "</tr>";
	ts += "</table>";

	document.getElementById("table_div").innerHTML = ""; // clear existing
	document.getElementById("table_div").innerHTML = ts;
}

function drawDiv(img, date, op, pop, sunday, isNoteAvailable) {

	var d;
	var k = "" + this_year + "_" + this_month + "_" + date;
	var color = "";

	if (typeof getCalenderDate(k, daysArray) != "undefined") {
		d = getCalenderDate(k, daysArray);
		if (d.status == 0) {
			if (d.isPoya == 1) {
				color = "#FFFF00";
			} else if (d.isMerchantile == 1) {
				color = "#FA5858";
			} else if (d.isBank == 1) {
				color = "#81DAF5";
			} else {
				color = "#04B404";
			}
		}
	}
	var td = new Date();
	var k2 = td.getFullYear() + "_" + td.getMonth() + "_" + td.getDate();

	var u = '';
	if (k == k2) {
		u += ';text-decoration:underline;font-style: italic;'
	}
	// mark sunday in green
	var s = '';

	if (sunday == 1 && date != "") {
		if (color != "") {
			s += "<div id='r' class='row' style='background:" + color
					+ ";text-align:center +" + u
					+ "' ><div id='r1' class='col-md-8'>" + date
					+ "</div><div id='r2' class='col-md-4'>";
		} else {
			s += "<div id='r' class='row' style='background:#d0e9c6;text-align:center"
					+ u
					+ "'><div id='r1' class='col-md-8'>"
					+ date
					+ "</div><div id='r2' class='col-md-4'>";
		}
	} else {
		if (color != "") {
			s += "<div id='r' class='row' style='background:" + color
					+ ";text-align:center" + u
					+ "'><div id='r1' class='col-md-8'>" + date
					+ "</div><div id='r2' class='col-md-4'>";
		} else {
			s += "<div id='r' class='row'><div id='r1' class='col-md-8' style='"
					+ u + "'>" + date + "</div><div id='r2' class='col-md-4'>";
		}
	}

	if (isNoteAvailable == 1) {

		var img2 = ".\\img\\glyphicons\\png\\glyphicons-30-notes-2.png";
		s += "<img id='img_id2' src='"
				+ img2
				+ "' onclick='imgClicked()' style='opacity:1' data-toggle='modal' data-target='#exampleModal'></img>"

	}

	s += "<img id='img_id' src='" + img
			+ "' onclick='imgClicked()' style='opacity:" + op + "' ";

	if (pop === 1) {
		s += " data-toggle='modal' data-target='#exampleModal'>";
	} else {
		s += '>';
	}
	s += "</img>"

	s += "</div></div>";
	return s;
}

function imgClicked() {

	// get div value which contain the img
	var v = event.target.parentNode.parentNode.childNodes[0].innerHTML;

	var k = "" + this_year + "_" + this_month + "_" + v;

	document.getElementById("currentYear").innerHTML = this_year;
	document.getElementById("currentMonth").innerHTML = month[this_month].name;
	;

	var date_text = "" + this_year + " " + month[this_month].name + " " + v;

	var d;
	var notes;
	var bdy = " <div class='panel-group' id='accordion' role='tablist' aria-multiselectable='true'> ";

	var mhead = "        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>";
	mhead += date_text;

	if (typeof getNotes(k) != "undefined") {
		notes = getNotes(k);

		mhead += "</br>"
		bdy += "  <div class='panel panel-default'><div class='panel-heading' role='tab' id='headingOne'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>My Notes / Events </a></h4></div><div id='collapseOne' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingOne'<div class='panel-body'>";

		var tble = "  <table class='table' style='word-wrap: break-word;text-align: center;'>";
		tble += "<tr style='text-align: center;'><td width='60%'><img id='img_id2' src='.\\img\\glyphicons\\png\\glyphicons-30-notes-2.png' style='opacity:1'></img></td><td width='20%'><img id='img_id2' src='.\\img\\glyphicons\\png\\glyphicons-55-clock.png' style='opacity:1'></img></td><td width='20%'><img id='img_id2' src='.\\img\\glyphicons\\png\\glyphicons-597-activity.png' style='opacity:1'></img></td></tr>";

		for ( var i = 0; i < notes.notes.length; i++) {
			var o = notes.notes[i];
			var d_n = o.note;
			var d_t = o.time;
			var d_u = o.uid;
			var d_k = o.key;
			if (typeof d_n == 'undefined') {

				d_n = o.notes[i].note;
				d_t = o.notes[i].time;
				d_u = o.notes[i].uid;
				d_k = o.notes[i].key;
			}
			tble += "<tr><td>"
					+ d_n
					+ "</td><td>"
					+ d_t
					+ "</td><td><img id='img_id3' onclick='deleteNode()' src='.\\img\\glyphicons\\png\\glyphicons-198-remove.png' style='opacity:1'></img></td><td style='display: none;'>"
					+ d_k + "</td><td style='display: none;'>" + d_u
					+ "</td></tr>";
		}
		tble += "<table>";
		bdy += tble;
		bdy += "</div></div></div>";
	}
	if (typeof getCalenderDate(k, daysArray) != "undefined") {
		d = getCalenderDate(k, daysArray);

		bdy += "  <div class='panel panel-default'><div class='panel-heading' role='tab' id='headingOne'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>Today is ...</a></h4></div><div id='collapseOne' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingOne'<div class='panel-body'>";
		bdy += "</br>";
		bdy += d.info;
		bdy += "</div></div></div>";
		mhead += "</br>"
		if (d.isMerchantile == 1) {
			mhead += "<span class='label label-danger'>Mecantile</span>";
		}
		if (d.isPoya == 1) {
			mhead += "    <span class='label label-warning'>Poya Day</span>";
		}
		if (d.isBank == 1) {
			mhead += "    <span class='label label-info'>Bank</span>";
		}
		if (d.isPublic == 1) {
			mhead += "    <span class='label label-success'>Public</span>";
		}
	}
	bdy += "</div>";
	document.getElementById("mhead").innerHTML = mhead;
	document.getElementById("mbody").innerHTML = bdy;

}

function forward() {

	++currentMonthIndex;

	if (this_month == 11 && currentMonthIndex != 11) {
		this_year += 1;
	}
	num_days_in_month = new Date(this_year, (currentMonthIndex + 1) - 12, 0)
			.getDate();
	days = num_days_in_month;
	var fd = new Date(today.getFullYear(), currentMonthIndex, 1).getDay();
	var x = (num_days_in_month - (7 - fd));
	num_weeks_in_month = Math.ceil(x / 7) + 1

	maxDCount = (num_weeks_in_month * 7);

	var d1 = new Date(today.getFullYear(), currentMonthIndex, 1);
	this_month = d1.getMonth();
	paintBasicInfo();
	drawGrid(fd);

}

function redrawCurrentPage() {
	num_days_in_month = new Date(this_year, (currentMonthIndex + 1) - 12, 0)
			.getDate();

	days = num_days_in_month;

	var fd = new Date(today.getFullYear(), currentMonthIndex, 1).getDay();
	var x = (num_days_in_month - (7 - fd));
	num_weeks_in_month = Math.ceil(x / 7) + 1

	maxDCount = (num_weeks_in_month * 7);

	var d1 = new Date(today.getFullYear(), currentMonthIndex, 1);
	this_month = d1.getMonth();
	paintBasicInfo();

	drawGrid(fd);

}

function home() {
	today = new Date();

	this_month = today.getMonth();
	// this_month = 0;
	this_year = today.getFullYear();
	// this_year += 1;
	currentMonthIndex = this_month;

	num_days_in_month = new Date(this_year, this_month + 1, 0).getDate();
	days = num_days_in_month;
	var fd = new Date(this_year, this_month, 1).getDay();
	var x = (num_days_in_month - (7 - fd));
	num_weeks_in_month = Math.ceil(x / 7) + 1

	maxDCount = (num_weeks_in_month * 7);

	var d1 = new Date(this_year, this_month, 1);
	this_month = d1.getMonth();
	paintBasicInfo();
	drawGrid(fd);
	init();
}

function backward() {

	--currentMonthIndex;
	if (this_month == 0 && currentMonthIndex != 0) {
		this_year -= 1;
	}
	num_days_in_month = new Date(this_year, (currentMonthIndex + 1) - 12, 0)
			.getDate();
	days = num_days_in_month;

	var fd = new Date(today.getFullYear(), currentMonthIndex, 1).getDay();
	var x = (num_days_in_month - (7 - fd));
	num_weeks_in_month = Math.ceil(x / 7) + 1

	maxDCount = (num_weeks_in_month * 7);

	var d1 = new Date(today.getFullYear(), currentMonthIndex, 1);
	this_month = d1.getMonth();
	paintBasicInfo();
	drawGrid(fd);

}
function getNotes(key) {
	var o;
	// access from local storage if available
	if (isLocalStorageSupport()) {

		key = "N_" + key;
		o = getObject(key);
	}
	return o;
}
function getCalenderDate(key, days) {
	var o;
	// access from local storage if available
	if (isLocalStorageSupport()) {
		o = getObject(key);
	}
	{
		for ( var i = 0; i < days.length; i++) {
			var d = days[i];
			if (d.key == key) {
				o = d;
				break;
			}
		}
	}
	return o;
}

var startx = 0;
var starty = 0;
var isMoveUp = 0;
var isMoveDown = 0;
var isMoveRight = 0;
var isMoveLeft = 0;

var startTime, endTime;
var gbMove = false;

function init() {

	document.getElementById('table_div').addEventListener('touchstart',
			function(ev) {

				startx = 0;
				starty = 0;
				var isMoveUp = 0;
				var isMoveDown = 0;
				var isMoveRight = 0;
				var isMoveLeft = 0;

				startx = ev.changedTouches[0].pageX;
				starty = ev.changedTouches[0].pageY;

				startTime = new Date().getTime();
				gbMove = false;
			}, false);

	document.getElementById('table_div').addEventListener('touchmove',
			function(ev) {

				gbMove = true;
				var isMoveUp = 0;
				var isMoveDown = 0;
				var isMoveRight = 0;
				var isMoveLeft = 0;

				var touchobj = ev.changedTouches[0]
				var distx = parseInt(touchobj.clientX) - startx;
				var disty = parseInt(touchobj.clientY) - starty;

				if (distx > 0 && distx > 5) {
					isMoveRight = 1;
				}
				if (distx < 0 && distx < -5) {
					isMoveLeft = 1;
				}

				if (disty > 0 && disty > 5) {
					isMoveUp = 1;
					isMoveDown
				}
				if (disty < 0 && disty < -5) {
					isMoveDown = 1;
				}


				if (isMoveLeft == 1) {
					forward();
				}
				if (isMoveRight == 1) {
					
					backward();
				}

			}, false);

	document
			.getElementById('table_div')
			.addEventListener(
					'touchend',
					function(ev) {

						endTime = new Date().getTime();

						if (!gbMove
								&& Math.ceil((endTime - startTime) / 350) > 1) {

							var v = null;
							v = event.target.parentNode.parentNode.childNodes[0].innerHTML;

							if (typeof v == 'undefined') {
								v = event.target.parentNode.childNodes[0].innerHTML;
							}

							noteKey = "N_" + this_year + "_" + this_month + "_"
									+ v;

							openNotesModal();
							longTouch = 1;
						}
					}, false);

}

function openNotesModal() {
	$('#noteModal').modal('show');
}

function addNote() {

	var notifyRange = $('#notify-range').val();
	var note = $('#message-text').val();
	var notifyTime = $('#time_pick').val();

	var d = new Date();
	var uid = '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours()
			+ d.getMilliseconds();
	var n = newNote(note, notifyTime, notifyRange, noteKey, uid)
	saveNote(noteKey, n);

}

function deleteNode() {

	var note = event.target.parentNode.parentNode.childNodes[0].innerHTML;
	var time = event.target.parentNode.parentNode.childNodes[1].innerHTML;
	var nk = event.target.parentNode.parentNode.childNodes[3].innerHTML;
	var uid = event.target.parentNode.parentNode.childNodes[4].innerHTML;

	var o = getObject(nk);
	var notes = o.notes;

	if (notes.length > 0) {

		var a = new Array();

		for ( var i = 0; i < notes.length; i++) {
			var n = notes[i];

			// if note is available
			if (typeof uid != 'undefined') {
				// match note
				if (uid === n.uid) {
				} else {
					a[a.length] = n;
				}
			}
		}

		deleteObject(nk);

		var naLength = a.length;

		for ( var i = 0; i < naLength; i++) {
			saveNote(nk, a[i]);
		}

	}
	$('#exampleModal').modal('hide');
	redrawCurrentPage();
}