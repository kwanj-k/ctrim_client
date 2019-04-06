const isExpired = (expireTimeInSec) => {
    if (expireTimeInSec) {
      const now = new Date();
      const nowInSec = Math.floor(now.getTime() * 0.001); // Convert date to sec
      return nowInSec > expireTimeInSec;
    }
  }

export default isExpired;
