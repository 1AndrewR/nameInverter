const nameInverter = function (name) {
  if (name === undefined) {
    throw new Error('Error');
  }
  if (name.trim() === "") {
    return "";
  }
  const trimmedName = name.trim();
  const nameParts = trimmedName.split(" ");
  const honorifics = ["Mr.", "Mrs.", "Ms.", "Dr."];

  if (nameParts.length === 1) {
    return honorifics.includes(nameParts[0]) ? "" : nameParts[0];
  }
  if (honorifics.includes(nameParts[0])) {
    if (nameParts.length === 2) {
      return `${nameParts[0]} ${nameParts[1]}`;
    }
    return `${nameParts[0]} ${nameParts[2]}, ${nameParts[1]}`;
  }
  return `${nameParts[1]}, ${nameParts[0]}`;
};

module.exports = nameInverter;