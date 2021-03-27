const isNumeric = (subject, permittedLength) => {
  if (/\D/.test(subject)){ // not single digit numeric
    return false;
  } else if (subject.length !== permittedLength) {
    return false;
  } else if (/\s/g.test(subject)){ // has whitespace
    return false;
  } else if (isNaN(subject)) {
    return false;
  } else {
    return true;
  }
};

const isString = (subject, permittedLength) => {
  if (subject.length > permittedLength){
    return false;
  } else if (subject.length <= 0){
    return false;
  } else {
    return true;
  }
};

export {isNumeric, isString};