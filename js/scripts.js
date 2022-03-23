$(document).ready(function() {
  $("#payment-info").submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    const item = $("input:radio[name=flavor]:checked").val();

    let date = $("#date").val();

    if (date)

    $("#name-receipt").text(name);
    $("#item-receipt").text(item);
    $("#date-receipt").text(date);

    $("#receipt").removeClass("hidden");
  });
});

function checkDate(date) {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = today.getMonth.toString();
  const date = today.getDate.toString();

  const dateParts = date.split("-");
  
}