import cargar from "../image/cargar.gif";


function imagenmovie(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : cargar;
}

export default imagenmovie