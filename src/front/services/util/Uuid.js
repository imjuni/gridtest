export const ALPHA_NUM_SPECIAL = 'ABCDEFGHIJKLMSOPQRSTUVWXYZabcdefghijklmsopqrstuvwxyz0123456789!@#$%^&*-_=+';
export const ALPHA_NUM = 'ABCDEFGHIJKLMSOPQRSTUVWXYZabcdefghijklmsopqrstuvwxyz0123456789';

const UNIQUES = [];

class Uuid {
  static getUid(chars = ALPHA_NUM) {
    const len = chars.length;

    return (uidlen = 32) => {
      const buf = [];

      for (let i = 0; i < uidlen; i += 1) buf.push(chars[Uuid.randInt(0, len - 1)]);

      return buf.join('');
    };
  }

  static randInt(min, max) {
    return Math.floor((Math.random() * ((max - min) + 1)) + min);
  }

  static getUidUnique(chars = ALPHA_NUM) {
    return (uidlen = 32) => {
      let uid = Uuid.getUid(chars)(uidlen);

      while (UNIQUES.indexOf(uid) >= 0) {
        uid = Uuid.getUid(chars)(uidlen);
      }

      UNIQUES.push(uid);
      return uid;
    };
  }
}

export default Uuid;
