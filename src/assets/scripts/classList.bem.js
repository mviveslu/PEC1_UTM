DOMTokenList.prototype.getFullModifierClassName = function (modifier) {
  if (this.length === 0) {
    return "";
  }
  return this.item(0) + "--" + modifier;
};
DOMTokenList.prototype.addModifier = function (modifier) {
  this.add(this.getFullModifierClassName(modifier));
};
DOMTokenList.prototype.removeModifier = function (modifier) {
  this.remove(this.getFullModifierClassName(modifier));
};
