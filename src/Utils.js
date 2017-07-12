var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

var getFastingTime = function (from, to) {

  var start = new Date(from);
  var end = new Date(to);

  // milliseconds
  var diff = end.getTime() - start.getTime();

  // seconds
  var secs = Math.round(diff / 1000);

  // minutes
  var mins = secs / 60;

  // hrs
  var hrs = Math.round(mins / 60);

  // remaining mins after hrs
  var remainingMins = Math.round(mins % 60);

  // remaining secs after mins
  var remainingSecs = Math.round(secs % 60);

  var fastingFor = "";
  if (hrs !== 0)
    fastingFor += `${hrs}h `;
  if (remainingMins !== 0)
    fastingFor += `${remainingMins}m`;
    fastingFor += `${remainingSecs}s`;

  return fastingFor;
}

export {
  ID,
  getFastingTime
};