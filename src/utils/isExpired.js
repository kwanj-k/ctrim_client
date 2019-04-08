import jwt_decode from "jwt-decode";

const isExpired = (token) => {
    const decoded = jwt_decode(token);
    const { exp } = decoded;
    if (exp) {
      const now = new Date();
      const nowInSec = Math.floor(now.getTime() * 0.001); // Convert date to sec
      return nowInSec > exp;
    }
  }

export default isExpired;
