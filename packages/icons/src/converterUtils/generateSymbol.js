/**
 * Creates a full component string based upon provided svg data and a component name
 * @param  string svgOutput -The svg data, preformatted
 * @param  string componentName - The name of the component without extension
 * @param  string colors - The defaults value of colors to add to the component
 * @return string The parsed component string
 */
const generateSymbol = (svgOutput, componentName) => {
  // return the content of the <svg> as a <symbol> with id componentName
  return svgOutput
    .replace(/<svg/, `<symbol id="${componentName}"`)
    .replace(/<\/svg>/, `</symbol>`);
};

export default generateSymbol;
