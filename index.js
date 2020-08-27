module.exports = class Encrypt {

  constructor(p = "") {
    this.password = p;
    this.setEncrypt();
    this.setUncrypt();
  }

  binEncrypt(chars) {

    chars.forEach((number, i) => {
      chars[i] = number.toString(2);
    });

    return chars;

  }

  hexEncrypt(chars) {
    chars.forEach((number, i) => {
      chars[i] = (+number).toString(16) + "_";
    });

    return chars;
  }

  setEncrypt(c = this.uncrypted) {
    let p = c != undefined ? c : this.password;
    let str = p.split("");
    let numbs = [];
    str.forEach((letter, i) => {
      let c = letter.charCodeAt(0);
      numbs.push(parseInt(Math.random() * 100));
      str[i] = c + numbs[i];
    });
    let bchar = this.binEncrypt(str);
    let hchar = this.hexEncrypt(bchar);
    hchar.forEach((item, i) => {
      hchar[i] += numbs[i].toString(16) + "-";
    });
    this.crypted = hchar.join("");
    this.setUncrypt();
  }

  getEncrypt() {
    return this.crypted;
  }
  getUncrypt() {
    return this.uncrypted;
  }

  setUncrypt(c = this.crypted) {
    let chars = c.split("_");

    let fchars = [];
    let fnumbs = [];
    chars.forEach((item, i) => {
      let it = item.split("-");
      if(it.length == 1){
        fchars.push(it[0]);
      } else {
        fchars.push(it[1]);
        fnumbs.push(it[0]);
      }
    });

    fchars.splice(fchars.length - 1, 1)

    let hchars = this.hexUncrypt(fchars);
    let bchars = this.binUncrypt(hchars, fnumbs);

    bchars.forEach((number, i) => {
      bchars[i] = String.fromCharCode(number);
    });

    this.uncrypted = bchars.join("");
  }

  hexUncrypt(chars) {
    chars.forEach((number, i) => {
      chars[i] = parseInt(number, 16);
    });
    return chars;
  }

  binUncrypt(chars, fnumbs) {
    chars.forEach((number, i) => {
      chars[i] = parseInt(number, 2) - parseInt(fnumbs[i], 16);
    });
    return chars;
  }

}
