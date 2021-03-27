const isNumeric = (subject, permittedLength) => {
  if (/\D/.test(subject)){ // not single digit numeric
    return false;
  } else if (subject.length !== permittedLength) { // not length
    return false;
  } else if (/\s/g.test(subject)){ // has whitespace
    return false;
  } else if (isNaN(subject)) { // is nan
    return false;
  } else {
    return true;
  }
};

const isString = (subject, permittedLength) => {
  if (subject.length > permittedLength){ // is greater than length
    return false;
  } else if (subject.length <= 0){ // smaller or equal than length
    return false;
  } else {
    return true;
  }
};

export {isNumeric, isString};