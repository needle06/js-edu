/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      for (let key of Object.keys(config)) {
        if(focus == key && knowsProgramming) {
          return Math.ceil(800 / config[key])
        }
        if(focus == key && knowsProgramming === false) {
          return Math.ceil(1300 / config[key])
        }
      }


      
  };
  