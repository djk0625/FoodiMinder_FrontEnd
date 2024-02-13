/**
 * 공통 함수 정의
 */

const common = {
/**
* null check function (if null => return true)
* @param {*} value 
* @returns {boolean}
*/
  checkNull: (value) => {
    if (value === "" || value === null || value === undefined) {
      return true;
    } return false;
  }
}

export default common;