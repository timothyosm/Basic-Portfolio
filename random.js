function ticketnum() {
	var i;
	for (i = 0; i < 50; i++) {
		var ticketUpdatedate = document
			.getElementById("NewGadget0-listBody")
			.getElementsByClassName("listBodyCell")[6].innerText;

		var today = new Date();

		var date1 = new Date(ticketUpdatedate);
		console.log("%c%s", "color: #e50000", date1);
		var date2 = new Date(today);
		console.log("%c%s", "color: #aa00ff", date2);

		// To calculate the time difference of two dates
		var Difference_In_Time = date2.getTime() - date1.getTime();

		// To calculate the no. of days between two dates
		var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

		//To display the final no. of days (result)
		console.log(
			"Total number of days between dates  <br>" +
				date1 +
				"<br> and <br>" +
				date2 +
				" is: <br> "
		);
	}
}
ticketnum();
