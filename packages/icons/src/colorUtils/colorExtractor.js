/**
 * Creates a standardized component name from a given gile and filename
 * @param  string fileData
 * @return Object
 */
const extractColors = (fileData) => {
  const regexp = /fill="(.*?)"|fill: (.*?);/g; // find all the fills inside the component
  let matcher;

  const result = {
    // ensure the main color (#414141) is always first
    // even in icons that don't even use it
    colorArray: ["#414141"],
    colorText: "",
  };

  do {
    matcher = regexp.exec(fileData);
    if (matcher) {
      if (
        !result.colorArray.includes(matcher[1]) &&
        !result.colorArray.includes(matcher[2])
      ) {
        if (matcher[1] !== undefined && matcher[1] !== null) {
          result.colorArray.push(matcher[1]);
        }
        if (matcher[2] !== undefined && matcher[2] !== null) {
          result.colorArray.push(matcher[2]);
        }
      }
    }
  } while (matcher);

  result.colorText = result.colorArray.map((el) => `"${el}"`).join(", ");

  return result;
};

export default extractColors;
