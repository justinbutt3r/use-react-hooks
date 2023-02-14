function isValidHookName(name) {
  if (!name.length > 3) return false;
  if (!name.startsWith("use")) return false;
  const character = name[3];
  if (character !== character.toUpperCase()) return false;
  return true;
}

module.exports = isValidHookName;
