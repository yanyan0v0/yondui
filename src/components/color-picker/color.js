
function addZero(str) {
  if (str.length == 1) {
    return '0' + str;
  } else {
    return str;
  }
}

export default {
  hexToRgb: (hex, type = 'string') => {
    // 透明度转化公式 (255 - parseInt(a, 16)) / 255
    let r, g, b, a;
    if (hex.length == 9) {
      r = parseInt(hex.substr(1, 2), 16);
      g = parseInt(hex.substr(3, 2), 16);
      b = parseInt(hex.substr(5, 2), 16);
      a = parseInt(hex.substr(7, 2), 16)
      a = (a / 255).toFixed(2)
    } else if (hex.length == 7) {
      r = parseInt(hex.substr(1, 2), 16);
      g = parseInt(hex.substr(3, 2), 16);
      b = parseInt(hex.substr(5, 2), 16);
    } else if (hex.length == 4) {
      r = parseInt('' + hex.substr(1, 1) + hex.substr(1, 1), 16);
      g = parseInt('' + hex.substr(2, 1) + hex.substr(2, 1), 16);
      b = parseInt('' + hex.substr(3, 1) + hex.substr(3, 1), 16);
    } else {
      if (type === 'string') {
        return 'false'
      } else {
        return []
      }
    }
    if (type === 'string') {
      return hex.length == 9 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
    } else {
      return [r, g, b, a]
    }
  },
  rgbaToHex: (rgba, type = 'string') => {
    let r16, g16, b16, a16;
    if (/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/.test(rgba)) {
      if (RegExp.$1 >= 0 && RegExp.$1 <= 255 || RegExp.$2 >= 0 && RegExp.$2 <= 255 || RegExp.$3 >= 0 && RegExp.$3 <= 255 || RegExp.$4 >= 0 && RegExp.$4 <= 1) {
        r16 = addZero(Number(RegExp.$1).toString(16));
        g16 = addZero(Number(RegExp.$2).toString(16));
        b16 = addZero(Number(RegExp.$3).toString(16));
        console.log(RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4)
        a16 = RegExp.$4 ? addZero(Math.ceil(Number(RegExp.$4) * 255).toString(16)) : ''
        if (type == 'string') {
          return '#' + r16 + g16 + b16 + a16;
        } else {
          return [r16]
        }
      } else {
        return 'false';
      }
    } else {
      return 'false';
    }
  }
}