function getType(value) {
  // Extracts "Set", "Map", etc. from "[object Set]"
  return Object.prototype.toString.call(value).slice(8, -1);
}

export {
  getType
}