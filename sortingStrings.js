const sortStringsInDescending = function (str1, str2) {
  const str1Code = str1.charCodeAt(0);
  const str2Code = str2.charCodeAt(0);

  if (str1Code > str2Code) {
    return -1;
  }

  if (str1Code === str2Code) {
    return 0;
  }

  return 1;
}