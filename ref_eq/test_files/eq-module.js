'use strict';
/** @type {!Array} */
var _0x4ed4 = ["frequencyBinCount", '<div class="knob-controller" style="transform: rotate(', "attr", "original", "123,31,162", "#main-canvas", '[band="', ".needle", "rgb(140, 140, 140)", "#question", "loop", "/playground/eq/filter-50/", "abs", "mousedown", "connect", "canvas_ctx", "rgba(0,0,0,0)", "canvas", "knobs", "reset", "clientX", "PEAK", "LOWPASS", "sin", "arc", "fillStyle", "getContext", "originalFilters", "gray", "onaudioprocess", ",1)", "transform", "preventDefault", "band_id", ",.6)", "bandOnFocus", 
"down", "textAlign", "peaking", '" ondblclick="knobBase(this);" onMouseDown="knobActivate(this, event);">', "allpass", "checkClipping", "rotate(180deg)", "clientY", "#000", "gap", "hide", "color", "css", "end", ".yk-meter", "rgba(", "244,129,129", "touches", "247,140,69", "yourBands", "now", "clipping", ".meter-correct", "f_lowshelf", "random", "[eq]", "rgba(55,132,55,.3)", "your", "#111", "reconfigure", "14px Arial", "averaging", "toFixed", "filter_name", '<img toggle-band-img src="', "constants", 
"originalBands", "state", "knob", "chart", "pow", "gameOriginalGain", "playbackTime", ".meter-value", "freq", "parents", "fill", "f_peak", "height", "clipLevel", "lineTo", "inputBuffer", "canvasWidth", "pointerRadius", "sqrt", "center", "156,221,99", "band", ".game-cover", "f_highshelf", "[diff-accuracy]", "includes", "frequency", "211,47,47", "banned", "#confirm-settings", "hint", "offsetY", "touchTwoFingerStartValue", "loopEnd", "rate", "diff", "push", "offset", "194,24,91", "fillText", "strokeWidth", 
"gain", ".game-compare-panel", "highpass", "[bands]", "currentTime", "clipLag", "lastHz", "count", "[diff-cor]", "#game-panel-body", "game-panel-footer", "each", "filter", "start", '[meter="', "fontWeight", "createBufferSource", "f_highpass", ".compare-btn", '<div toggle-band-btn style="background: rgb(', "touchmove", "find", "originalAnalyser", "font", "rgba(105,175,115,.5)", "255,184,137", "answerSubmitted", "getByteFrequencyData", "hsl(", "text", "createGain", "floor", "loading", "[hints]", "gameBypassGain", 
"volume", "normal 11px Arial", "timegap", "draw", "setValueAtTime", "width", "rgba(237,61,61,.3)", "fillRect", ".hint-btn", "freqRunner", "#777", '<div class="knob-label">GAIN</div>', "loopStart", "rotate(", "PI2", "off", "lastMeterEvent", '>" value="', "side", '<div class="knob-panel" knob="gain" state="inactive" sensitivity="0.05" y="0" min="-18" max="18" base="', "removeClass", " kHz", ".game-helper-panel", "log", '<div class="knob-panel" knob="freq" state="inactive" sensitivity="', "play", 'deg)"><i class="fa fa-circle"></i></div>', 
"top", '[timeline-spectrogram="', "Notch", "0,151,167", "lineWidth", "activeFilter", "left", "deg)", '<div class="knob-value" contentEditable="true" onBlur="knobValueBlur(this);" onFocus="knobValueFocus(this);" onKeyDown="knobKeydown(this, event);">', "isDown", "NOTCH", "stroke", "putImageData", "clearRect", "length", "247,111,163", '"ondblclick="knobBase(this);"onMouseDown="knobActivate(this, event);">', "lastClip", '<div class="empty-knob-panel"></div>', '.png"/>', "transparent", "f_bandpass", 
"lowpass", "f_notch", "functions", "originalEvent", "</div>", "game-panel-body", "createScriptProcessor", "rgba(255,255,0,.8)", "bypass", "getChannelData", "beginPath", "touchend", ".knob-panel", " Hz", "setLineDash", "gameYourGain", "[band]", "ceil", "moveTo", "performance", "pointerDrag", ".knob-value", "yourAnalyser", "type", "gainDB", "freqDataMap", "strokeStyle", "active", "meterUpdate", " dB", "rgba(70,119,115,.8)", "addEventListener", "yours", "deltaY", "#999", "shutdown", "result", "value", 
"yourFilters", "stopPropagation", "yes", "touchstart", '<div band="', "HIGHSHELF", "offsetX", "angle_gain", "closePath", "sample_rate", "create", "border", "log_result", "98,178,252", "canvasHeight", "hsl(280, 100%, 10%)", "wait", "highshelf", "samples", "createBiquadFilter", "% accurate", "show", "rgb(0, 0, 0)", "#go-next-btn", '<div toggle-band onclick="toggleBand(', "95,160,38", '" state="', "rgba(150,150,150,.3)", "#bypass-btn", "gainMin", "filter_id", "mouseup", "createElement", "createAnalyser", 
"rgba(200,200,200,.5)", '" y="0" min="20" max="19100" base="', "html", "199,117,234", ".bypass-btn", '" start="', "BANDPASS", "right", "mousemove", '" value="', "f_lowpass", "configure", "round"];

/**
 * @param {string} i
 * @param {?} parameter1
 * @return {?}
 */
var _0x2fe6 = function(i, parameter1) {
  /** @type {number} */
  i = i - 0;
  var oembedView = _0x4ed4[i];
  return oembedView;
};
/** @type {function(string, ?): ?} */
var _0x278f7d = _0x2fe6;
var eq = {
  yourBands : [],
  originalBands : [],
  drawValues : [],
  PI2 : Math["PI"] * 2,
  pointerRadius : 12,
  pointerDrag : -1,
  touchTwoFingerStartValue : -1,
  qMin : 0.5,
  qMax : 3,
  gainMin : -12,
  gainMax : 12,
  gap : 0,
  rate : 96E3,
  samples : 1E3,
  lastHz : 22E3,
  canvasWidth : 0,
  canvasHeight : 0,
  offsetX : 0,
  offsetY : 0,
  lastMeterEvent : 0,
  bandOnFocus : 0,
  meterUpdate : ![],
  answerSubmitted : ![],
  isDown : ![],
  isTouchdown : ![],
  firstLoad : !![],
  bypass : !![],
  yourFilters : {},
  originalFilters : {},
  gameYourGain : null,
  gameOriginalGain : null,
  gameBypassGain : null,
  originalAnalyser : null,
  yourAnalyser : null,
  freqDataMap : {
    original : [],
    your : [],
    diff : []
  },
  freqRunner : {
    timegap : 10,
    count : 300
  },
  activeFilter : 'original',
  filters : {
    lowpass : 0,
    highpass : 1,
    bandpass : 2,
    peaking : 3,
    notch : 4,
    lowshelf : 5,
    highshelf : 6
  }
};
/** @type {number} */
var dbMax = 16;
/** @type {number} */
var minHZscale = 16;
/** @type {number} */
var totalOctavas = 10.5;
var canvas;
var ctx;
var meter;
var result;
/** @type {number} */
var totalSections = 12;
/** @type {number} */
var perfectPercent = 75;
/** @type {number} */
var percentAccuracy = 40;
/** @type {number} */
var deviation = 1800;
var short = {
  LC : 'highpass',
  LS : "lowshelf",
  PK : 'peaking',
  HS : "highshelf",
  HC : 'lowpass'
};
var dBands = {
  highpass : {
    id : 0,
    state : "off",
    color : '211,47,47',
    border : '244,129,129',
    filter_name : "highpass",
    filter_id : 1,
    freq : 30,
    gain : 0,
    q : 0.7,
    sensitivity_freq : 1,
    angle_freq : -139,
    angle_q : -130,
    angle_gain : 0,
    knobs : ["freq"],
    chart : {},
    filter : {}
  },
  lowshelf : {
    id : 1,
    state : 'off',
    color : '194,24,91',
    border : '247,111,163',
    filter_name : "lowshelf",
    filter_id : 5,
    freq : 140,
    gain : 0,
    q : 1,
    sensitivity_freq : 3,
    angle_freq : -139,
    angle_q : -118,
    angle_gain : 0,
    knobs : ['freq', "gain"],
    chart : {},
    filter : {}
  },
  peaking1 : {
    id : 2,
    state : 'off',
    color : '123,31,162',
    border : '199,117,234',
    filter_name : "peaking",
    filter_id : 3,
    freq : 440,
    gain : 0,
    q : 1,
    sensitivity_freq : 4,
    angle_freq : -133,
    angle_q : -124,
    angle_gain : 0,
    knobs : ['freq', "gain", "q"],
    chart : {},
    filter : {}
  },
  peaking2 : {
    id : 3,
    state : 'off',
    color : "25,118,210",
    border : '98,178,252',
    filter_name : 'peaking',
    filter_id : 3,
    freq : 1E3,
    gain : 0,
    q : 1,
    sensitivity_freq : 7,
    angle_freq : -125,
    angle_q : -124,
    angle_gain : 140,
    knobs : ['freq', 'gain', "q"],
    chart : {},
    filter : {}
  },
  peaking3 : {
    id : 4,
    state : 'off',
    color : '0,151,167',
    border : "32,215,232",
    filter_name : 'peaking',
    filter_id : 3,
    freq : 3500,
    gain : 0,
    q : 1,
    sensitivity_freq : 10,
    angle_freq : -88,
    angle_q : -124,
    angle_gain : 0,
    knobs : ['freq', 'gain', "q"],
    chart : {},
    filter : {}
  },
  highshelf : {
    id : 5,
    state : 'off',
    color : '95,160,38',
    border : '156,221,99',
    filter_name : 'highshelf',
    filter_id : 6,
    freq : 9E3,
    gain : 0,
    q : 1,
    sensitivity_freq : 13,
    angle_freq : -8,
    angle_q : -118,
    angle_gain : 0,
    knobs : ['freq', 'gain'],
    chart : {},
    filter : {}
  },
  lowpass : {
    id : 6,
    state : 'off',
    color : '247,140,69',
    border : '255,184,137',
    filter_name : 'lowpass',
    filter_id : 0,
    freq : 16E3,
    gain : 0,
    q : 0.7,
    sensitivity_freq : 16,
    angle_freq : 109,
    angle_q : -140,
    angle_gain : 0,
    knobs : ["freq"],
    chart : {},
    filter : {}
  }
};
var prototypes = {
  "LC-N-N" : {
    deviation : 1800,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 1400],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "N-N-HC" : {
    deviation : 1800,
    options : {
      1 : [{
        filter_name : "HC",
        freq : [3E3, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LC-N-HC" : {
    deviation : 2E3,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 1500],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "HC",
        freq : [2500, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LS-N-N" : {
    deviation : 2100,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [170, 600],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "N-N-HS" : {
    deviation : 2100,
    options : {
      1 : [{
        filter_name : "HS",
        freq : [4E3, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "N-PK1-N" : {
    deviation : 2100,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [200, 8500],
        q : [0.7, 1.5],
        gain : [8, 12]
      }],
      2 : [{
        filter_name : "PK",
        freq : [200, 8E3],
        q : [0.8, 1.25],
        gain : [-12, -9]
      }]
    }
  },
  "LC-N-HS" : {
    deviation : 2E3,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 1E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "HS",
        freq : [4E3, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LS-N-HC" : {
    deviation : 2E3,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [200, 650],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "HC",
        freq : [3E3, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LS-N-HS" : {
    deviation : 2300,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [200, 650],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [4500, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LC-PK1-N" : {
    deviation : 2100,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 650],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [800, 9E3],
        q : [0.7, 3],
        gain : [9, 12]
      }],
      2 : [{
        filter_name : "LC",
        freq : [150, 550],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [1500, 8500],
        q : [0.6, 1.5],
        gain : [-12, -10]
      }]
    }
  },
  "N-PK1-HC" : {
    deviation : 2100,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [250, 3E3],
        q : [0.7, 2.5],
        gain : [10, 12]
      }, {
        filter_name : "HC",
        freq : [3500, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }],
      2 : [{
        filter_name : "PK",
        freq : [250, 3E3],
        q : [0.65, 1.5],
        gain : [-12, -8]
      }, {
        filter_name : "HC",
        freq : [4E3, 9500],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LS-PK1-N" : {
    deviation : 2400,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [150, 550],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [650, 8E3],
        q : [0.7, 1.5],
        gain : [8, 12]
      }],
      2 : [{
        filter_name : "LS",
        freq : [200, 600],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [700, 8500],
        q : [0.7, 1.5],
        gain : [-12, -9]
      }]
    }
  },
  "N-PK1-HS" : {
    deviation : 2400,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [250, 4E3],
        q : [0.7, 1.5],
        gain : [8, 12]
      }, {
        filter_name : "HS",
        freq : [4500, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }],
      2 : [{
        filter_name : "PK",
        freq : [350, 3700],
        q : [0.7, 1.5],
        gain : [-12, -10]
      }, {
        filter_name : "HS",
        freq : [4200, 9500],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LC-PK1-HC" : {
    deviation : 2300,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 550],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [650, 4100],
        q : [0.7, 1.5],
        gain : [8, 12]
      }, {
        filter_name : "HC",
        freq : [4700, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }],
      2 : [{
        filter_name : "LC",
        freq : [150, 450],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [550, 3E3],
        q : [0.7, 1.5],
        gain : [-12, -9]
      }, {
        filter_name : "HC",
        freq : [3400, 9500],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "N-PK2-N" : {
    deviation : 3300,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [150, 1200],
        q : [0.7, 1.5],
        gain : [8, 12]
      }, {
        filter_name : "PK",
        freq : [1500, 9E3],
        q : [0.75, 2.5],
        gain : [8, 12]
      }],
      2 : [{
        filter_name : "PK",
        freq : [250, 1100],
        q : [0.7, 1.5],
        gain : [-12, -9]
      }, {
        filter_name : "PK",
        freq : [1450, 8E3],
        q : [0.65, 1.5],
        gain : [-12, -8]
      }],
      3 : [{
        filter_name : "PK",
        freq : [150, 1200],
        q : [0.7, 1.5],
        gain : [8, 12]
      }, {
        filter_name : "PK",
        freq : [1500, 9E3],
        q : [0.75, 2.5],
        gain : [-12, -8]
      }],
      4 : [{
        filter_name : "PK",
        freq : [500, 1900],
        q : [0.7, 1.5],
        gain : [-12, -9]
      }, {
        filter_name : "PK",
        freq : [2100, 9E3],
        q : [0.65, 1.5],
        gain : [8, 12]
      }],
      5 : [{
        filter_name : "PK",
        freq : [350, 1200],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1550, 9E3],
        q : [0.65, 1.5],
        gain : [-12, 12]
      }]
    }
  },
  "LC-PK1-HS" : {
    deviation : 2700,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 500],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [600, 4300],
        q : [0.75, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [4800, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LS-PK1-HC" : {
    deviation : 2700,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [180, 500],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [600, 4E3],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HC",
        freq : [4500, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LS-PK1-HS" : {
    deviation : 3400,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [190, 600],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [800, 4E3],
        q : [0.6, 2],
        gain : [7, 12]
      }, {
        filter_name : "HS",
        freq : [5E3, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }],
      2 : [{
        filter_name : "LS",
        freq : [150, 450],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [600, 4E3],
        q : [0.75, 1.25],
        gain : [-12, -9]
      }, {
        filter_name : "HS",
        freq : [4700, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LC-PK2-N" : {
    deviation : 3300,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 500],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [650, 2E3],
        q : [0.7, 1.5],
        gain : [7, 12]
      }, {
        filter_name : "PK",
        freq : [2300, 9E3],
        q : [0.7, 1.75],
        gain : [7, 12]
      }],
      2 : [{
        filter_name : "LC",
        freq : [200, 450],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [520, 2500],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [3E3, 8500],
        q : [0.7, 1.75],
        gain : [8, 12]
      }]
    }
  },
  "N-PK2-HC" : {
    deviation : 3300,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [200, 990],
        q : [0.7, 1.5],
        gain : [-12, -7]
      }, {
        filter_name : "PK",
        freq : [1200, 5E3],
        q : [0.7, 1.5],
        gain : [-12, -8]
      }, {
        filter_name : "HC",
        freq : [5500, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }],
      2 : [{
        filter_name : "PK",
        freq : [190, 700],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [800, 3200],
        q : [0.7, 1.5],
        gain : [10, 12]
      }, {
        filter_name : "HC",
        freq : [3600, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LS-PK2-N" : {
    deviation : 3500,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [170, 400],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [500, 2100],
        q : [0.5, 2.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [2300, 9E3],
        q : [0.5, 2.5],
        gain : [-12, 12]
      }],
      2 : [{
        filter_name : "LS",
        freq : [170, 400],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [500, 2200],
        q : [0.5, 2.5],
        gain : [9, 12]
      }, {
        filter_name : "PK",
        freq : [2400, 8E3],
        q : [0.5, 2.5],
        gain : [-12, 12]
      }]
    }
  },
  "N-PK2-HS" : {
    deviation : 3500,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [200, 1200],
        q : [0.6, 2],
        gain : [-12, -9]
      }, {
        filter_name : "PK",
        freq : [1400, 4500],
        q : [0.6, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [6E3, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }],
      2 : [{
        filter_name : "PK",
        freq : [210, 1200],
        q : [0.6, 2],
        gain : [9, 12]
      }, {
        filter_name : "PK",
        freq : [1400, 4500],
        q : [0.6, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [6E3, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LC-PK2-HC" : {
    deviation : 3400,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 300],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [400, 1800],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [2E3, 5E3],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HC",
        freq : [5300, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LC-PK2-HS" : {
    deviation : 3600,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 400],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [450, 1500],
        q : [0.65, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1700, 4E3],
        q : [0.55, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [4500, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LS-PK2-HC" : {
    deviation : 3600,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [160, 400],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [430, 1400],
        q : [0.65, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1500, 4500],
        q : [0.75, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HC",
        freq : [5E3, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LS-PK2-HS" : {
    deviation : 3700,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [200, 500],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [550, 1800],
        q : [0.7, 1.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [2E3, 6500],
        q : [0.6, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [7E3, 8500],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "N-PK3-N" : {
    deviation : 3500,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [200, 550],
        q : [0.7, 1.5],
        gain : [8, 12]
      }, {
        filter_name : "PK",
        freq : [630, 2200],
        q : [0.7, 1.5],
        gain : [-12, -8]
      }, {
        filter_name : "PK",
        freq : [2500, 9E3],
        q : [0.7, 1.5],
        gain : [7, 12]
      }],
      2 : [{
        filter_name : "PK",
        freq : [190, 500],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [600, 2700],
        q : [0.7, 1.5],
        gain : [8, 12]
      }, {
        filter_name : "PK",
        freq : [3100, 8700],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }],
      3 : [{
        filter_name : "PK",
        freq : [200, 500],
        q : [0.7, 1.5],
        gain : [-12, -8]
      }, {
        filter_name : "PK",
        freq : [600, 2700],
        q : [0.7, 1.5],
        gain : [8, 12]
      }, {
        filter_name : "PK",
        freq : [3100, 9500],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }]
    }
  },
  "LC-PK3-N" : {
    deviation : 3500,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 350],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [400, 1200],
        q : [0.6, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1390, 4E3],
        q : [0.6, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [4500, 9E3],
        q : [0.6, 1.5],
        gain : [-12, 12]
      }]
    }
  },
  "LS-PK3-N" : {
    deviation : 3800,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [190, 350],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [400, 1100],
        q : [0.5, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1100, 3E3],
        q : [0.7, 1.75],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [3500, 9E3],
        q : [0.6, 2],
        gain : [-12, 12]
      }]
    }
  },
  "N-PK3-HC" : {
    deviation : 3500,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [200, 600],
        q : [0.55, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [650, 1800],
        q : [0.65, 1.4],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1950, 5E3],
        q : [0.65, 1.6],
        gain : [-12, 12]
      }, {
        filter_name : "HC",
        freq : [5E3, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "N-PK3-HS" : {
    deviation : 4E3,
    options : {
      1 : [{
        filter_name : "PK",
        freq : [200, 700],
        q : [0.6, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [775, 1800],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1950, 4500],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [5E3, 9300],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LC-PK3-HC" : {
    deviation : 4E3,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 400],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [445, 1E3],
        q : [0.5, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1100, 2200],
        q : [0.5, 3],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [2500, 6E3],
        q : [0.7, 3],
        gain : [-12, 12]
      }, {
        filter_name : "HC",
        freq : [6E3, 9E3],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LS-PK3-HC" : {
    deviation : 4100,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [180, 350],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [400, 900],
        q : [0.7, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1E3, 2800],
        q : [0.7, 3],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [2900, 5200],
        q : [0.7, 3],
        gain : [-12, 12]
      }, {
        filter_name : "HC",
        freq : [5500, 1E4],
        q : [0.7, 0.7],
        gain : [0, 0]
      }]
    }
  },
  "LS-PK3-HS" : {
    deviation : 4200,
    options : {
      1 : [{
        filter_name : "LS",
        freq : [170, 350],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [400, 1150],
        q : [0.8, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [1300, 3E3],
        q : [0.8, 2.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [3200, 7500],
        q : [0.8, 3],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [8E3, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  },
  "LC-PK3-HS" : {
    deviation : 4100,
    options : {
      1 : [{
        filter_name : "LC",
        freq : [150, 200],
        q : [0.7, 0.7],
        gain : [0, 0]
      }, {
        filter_name : "PK",
        freq : [245, 800],
        q : [0.5, 1.5],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [900, 2100],
        q : [0.5, 3],
        gain : [-12, 12]
      }, {
        filter_name : "PK",
        freq : [2300, 6E3],
        q : [0.7, 3],
        gain : [-12, 12]
      }, {
        filter_name : "HS",
        freq : [7E3, 9E3],
        q : [0.7, 0.7],
        gain : [-12, 12]
      }]
    }
  }
};
/**
 * @param {number} data
 * @return {?}
 */
function yOnCanvas(data) {;
  return eq["canvasHeight"] / 2 + data / dbMax * 0.5 * eq['canvasHeight'] * -1;
}
/**
 * @param {number} value
 * @return {?}
 */
function xOnCanvas(value) {;
  return value == 0 ? eq['gap'] : eq["canvasWidth"] * (Math['log'](value / minHZscale) / Math['log'](Math['pow'](2, totalOctavas)) * 100) / 100 + eq['gap'];
}
/**
 * @return {undefined}
 */
function drawYGrid() {;
  ctx['beginPath']();
  ctx['font'] = 'normal 11px Arial';
  ctx['fillStyle'] = '#999';
  ctx["textAlign"] = 'right';
  /** @type {number} */
  ctx['fontWeight'] = 100;
  ctx['setLineDash']([]);
  ctx['strokeStyle'] = '#777';
  /** @type {number} */
  ctx["lineWidth"] = 0.5;
  /** @type {!Array} */
  var which = [18, 12, 6, 0, -6, -12, -18];
  $['each'](which, function(canCreateDiscussions, text) {
    ctx["moveTo"](xOnCanvas(0), yOnCanvas(text));
    ctx['lineTo'](eq["canvasWidth"] - 20, yOnCanvas(text));
    ctx['fillText'](text, eq['canvasWidth'], yOnCanvas(text) + 3);
  });
  ctx["stroke"]();
}
/**
 * @return {undefined}
 */
function drawXGrid() {;
  ctx["beginPath"]();
  ctx['font'] = 'normal 11px Arial';
  ctx["fillStyle"] = mobile ? '#111' : "#999";
  ctx['textAlign'] = 'center';
  /** @type {number} */
  ctx['fontWeight'] = 100;
  ctx['setLineDash']([]);
  /** @type {string} */
  ctx['strokeStyle'] = "#333";
  /** @type {number} */
  ctx['lineWidth'] = 0.5;
  var which = {
    20 : !![],
    50 : !![],
    100 : !![],
    200 : !![],
    500 : !![],
    1E3 : !![],
    2E3 : !![],
    5E3 : !![],
    1E4 : !![],
    2E4 : !![]
  };
  $['each'](which, function(left, canCreateDiscussions) {
    var orig = eq['canvasWidth'] * hzToPosition(left) / 100 + eq['gap'];
    if (canCreateDiscussions) {
      ctx['fillText'](formatHzLabel(left), orig, eq["canvasHeight"] - 7);
    }
    ctx['moveTo'](orig, 20);
    ctx['lineTo'](orig, eq['canvasHeight'] - 20);
  });
  ctx['stroke']();
}
/**
 * @param {!Object} filter
 * @param {string} type
 * @param {?} value
 * @return {undefined}
 */
function drawFilter(filter, type, value) {;
  var result = {
    color : 'rgba(' + filter[type]['border'] + ',.6)',
    wrong : 'rgba(237,61,61,.3)',
    correct : 'rgba(55,132,55,.3)',
    perfect : 'rgba(105,175,115,.5)',
    gray : "rgba(200,200,200,.6)",
    transparent : 'rgba(0,0,0,0)'
  };
  var params = {
    color : 'rgba(' + filter[type]['color'] + ',.6)',
    wrong : "rgba(252,83,83,.3)",
    correct : "rgba(85,168,85,.3)",
    perfect : 'rgba(105,175,115,.5)',
    gray : 'rgba(150,150,150,.3)',
    transparent : 'rgba(0,0,0,0)'
  };
  var same = filter[type]['chart'];
  var pixel = xOnCanvas(eq["lastHz"]);
  same["canvas_ctx"] = ctx;
  same['canvas_ctx']['moveTo'](xOnCanvas(0), yOnCanvas(0));
  /**
   * @return {undefined}
   */
  same["draw"] = function() {
    same['canvas_ctx']['beginPath']();
    /** @type {number} */
    same['canvas_ctx']['lineWidth'] = 0.5;
    same['canvas_ctx']["setLineDash"]([]);
    same['canvas_ctx']["strokeStyle"] = result[value];
    same['canvas_ctx']['fillStyle'] = params[value];
    same["canvas_ctx"]['moveTo'](0, yOnCanvas(0));
    /** @type {number} */
    var range = 1;
    for (; range <= eq["samples"]; range++) {
      /** @type {number} */
      var sep = range / eq["samples"];
      var controls = positionToHz(sep);
      var itemData = filter[type]["filter"]["log_result"](controls);
      var item = yOnCanvas(itemData);
      var maxPixelValue = xOnCanvas(controls);
      same['canvas_ctx']['lineTo'](maxPixelValue, item);
      if (maxPixelValue > pixel) {
        same['canvas_ctx']['lineTo'](maxPixelValue, yOnCanvas(0));
        break;
      }
    }
    same["canvas_ctx"]['closePath']();
    same['canvas_ctx']['stroke']();
    same['canvas_ctx']['fill']();
  };
}
/**
 * @param {!Object} node
 * @param {string} className
 * @return {undefined}
 */
function initFilter(node, className) {;
  var d = node[className]['filter'];
  /** @type {number} */
  d['LOWPASS'] = 0;
  /** @type {number} */
  d["HIGHPASS"] = 1;
  /** @type {number} */
  d['BANDPASS'] = 2;
  /** @type {number} */
  d['PEAK'] = 3;
  /** @type {number} */
  d['NOTCH'] = 4;
  /** @type {number} */
  d["LOWSHELF"] = 5;
  /** @type {number} */
  d['HIGHSHELF'] = 6;
  /** @type {number} */
  d["a0"] = 0;
  /** @type {number} */
  d["a1"] = 0;
  /** @type {number} */
  d["a2"] = 0;
  /** @type {number} */
  d["b0"] = 0;
  /** @type {number} */
  d["b1"] = 0;
  /** @type {number} */
  d["b2"] = 0;
  /** @type {number} */
  d["x1"] = 0;
  /** @type {number} */
  d["x2"] = 0;
  /** @type {number} */
  d["y1"] = 0;
  /** @type {number} */
  d["y2"] = 0;
  d["type"] = node[className]['filter_id'];
  d['freq'] = node[className]["freq"];
  d['sample_rate'] = eq['rate'];
  d["Q"] = node[className]["q"];
  d["gainDB"] = node[className]['gain'];
  /**
   * @return {undefined}
   */
  d["create"] = function() {
    d['configure'](d['type'], d["freq"], d['sample_rate'], d["Q"], d['gainDB']);
  };
  /**
   * @return {undefined}
   */
  d['reset'] = function() {
    /** @type {number} */
    d["x1"] = d["x2"] = d["y1"] = d["y2"] = 0;
  };
  /**
   * @return {?}
   */
  d["frequency"] = function() {
    return d['freq'];
  };
  /**
   * @param {?} y
   * @param {?} a
   * @param {?} fromModel
   * @param {number} kw
   * @param {?} mapping_val
   * @return {undefined}
   */
  d['configure'] = function(y, a, fromModel, kw, mapping_val) {
    /** @type {!Array} */
    d['functions'] = [d['f_lowpass'], d['f_highpass'], d['f_bandpass'], d['f_peak'], d['f_notch'], d['f_lowshelf'], d['f_highshelf']];
    d['reset']();
    d["Q"] = kw == 0 ? 1e-9 : kw;
    d["type"] = y;
    d['sample_rate'] = fromModel;
    d["gainDB"] = mapping_val;
    d['reconfigure'](a);
  };
  /**
   * @param {number} fromModel
   * @return {undefined}
   */
  d['reconfigure'] = function(fromModel) {
    /** @type {number} */
    d['freq'] = fromModel;
    var precision = Math['pow'](10, d["gainDB"] / 40);
    /** @type {number} */
    var value = 2 * Math["PI"] * fromModel / d['sample_rate'];
    var items = Math["sin"](value);
    var minyMin = Math["cos"](value);
    /** @type {number} */
    var expectedPageCount = items / (2 * d["Q"]);
    var GET_AUTH_URL_TIMEOUT = Math['sqrt'](precision + precision);
    d['functions'][d['type']](precision, value, items, minyMin, expectedPageCount, GET_AUTH_URL_TIMEOUT);
    d["b0"] /= d["a0"];
    d["b1"] /= d["a0"];
    d["b2"] /= d["a0"];
    d["a1"] /= d["a0"];
    d["a2"] /= d["a0"];
  };
  /**
   * @param {?} canCreateDiscussions
   * @param {?} isSlidingUp
   * @param {?} dontForceConstraints
   * @param {number} green
   * @param {number} diff
   * @param {?} forceExecution
   * @return {undefined}
   */
  d["f_bandpass"] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints, green, diff, forceExecution) {
    /** @type {number} */
    d["b0"] = diff;
    /** @type {number} */
    d["b1"] = 0;
    /** @type {number} */
    d["b2"] = -diff;
    d["a0"] = 1 + diff;
    /** @type {number} */
    d["a1"] = -2 * green;
    /** @type {number} */
    d["a2"] = 1 - diff;
  };
  /**
   * @param {?} canCreateDiscussions
   * @param {?} isSlidingUp
   * @param {?} dontForceConstraints
   * @param {number} diff
   * @param {number} i
   * @param {?} forceExecution
   * @return {undefined}
   */
  d['f_lowpass'] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints, diff, i, forceExecution) {
    /** @type {number} */
    d["b0"] = (1 - diff) / 2;
    /** @type {number} */
    d["b1"] = 1 - diff;
    /** @type {number} */
    d["b2"] = (1 - diff) / 2;
    d["a0"] = 1 + i;
    /** @type {number} */
    d["a1"] = -2 * diff;
    /** @type {number} */
    d["a2"] = 1 - i;
  };
  /**
   * @param {?} canCreateDiscussions
   * @param {?} isSlidingUp
   * @param {?} dontForceConstraints
   * @param {number} green
   * @param {number} diff
   * @param {?} forceExecution
   * @return {undefined}
   */
  d["f_highpass"] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints, green, diff, forceExecution) {
    /** @type {number} */
    d["b0"] = (1 + green) / 2;
    /** @type {number} */
    d["b1"] = -(1 + green);
    /** @type {number} */
    d["b2"] = (1 + green) / 2;
    d["a0"] = 1 + diff;
    /** @type {number} */
    d["a1"] = -2 * green;
    /** @type {number} */
    d["a2"] = 1 - diff;
  };
  /**
   * @param {?} canCreateDiscussions
   * @param {?} isSlidingUp
   * @param {?} dontForceConstraints
   * @param {number} green
   * @param {number} diff
   * @param {?} forceExecution
   * @return {undefined}
   */
  d["f_notch"] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints, green, diff, forceExecution) {
    /** @type {number} */
    d["b0"] = 1;
    /** @type {number} */
    d["b1"] = -2 * green;
    /** @type {number} */
    d["b2"] = 1;
    d["a0"] = 1 + diff;
    /** @type {number} */
    d["a1"] = -2 * green;
    /** @type {number} */
    d["a2"] = 1 - diff;
  };
  /**
   * @param {number} daysInterval
   * @param {?} dontForceConstraints
   * @param {?} forceExecution
   * @param {number} green
   * @param {number} mmCoreSecondsDay
   * @param {?} mmCoreSecondsYear
   * @return {undefined}
   */
  d["f_peak"] = function(daysInterval, dontForceConstraints, forceExecution, green, mmCoreSecondsDay, mmCoreSecondsYear) {
    /** @type {number} */
    d["b0"] = 1 + mmCoreSecondsDay * daysInterval;
    /** @type {number} */
    d["b1"] = -2 * green;
    /** @type {number} */
    d["b2"] = 1 - mmCoreSecondsDay * daysInterval;
    /** @type {number} */
    d["a0"] = 1 + mmCoreSecondsDay / daysInterval;
    /** @type {number} */
    d["a1"] = -2 * green;
    /** @type {number} */
    d["a2"] = 1 - mmCoreSecondsDay / daysInterval;
  };
  /**
   * @param {number} lumB
   * @param {?} isSlidingUp
   * @param {number} daysInterval
   * @param {number} sin
   * @param {?} mmCoreSecondsYear
   * @param {number} mmCoreSecondsDay
   * @return {undefined}
   */
  d['f_lowshelf'] = function(lumB, isSlidingUp, daysInterval, sin, mmCoreSecondsYear, mmCoreSecondsDay) {
    /** @type {number} */
    d["b0"] = lumB * (lumB + 1 - (lumB - 1) * sin + mmCoreSecondsDay * daysInterval);
    /** @type {number} */
    d["b1"] = 2 * lumB * (lumB - 1 - (lumB + 1) * sin);
    /** @type {number} */
    d["b2"] = lumB * (lumB + 1 - (lumB - 1) * sin - mmCoreSecondsDay * daysInterval);
    d["a0"] = lumB + 1 + (lumB - 1) * sin + mmCoreSecondsDay * daysInterval;
    /** @type {number} */
    d["a1"] = -2 * (lumB - 1 + (lumB + 1) * sin);
    /** @type {number} */
    d["a2"] = lumB + 1 + (lumB - 1) * sin - mmCoreSecondsDay * daysInterval;
  };
  /**
   * @param {number} lumB
   * @param {?} isSlidingUp
   * @param {number} daysInterval
   * @param {number} sin
   * @param {?} mmCoreSecondsYear
   * @param {number} mmCoreSecondsDay
   * @return {undefined}
   */
  d['f_highshelf'] = function(lumB, isSlidingUp, daysInterval, sin, mmCoreSecondsYear, mmCoreSecondsDay) {
    /** @type {number} */
    d["b0"] = lumB * (lumB + 1 + (lumB - 1) * sin + mmCoreSecondsDay * daysInterval);
    /** @type {number} */
    d["b1"] = -2 * lumB * (lumB - 1 + (lumB + 1) * sin);
    /** @type {number} */
    d["b2"] = lumB * (lumB + 1 + (lumB - 1) * sin - mmCoreSecondsDay * daysInterval);
    /** @type {number} */
    d["a0"] = lumB + 1 - (lumB - 1) * sin + mmCoreSecondsDay * daysInterval;
    /** @type {number} */
    d["a1"] = 2 * (lumB - 1 - (lumB + 1) * sin);
    /** @type {number} */
    d["a2"] = lumB + 1 - (lumB - 1) * sin - mmCoreSecondsDay * daysInterval;
  };
  /**
   * @param {number} canCreateDiscussions
   * @return {?}
   */
  d['result'] = function(canCreateDiscussions) {
    var _0x3ac9ce = Math["pow"](Math['sin'](2 * Math["PI"] * canCreateDiscussions / (2 * d['sample_rate'])), 2);
    /** @type {number} */
    var value = (Math['pow'](d["b0"] + d["b1"] + d["b2"], 2) - 4 * (d["b0"] * d["b1"] + 4 * d["b0"] * d["b2"] + d["b1"] * d["b2"]) * _0x3ac9ce + 16 * d["b0"] * d["b2"] * _0x3ac9ce * _0x3ac9ce) / (Math['pow'](1 + d["a1"] + d["a2"], 2) - 4 * (d["a1"] + 4 * d["a2"] + d["a1"] * d["a2"]) * _0x3ac9ce + 16 * d["a2"] * _0x3ac9ce * _0x3ac9ce);
    return value = value < 0 ? 0 : value, Math["sqrt"](value);
  };
  /**
   * @param {?} n
   * @return {?}
   */
  d['log_result'] = function(n) {
    var newFlex;
    try {
      /** @type {number} */
      newFlex = 20 * Math["log10"](d['result'](n));
    } catch (_0x4a1b24) {
      /** @type {number} */
      newFlex = -100;
    }
    return (!isFinite(newFlex) || isNaN(newFlex)) && (newFlex = -100), newFlex;
  };
  /**
   * @return {?}
   */
  d['constants'] = function() {
    return [d["a1"], d["a2"], d["b0"], d["b1"], d["b2"]];
  };
  /**
   * @param {?} q
   * @return {?}
   */
  d['filter'] = function(q) {
    /** @type {number} */
    var newMouse = d["b0"] * q + d["b1"] * d["x1"] + d["b2"] * d["x2"] - d["a1"] * d["y1"] - d["a2"] * d["y2"];
    return d["x2"] = d["x1"], d["x1"] = d["x"], d["y2"] = d["y1"], d["y1"] = newMouse, newMouse;
  };
}
/**
 * @param {undefined} filter
 * @param {?} paramName
 * @return {undefined}
 */
function eqSetup(filter, paramName) {;
  $['each'](filter, function(canCreateDiscussions, obj) {
    if (obj["state"] == "on") {
      initFilter(filter, obj["id"]);
      obj['filter']['create']();
      drawFilter(filter, obj["id"], paramName);
      obj["chart"]['draw']();
    }
  });
}
/**
 * @return {undefined}
 */
function redrawGrid() {;
  ctx["clearRect"](0, 0, eq['canvasWidth'], eq['canvasHeight']);
  drawYGrid();
  drawXGrid();
}
/**
 * @return {undefined}
 */
function drawGrid() {;
  canvas = document['createElement']('canvas');
  eq['canvasWidth'] = $('#main-canvas')['width']();
  eq["canvasHeight"] = $('#main-canvas')['height']();
  canvas['width'] = eq['canvasWidth'];
  canvas['height'] = eq['canvasHeight'];
  ctx = canvas['getContext']("2d");
  ctx['clearRect'](0, 0, eq['canvasWidth'], eq['canvasHeight']);
  canvas['addEventListener']("wheel", handleMouseWheel);
  $(canvas)['mousedown'](function(e) {
    handleMouseDown(e, e['clientX'], e['clientY']);
  });
  $(canvas)['mousemove'](function(e) {
    handleMouseMove(e, e['clientX'], e["clientY"]);
  });
  $(canvas)['mouseup'](function(event) {
    handleMouseUp(event);
  });
  $(canvas)["on"]('touchstart', function(e) {
    handleMouseDown(e, e['originalEvent']['touches'][0]["clientX"], e['originalEvent']['touches'][0]['clientY']);
  });
  $(canvas)["on"]('touchmove', function(event) {
    if (event['originalEvent']['touches']['length'] == 2) {
      /** @type {number} */
      var value = event['originalEvent']['touches'][1]['clientX'] - event['originalEvent']['touches'][0]["clientX"];
      if (eq["touchTwoFingerStartValue"] == -1) {
        /** @type {number} */
        eq['touchTwoFingerStartValue'] = value;
      } else {
        if (value <= eq['touchTwoFingerStartValue']) {
          handleQ("up", 0.05);
        } else {
          handleQ("down", 0.05);
        }
      }
    } else {
      handleMouseMove(event, event['originalEvent']['touches'][0]['clientX'], event["originalEvent"]['touches'][0]["clientY"]);
    }
  });
  $(canvas)["on"]('touchend', function(event) {
    /** @type {number} */
    eq["touchTwoFingerStartValue"] = -1;
    handleMouseUp(event);
  });
  drawYGrid();
  drawXGrid();
  $("#main-canvas")['html'](canvas);
  eq["offsetX"] = $(canvas)['offset']()['left'];
  eq["offsetY"] = $(canvas)['offset']()['top'];
}
/**
 * @return {undefined}
 */
function drawZeroLine() {;
  var orig = xOnCanvas(eq["lastHz"]);
  ctx['beginPath']();
  /** @type {number} */
  ctx['lineWidth'] = 1;
  ctx['setLineDash']([]);
  ctx["strokeStyle"] = '#000';
  ctx['moveTo'](0, yOnCanvas(0));
  ctx['lineTo'](orig, yOnCanvas(0));
  ctx['closePath']();
  ctx["stroke"]();
}
/**
 * @param {?} url
 * @param {!Object} key
 * @return {undefined}
 */
function drawMidLine(url, key) {;
  var a1 = xOnCanvas(eq['lastHz']);
  var params = {
    color : 'rgba(255,255,0,.8)',
    wrong : 'rgba(237,61,61,.3)',
    correct : 'rgba(55,132,55,.3)',
    perfect : 'rgba(105,175,115,.5)',
    gray : 'rgba(200,200,200,.5)',
    transparent : 'rgba(0,0,0,0)'
  };
  ctx["beginPath"]();
  /** @type {number} */
  ctx['lineWidth'] = 3;
  ctx['setLineDash']([]);
  ctx['strokeStyle'] = params[key];
  /** @type {number} */
  var area_sum = 1;
  for (; area_sum <= eq['samples']; area_sum++) {
    /** @type {number} */
    var re_pba_css = area_sum / eq['samples'];
    var d = positionToHz(re_pba_css);
    /** @type {number} */
    var x = 0;
    $['each'](url, function(canCreateDiscussions, settings) {
      if (settings['state'] == "on") {
        x = x + settings["filter"]["log_result"](d);
      }
    });
    var x1 = yOnCanvas(x);
    var x0 = xOnCanvas(d);
    ctx["lineTo"](x0, x1);
    if (x0 > a1) {
      break;
    }
  }
  ctx["stroke"]();
}
/**
 * @return {undefined}
 */
function drawMidBypass() {;
  var orig = xOnCanvas(eq["lastHz"]);
  ctx["beginPath"]();
  /** @type {number} */
  ctx['lineWidth'] = 3;
  /** @type {string} */
  ctx['strokeStyle'] = "#666";
  ctx['moveTo'](0, yOnCanvas(0));
  ctx['lineTo'](orig, yOnCanvas(0));
  ctx['closePath']();
  ctx["stroke"]();
}
/**
 * @return {undefined}
 */
function drawMidLineGap() {;
  var a1 = xOnCanvas(eq['lastHz']);
  ctx['beginPath']();
  /** @type {number} */
  ctx['lineWidth'] = 3;
  ctx['setLineDash']([5, 3]);
  ctx['strokeStyle'] = 'rgba(70,119,115,.8)';
  /** @type {number} */
  var area_sum = 1;
  for (; area_sum <= eq["samples"]; area_sum++) {
    /** @type {number} */
    var re_pba_css = area_sum / eq['samples'];
    var d = positionToHz(re_pba_css);
    /** @type {number} */
    var b = 0;
    /** @type {number} */
    var r = 0;
    $['each'](eq['yourBands'], function(canCreateDiscussions, data) {
      if (data["state"] == "on") {
        r = r + data["filter"]['log_result'](d);
      }
    });
    $['each'](eq['originalBands'], function(canCreateDiscussions, data) {
      if (data["state"] == "on") {
        b = b + data['filter']['log_result'](d);
      }
    });
    /** @type {number} */
    var i = b - r;
    var y = yOnCanvas(i);
    var x0 = xOnCanvas(d);
    ctx["lineTo"](x0, y);
    if (x0 > a1) {
      break;
    }
  }
  ctx['stroke']();
}
/**
 * @param {?} elems
 * @return {undefined}
 */
function drawBandValues(elems) {;
  var hints = {
    0 : "HC",
    1 : "LC",
    2 : "Bandpass",
    3 : "PK",
    4 : 'Notch',
    5 : "LS",
    6 : "HS"
  };
  $['each'](elems, function(canCreateDiscussions, params) {
    if (params['state'] == "on") {
      var _0x416b05 = xOnCanvas(params["freq"]);
      var _0x30c0cd = yOnCanvas(params["gain"]);
      var orig = formatHzLabel(params['freq']);
      var plotWidth = Math["round"](params['gain'] * 10) / 10 + ' dB';
      /** @type {string} */
      var left = Math["round"](params["q"] * 10) / 10 + " Q";
      var currentElement = hints[params['filter_id']];
      /** @type {string} */
      ctx['fillStyle'] = "rgba(220,220,220,1)";
      ctx['font'] = '14px Arial';
      ctx['textAlign'] = 'right';
      ctx['fillText'](orig, params['freq'] >= 12E3 ? _0x416b05 - 25 : _0x416b05 + 65, params['gain'] >= 0 ? _0x30c0cd - 15 : _0x30c0cd + 15);
      if (params['filter_id'] == 3 || params['filter_id'] == 5 || params['filter_id'] == 6) {
        ctx['fillText'](plotWidth, params['freq'] >= 12E3 ? _0x416b05 - 25 : _0x416b05 + 65, params['gain'] >= 0 ? _0x30c0cd : _0x30c0cd + 30);
      }
      if (params['filter_id'] == 3) {
        ctx['fillText'](left, params['freq'] >= 12E3 ? _0x416b05 - 25 : _0x416b05 + 65, params['gain'] >= 0 ? _0x30c0cd + 15 : _0x30c0cd + 45);
      }
    }
  });
}
/**
 * @param {string} yours
 * @return {undefined}
 */
function SwitchEQ(yours) {;
  var artistTrack = gameContext['currentTime'];
  gameMasterGain['gain']['setValueAtTime'](1, artistTrack);
  $('#question')['hide']();
  if (yours == 'original') {
    $(".bypass-btn")['attr']('bypass', 'off');
    $('.compare-btn')['attr']('side', 'left');
    $(".hint-btn")['attr']("active", "no");
    /** @type {string} */
    eq['activeFilter'] = "original";
    $('[eq]')['attr']('bypass', 'off')['attr']('original', "on");
    /** @type {boolean} */
    eq['bypass'] = ![];
    eq["gameOriginalGain"]['gain']['setValueAtTime'](1, artistTrack);
    eq["gameBypassGain"]['gain']["setValueAtTime"](0, artistTrack);
    eq['gameYourGain']['gain']["setValueAtTime"](0, artistTrack);
    drawGrid();
    eqSetup(eq["originalBands"], eq['answerSubmitted'] ? 'gray' : 'transparent');
    drawZeroLine();
    drawMidLine(eq['originalBands'], eq['answerSubmitted'] ? 'gray' : "transparent");
    if (!eq["answerSubmitted"]) {
      $('#question')['show']();
    }
  }
  if (yours == 'bypass') {
    $('[eq]')['attr']('bypass', "on")['attr']('original', 'off');
    $('.hint-btn')['attr']("active", "no");
    /** @type {boolean} */
    eq['bypass'] = !![];
    eq['gameBypassGain']['gain']['setValueAtTime'](1, artistTrack);
    eq['gameYourGain']['gain']['setValueAtTime'](0, artistTrack);
    eq['gameOriginalGain']['gain']['setValueAtTime'](0, artistTrack);
    drawGrid();
    drawMidBypass();
  }
  if (yours == 'yours') {
    $('.bypass-btn')['attr']("bypass", 'off');
    $('.compare-btn')["attr"]('side', "right");
    $(".hint-btn")['attr']("active", 'yes');
    /** @type {string} */
    eq['activeFilter'] = "yours";
    $('[eq]')["attr"]('bypass', 'off')["attr"]('original', 'off');
    /** @type {boolean} */
    eq['bypass'] = ![];
    eq["gameYourGain"]['gain']['setValueAtTime'](1, artistTrack);
    eq['gameBypassGain']["gain"]['setValueAtTime'](0, artistTrack);
    eq['gameOriginalGain']['gain']['setValueAtTime'](0, artistTrack);
    updateMultiband();
    redrawGrid();
    eqSetup(eq['yourBands'], 'color');
    drawZeroLine();
    drawMidLine(eq['yourBands'], 'color');
    drawPointers(eq['yourBands']);
    drawBandValues(eq['yourBands']);
    if (eq["answerSubmitted"]) {
      RevealOriginal(result);
      drawMidLineGap();
    }
  }
}
/**
 * @param {!Object} cid
 * @return {undefined}
 */
function RevealOriginal(cid) {;
  eqSetup(eq['originalBands'], cid);
  drawMidLine(eq['originalBands'], cid);
}
/**
 * @param {string} toTop
 * @param {number} index
 * @param {string} step
 * @param {number} fromTop
 * @param {number} type
 * @return {?}
 */
function scaleBetween(toTop, index, step, fromTop, type) {;
  var number = (step - index) * (toTop - fromTop) / (type - fromTop) + index;
  return Math['round'](number * 100) / 100;
}
/**
 * @param {?} value
 * @return {undefined}
 */
function toggleBand(value) {;
  eq['bandOnFocus'] = value;
  if (eq['yourBands'][eq["bandOnFocus"]]["state"] == 'off') {
    $('[band="' + eq['bandOnFocus'] + '"]')["attr"]('state', "on");
    /** @type {string} */
    eq["yourBands"][eq['bandOnFocus']]['state'] = "on";
  } else {
    $('[band="' + eq['bandOnFocus'] + '"]')["attr"]('state', 'off');
    eq['yourBands'][eq['bandOnFocus']]["state"] = 'off';
  }
  updateMultiband();
  SwitchEQ('yours');
}
/**
 * @return {undefined}
 */
function updateMultiband() {;
  var artistTrack = gameContext['currentTime'];
  $["each"](eq['yourBands'], function(key, params) {
    var GET_AUTH_URL_TIMEOUT = params['state'] == "on" ? params['gain'] : 0;
    var _0xe4408e = params['state'] == "on" ? params['filter_name'] : 'allpass';
    eq["yourFilters"][key]['type'] = _0xe4408e;
    eq['yourFilters'][key]['frequency']['setValueAtTime'](params["freq"], artistTrack);
    eq['yourFilters'][key]["Q"]['setValueAtTime'](params["q"], artistTrack);
    eq['yourFilters'][key]['gain']['setValueAtTime'](GET_AUTH_URL_TIMEOUT, artistTrack);
  });
}
/**
 * @return {undefined}
 */
function buildSoundMap() {;
  var attr2index = getLoopValues();
  var funcsToRun = gameContext["currentTime"];
  gamePlayer = gameContext['createBufferSource']();
  var i;
  /** @type {number} */
  i = 0;
  for (; i < eq['yourBands']["length"]; i++) {
    eq['yourFilters'][i] = gameContext['createBiquadFilter']();
    eq['yourFilters'][i]['type'] = eq['yourBands'][i]["state"] == "on" ? eq['yourBands'][i]['filter_name'] : "allpass";
    eq['yourFilters'][i]['frequency']['setValueAtTime'](eq["yourBands"][i]['freq'], funcsToRun);
    eq['yourFilters'][i]["Q"]["setValueAtTime"](eq['yourBands'][i]["q"], funcsToRun);
    eq['yourFilters'][i]["gain"]['setValueAtTime'](eq['yourBands'][i]["gain"], funcsToRun);
    eq['originalFilters'][i] = gameContext["createBiquadFilter"]();
    eq['originalFilters'][i]["type"] = eq['originalBands'][i]['state'] == "on" ? eq["originalBands"][i]['filter_name'] : 'allpass';
    eq['originalFilters'][i]["frequency"]['setValueAtTime'](eq["originalBands"][i]["freq"], funcsToRun);
    eq['originalFilters'][i]["Q"]['setValueAtTime'](eq["originalBands"][i]["q"], funcsToRun);
    eq['originalFilters'][i]['gain']['setValueAtTime'](eq['originalBands'][i]['gain'], funcsToRun);
  }
  gameMasterGain = gameContext["createGain"]();
  eq["gameBypassGain"] = gameContext['createGain']();
  eq['gameYourGain'] = gameContext['createGain']();
  eq['gameOriginalGain'] = gameContext['createGain']();
  gameMasterGain['gain']['setValueAtTime'](1, funcsToRun);
  eq['gameBypassGain']['gain']["setValueAtTime"](1, funcsToRun);
  eq['gameYourGain']['gain']["setValueAtTime"](0, funcsToRun);
  eq['gameOriginalGain']['gain']['setValueAtTime'](0, funcsToRun);
  gamePlayer["connect"](eq['gameBypassGain']);
  eq['gameBypassGain']['connect'](gameMasterGain);
  gamePlayer['connect'](eq['yourFilters'][0]);
  gamePlayer['connect'](eq['originalFilters'][0]);
  var indexLookupKey;
  /** @type {number} */
  indexLookupKey = 0;
  for (; indexLookupKey < eq["yourBands"]["length"] - 1; indexLookupKey++) {
    eq['yourFilters'][indexLookupKey]["connect"](eq['yourFilters'][indexLookupKey + 1]);
    eq["originalFilters"][indexLookupKey]['connect'](eq['originalFilters'][indexLookupKey + 1]);
  }
  eq['yourFilters'][eq['yourBands']["length"] - 1]['connect'](eq['gameYourGain']);
  eq["originalFilters"][eq['yourBands']["length"] - 1]['connect'](eq['gameOriginalGain']);
  eq['gameOriginalGain']['connect'](gameMasterGain);
  eq['gameYourGain']['connect'](gameMasterGain);
  gameMasterGain['connect'](gameContext["destination"]);
  gamePlayer["buffer"] = gameBuffer;
  /** @type {boolean} */
  gamePlayer['loop'] = !![];
  gamePlayer['loopStart'] = attr2index['start'];
  gamePlayer['loopEnd'] = attr2index['end'];
  gamePlayer['start'](0, attr2index['start']);
  eq['yourAnalyser'] = gameContext['createAnalyser']();
  eq['gameYourGain']["connect"](eq['yourAnalyser']);
  eq['originalAnalyser'] = gameContext['createAnalyser']();
  eq['gameOriginalGain']['connect'](eq["originalAnalyser"]);
}
/**
 * @param {number} val
 * @return {?}
 */
function formatHz(val) {
  return Math["round"](val * 10) / 10;
}
/**
 * @param {number} val
 * @return {?}
 */
function formatHzLabel(val) {;
  return val >= 1E3 ? Math['round'](val / 1E3 * 10) / 10 + ' kHz' : Math["round"](val * 10) / 10 + ' Hz';
}
/**
 * @param {number} canCreateDiscussions
 * @return {?}
 */
function positionToDB(canCreateDiscussions) {
  return dbMax * 2 * (0.5 - canCreateDiscussions);
}
/**
 * @param {number} regexp
 * @return {?}
 */
function positionToHz(regexp) {;
  return Math['round'](minHZscale * Math['pow'](2, totalOctavas * regexp));
}
/**
 * @param {!Object} deltaX
 * @return {?}
 */
function hzToPosition(deltaX) {;
  return Math['log'](deltaX / minHZscale) / Math['log'](Math["pow"](2, totalOctavas)) * 100;
}
/**
 * @param {?} name
 * @param {string} s
 * @return {undefined}
 */
function updateBandValue(name, s) {;
  var _incorrectComparisonFunctionResult = $(name)['attr']("knob");
  /** @type {number} */
  var j = 0;
  /** @type {string} */
  var addedPathkey = "";
  if (_incorrectComparisonFunctionResult == 'freq') {
    /** @type {number} */
    j = parseInt($(name)['attr']('value'));
    /** @type {number} */
    eq['yourBands'][eq['bandOnFocus']]["freq"] = j;
    addedPathkey = j['toFixed'](0);
  } else {
    if (_incorrectComparisonFunctionResult == "gain") {
      j = scaleBetween(s, eq['gainMin'], eq["gainMax"], 0, 100);
      eq['yourBands'][eq["bandOnFocus"]]['gain'] = j;
      addedPathkey = j['toFixed'](1);
    } else {
      if (_incorrectComparisonFunctionResult == "q") {
        j = scaleBetween(s, eq["qMin"], eq["qMax"], 0, 100);
        eq['yourBands'][eq['bandOnFocus']]["q"] = j;
        addedPathkey = j['toFixed'](1);
      }
    }
  }
  $(name)['find']('.knob-value')['html'](addedPathkey);
  SwitchEQ('yours');
}
/**
 * @param {?} dayNames
 * @param {string} switchTextDiv
 * @return {undefined}
 */
function updateKnobValue(dayNames, switchTextDiv) {;
  /** @type {number} */
  eq['bandOnFocus'] = parseInt($(dayNames)['parents']('[band]')["attr"]("band"));
  updateBandValue(dayNames, switchTextDiv);
}
/**
 * @return {undefined}
 */
function updateKnobValues() {;
  var reservedNamesMap = {
    0 : {
      freq : 30,
      gain : 0,
      q : 0.7
    },
    1 : {
      freq : 140,
      gain : 0,
      q : 1
    },
    2 : {
      freq : 440,
      gain : 0,
      q : 1
    },
    3 : {
      freq : 1E3,
      gain : 0,
      q : 1
    },
    4 : {
      freq : 3500,
      gain : 0,
      q : 1
    },
    5 : {
      freq : 9E3,
      gain : 0,
      q : 1
    },
    6 : {
      freq : 16E3,
      gain : 0,
      q : 0.7
    }
  };
  $('.knob-panel')['each'](function() {
    var name = $(this)['parents']("[band]")['attr']('band');
    var i = $(this)['attr']('knob');
    var variable = isset(eq['yourBands'][name]) ? eq['yourBands'][name][i] : reservedNamesMap[name][i];
    var artistTrack = i == 'gain' || i == "q" ? variable["toFixed"](1) : variable['toFixed'](0);
    $(this)["attr"]({
      y : 0,
      start : variable,
      value : variable
    });
    $(this)["find"](".knob-value")['html'](artistTrack);
  });
}
/**
 * @param {?} elems
 * @return {undefined}
 */
function drawPointers(elems) {;
  $['each'](elems, function(canCreateDiscussions, values) {
    var color = 'rgba(0,0,0,0)';
    var newValue = 'rgba(0,0,0,0)';
    if (values["state"] == "on") {
      color = 'rgba(' + values['color'] + ',1)';
      newValue = 'rgba(' + values['border'] + ',1)';
    }
    values["x"] = xOnCanvas(values['freq']);
    values["y"] = yOnCanvas(values['gain']);
    ctx["beginPath"]();
    ctx['arc'](xOnCanvas(values['freq']), yOnCanvas(values['gain']), eq["pointerRadius"], 0, eq['PI2']);
    ctx["closePath"]();
    ctx["fillStyle"] = color;
    ctx["fill"]();
    /** @type {number} */
    ctx['lineWidth'] = 2;
    ctx['strokeStyle'] = newValue;
    ctx['stroke']();
  });
}
/**
 * @param {!Object} e
 * @param {?} oDD
 * @param {?} sGroup
 * @return {undefined}
 */
function handleMouseDown(e, oDD, sGroup) {;
  e["preventDefault"]();
  e['stopPropagation']();
  /** @type {number} */
  var whiteRating = parseInt(oDD - eq['offsetX']);
  /** @type {number} */
  var pageInd = parseInt(sGroup - eq['offsetY']);
  /** @type {number} */
  var value = -1;
  $["each"](eq["yourBands"], function(Night, satellite_coords) {
    if (whiteRating >= satellite_coords["x"] - eq['pointerRadius'] && whiteRating <= satellite_coords["x"] + eq["pointerRadius"] && pageInd >= satellite_coords["y"] - eq['pointerRadius'] && pageInd <= satellite_coords["y"] + eq['pointerRadius']) {
      return value = Night, ![];
    }
  });
  if (value >= 0) {
    eq['pointerDrag'] = value;
    /** @type {boolean} */
    eq["isDown"] = !![];
  }
}
/**
 * @param {!Object} event
 * @param {?} targetClass
 * @param {?} initialX
 * @return {undefined}
 */
function handleMouseMove(event, targetClass, initialX) {;
  if (!eq['isDown']) {
    return;
  }
  event['preventDefault']();
  event['stopPropagation']();
  var _0x3e1fe9 = positionToHz(parseInt(targetClass - eq['offsetX']) / eq['canvasWidth']);
  var gain = positionToDB(parseInt(initialX - eq['offsetY']) / eq['canvasHeight']);
  if (_0x3e1fe9 > 20 && _0x3e1fe9 < 19500) {
    eq["yourBands"][eq['pointerDrag']]['freq'] = _0x3e1fe9;
  }
  if (eq["yourBands"][eq['pointerDrag']]['filter_name'] != 'highpass' && eq['yourBands'][eq["pointerDrag"]]['filter_name'] != "lowpass" && gain < 12.5 && gain > -12.5) {
    eq["yourBands"][eq['pointerDrag']]["gain"] = gain;
  }
  SwitchEQ("yours");
  updateKnobValues();
}
/**
 * @param {string} directionCode
 * @param {number} partKeys
 * @return {undefined}
 */
function handleQ(directionCode, partKeys) {;
  if (!eq['isDown'] || eq['yourBands'][eq['pointerDrag']]['band_id'] == 'highpass' || eq['yourBands'][eq["pointerDrag"]]["band_id"] == 'lowpass') {
    return;
  }
  if (directionCode == "up" && eq["yourBands"][eq["pointerDrag"]]["q"] < 5.9) {
    eq["yourBands"][eq['pointerDrag']]["q"] += partKeys;
  }
  if (directionCode == "down" && eq['yourBands'][eq['pointerDrag']]["q"] > 0.2) {
    eq["yourBands"][eq['pointerDrag']]["q"] -= partKeys;
  }
  SwitchEQ('yours');
  updateKnobValues();
}
/**
 * @param {?} myPreferences
 * @return {undefined}
 */
function handleMouseWheel(myPreferences) {;
  if (myPreferences['deltaY'] >= 0) {
    handleQ("up", 0.1);
  } else {
    handleQ('down', 0.1);
  }
}
/**
 * @param {?} event
 * @return {undefined}
 */
function handleMouseUp(event) {;
  event['preventDefault']();
  event['stopPropagation']();
  /** @type {boolean} */
  eq["isDown"] = ![];
}
/**
 * @param {?} elems
 * @return {undefined}
 */
function buildBandKnobsOld(elems) {;
  $['each'](elems, function(canCreateDiscussions, st) {
    var addIndent = getResponsesAnalysisDataPrefixCacheKey;
    $(addIndent("0x6") + st["id"] + '"]')[addIndent("0x2")](addIndent("0x49"), "on")[addIndent("0x2")](addIndent("0x100"), addIndent("0xed"));
  });
}
/**
 * @param {?} elems
 * @return {undefined}
 */
function buildBandKnobs(elems) {;
  $('[bands]')["html"]("");
  $['each'](elems, function(canCreateDiscussions, sks) {
    var params = dBands[sks["band_id"]];
    /** @type {string} */
    var escapedEmail = "";
    var sitesusers = '<div class="empty-knob-panel"></div>';
    var siteName = '<div class="empty-knob-panel"></div>';
    /** @type {string} */
    escapedEmail = '<div class="knob-panel" knob="freq" state="inactive" sensitivity="' + params["sensitivity_freq"] + '" y="0" min="20" max="19100" base="' + params['freq'] + '" start="' + params["freq"] + '>" value="' + params['freq'] + '" ondblclick="knobBase(this);" onMouseDown="knobActivate(this, event);">' + '<div class="knob-controller" style="transform: rotate(' + params["angle_freq"] + 'deg)"><i class="fa fa-circle"></i></div>' + '<div class="knob-value" contentEditable="true" onBlur="knobValueBlur(this);" onFocus="knobValueFocus(this);" onKeyDown="knobKeydown(this, event);">' + params['freq'] + "</div>" + '<div class="knob-label">FREQ</div>' + "</div>";
    if (params['knobs']['includes']('gain')) {
      sitesusers = '<div class="knob-panel" knob="gain" state="inactive" sensitivity="0.05" y="0" min="-18" max="18" base="' + params['gain'] + '" start="' + params['gain'] + '" value="' + params['gain'] + '"ondblclick="knobBase(this);"onMouseDown="knobActivate(this, event);">' + '<div class="knob-controller" style="transform: rotate(' + params['angle_gain'] + 'deg)"><i class="fa fa-circle"></i></div>' + '<div class="knob-value" contentEditable="true" onBlur="knobValueBlur(this);" onFocus="knobValueFocus(this);" onKeyDown="knobKeydown(this, event);">' + params['gain'] + '</div>' + '<div class="knob-label">GAIN</div>' + '</div>';
    }
    if (params['knobs']['includes']("q")) {
      siteName = '<div class="knob-panel" knob="q" state="inactive" sensitivity="0.2" y="0" min="0.5" max="3" base="' + params["q"] + '" start="' + params["q"] + '" value="' + params["q"] + '" ondblclick="knobBase(this);" onMouseDown="knobActivate(this, event);">' + '<div class="knob-controller" style="transform: rotate(' + params["angle_q"] + 'deg)"><i class="fa fa-circle"></i></div>' + '<div class="knob-value" contentEditable="true" onBlur="knobValueBlur(this);" onFocus="knobValueFocus(this);" onKeyDown="knobKeydown(this, event);">' + params["q"] + '</div>' + '<div class="knob-label">Q</div>' + '</div>';
    }
    var scrollbarHelpers = '<div band="' + sks["id"] + '" state="' + sks['state'] + '">' + '<div toggle-band onclick="toggleBand(' + sks["id"] + ');">' + '<div toggle-band-btn style="background: rgb(' + params["color"] + ')"></div>' + '<img toggle-band-img src="' + host + '/playground/eq/filter-50/' + params['filter_name'] + '.png"/>' + "</div>" + '<div class="controllers">' + escapedEmail + sitesusers + siteName + "</div>" + '</div>';
    $('[bands]')["append"](scrollbarHelpers);
  });
}
/**
 * @param {?} jArr
 * @return {?}
 */
function getEQStats(jArr) {;
  var MAXL10 = xOnCanvas(eq['lastHz']);
  /** @type {!Array} */
  var PL$86 = [];
  /** @type {number} */
  var secondsPerYear = 1;
  for (; secondsPerYear <= eq['samples']; secondsPerYear++) {
    /** @type {number} */
    var interestEfold = secondsPerYear / eq['samples'];
    var i = positionToHz(interestEfold);
    /** @type {number} */
    var url = 0;
    $["each"](jArr, function(canCreateDiscussions, values) {
      var parseInt = unsetPolling;
      if (values['state'] == "on") {
        url = url + values['filter']['log_result'](i);
      }
    });
    var startY = yOnCanvas(url);
    var x = xOnCanvas(i);
    ctx['lineTo'](x, startY);
    if (x > MAXL10) {
      break;
    }
    PL$86["push"]({
      hz : i,
      db : url,
      y : startY
    });
  }
  return PL$86;
}
/**
 * @return {undefined}
 */
function startEQ() {;
  buildSoundMap();
  initKnobs();
  buildBandKnobs(eq['yourBands']);
  SwitchEQ("original");
  drawGrid();
  eqSetup(eq['yourBands'], 'transparent');
  eqSetup(eq['originalBands'], 'transparent');
  drawMidBypass();
}
/**
 * @param {!Object} audioContext
 * @param {number} clipLevel
 * @param {number} averaging
 * @param {number} clipLag
 * @return {?}
 */
function createAudioMeter(audioContext, clipLevel, averaging, clipLag) {;
  var volume = audioContext['createScriptProcessor'](256);
  return volume['onaudioprocess'] = volumeAudioProcess, volume['clipping'] = ![], volume['lastClip'] = 0, volume['volume'] = 0, volume['clipLevel'] = clipLevel || 0.98, volume['averaging'] = averaging || 0.95, volume['clipLag'] = clipLag || 750, volume["connect"](audioContext["destination"]), volume['checkClipping'] = function() {
    var mat = now;
    if (!this[mat("0x39")]) {
      return ![];
    }
    if (this["lastClip"] + this[mat("0x76")] < window["performance"][mat("0x38")]()) {
      /** @type {boolean} */
      this["clipping"] = ![];
    }
    return this["clipping"];
  }, volume['shutdown'] = function() {
    this["disconnect"]();
    /** @type {null} */
    this["onaudioprocess"] = null;
  }, volume;
}
/**
 * @param {?} event
 * @return {undefined}
 */
function volumeAudioProcess(event) {;
  var window = event['inputBuffer']['getChannelData'](0);
  var f = window['length'];
  /** @type {number} */
  var number = 0;
  var value;
  /** @type {number} */
  var g = 0;
  for (; g < f; g++) {
    value = window[g];
    if (Math['abs'](value) >= this['clipLevel']) {
      /** @type {boolean} */
      this["clipping"] = !![];
      this['lastClip'] = window['performance']['now']();
    }
    /** @type {number} */
    number = number + value * value;
  }
  var result = Math['sqrt'](number / f);
  this['volume'] = Math["max"](result, this['volume'] * this["averaging"]);
  if (eq["lastMeterEvent"] % 3 === 0) {
    /** @type {boolean} */
    eq['meterUpdate'] = !![];
  } else {
    /** @type {boolean} */
    eq['meterUpdate'] = ![];
  }
  eq['lastMeterEvent'] = Math["floor"](event['playbackTime']);
  if (eq['meterUpdate']) {
  }
}
/**
 * @return {undefined}
 */
function getSpectrogramResults() {;
  $("[spectrograms]")['attr']("loading", "yes");
  var funcsToRun = gameContext["currentTime"];
  eq['gameOriginalGain']['gain']["setValueAtTime"](1, funcsToRun);
  eq["gameYourGain"]['gain']['setValueAtTime'](1, funcsToRun);
  gameMasterGain["gain"]['setValueAtTime'](0, funcsToRun);
  eq["freqDataMap"] = {
    original : [],
    your : [],
    diff : []
  };
  let count = 0;
  let logIntervalId = setInterval(function() {
    var height = bodyHeight;
    if (count == eq["freqRunner"]["count"]) {
      clearInterval(logIntervalId);
      drawSpectrogramResults();
      $("[spectrograms]")[height("0x2")](height("0x91"), "no");
    }
    let b = new Uint8Array(eq[height("0x87")][height("0x0")]);
    let a = new Uint8Array(eq[height("0xdb")][height("0x0")]);
    eq[height("0x87")][height("0x8c")](b);
    eq[height("0xdb")][height("0x8c")](a);
    eq[height("0xde")][height("0x3")][height("0x6c")](b);
    eq["freqDataMap"][height("0x3f")][height("0x6c")](a);
    let CustomTests = [];
    $[height("0x7c")](b, function(key, canCreateDiscussions) {
      var textHeight = height;
      var element = Math[textHeight("0xc")](b[key] - a[key]);
      CustomTests[textHeight("0x6c")](element);
    });
    eq[height("0xde")][height("0x6b")][height("0x6c")](CustomTests);
    count++;
  }, eq['freqRunner']['timegap']);
}
/**
 * @return {undefined}
 */
function drawSpectrogramResults() {;
  drawTimelineSpectrogram('original', eq['freqDataMap']["original"]);
  drawAvgSpectrogram("original", eq['freqDataMap']['original']);
  drawTimelineSpectrogram('your', eq['freqDataMap']['your']);
  drawAvgSpectrogram('your', eq['freqDataMap']['your']);
  drawTimelineSpectrogram('diff', eq['freqDataMap']["diff"]);
  drawAvgSpectrogram("diff", eq['freqDataMap']["diff"]);
  var beyondBoundsFlingDistance = getSpectrogramDiff(eq['freqDataMap']["diff"]);
  /** @type {number} */
  var flingDistance = 20;
  /** @type {number} */
  var rpm_traffic = beyondBoundsFlingDistance >= flingDistance ? 0 : (flingDistance - beyondBoundsFlingDistance) / flingDistance * 100;
  $('[diff-cor]')["html"](beyondBoundsFlingDistance['toFixed'](2));
  $('[diff-accuracy]')["html"](rpm_traffic['toFixed'](0));
}
/**
 * @param {?} noResolveAction
 * @param {?} showNotes
 * @return {undefined}
 */
function drawTimelineSpectrogram(noResolveAction, showNotes) {;
  let rpm_traffic = $('[timeline-spectrogram="' + noResolveAction + '"]')[0];
  let ctx = rpm_traffic['getContext']("2d");
  let sizeX = rpm_traffic['width'];
  let sizeY = rpm_traffic['height'];
  let mysecond_no = sizeY / 1024 * 1.5;
  let size = sizeX / eq["freqRunner"]['count'];
  let orig = ctx["getImageData"](1, 0, sizeX - 1, sizeY);
  ctx['fillStyle'] = 'hsl(280, 100%, 10%)';
  ctx["clearRect"](0, 0, sizeX, sizeY);
  ctx['putImageData'](orig, 0, 0);
  $['each'](showNotes, function(ry0, elems) {
    var mat = now;
    let x0 = ry0 * size;
    $[mat("0x7c")](elems, function(myfirst_no, isSlidingUp) {
      var getResponsesAnalysisDataPrefixCacheKey = mat;
      let _0x5282e7 = isSlidingUp / 255;
      let groupId = Math['round'](_0x5282e7 * 120 + 280 % 360);
      let _0x43fffe = 10 + 70 * _0x5282e7 + "%";
      ctx["beginPath"]();
      /** @type {string} */
      ctx['strokeStyle'] = 'hsl(' + groupId + ", 100%, " + _0x43fffe + ")";
      ctx['strokeWidth'] = size + "px";
      ctx["moveTo"](x0, sizeY - myfirst_no * mysecond_no);
      ctx['lineTo'](x0, sizeY - (myfirst_no * mysecond_no + mysecond_no));
      ctx['stroke']();
    });
  });
}
/**
 * @param {string} string
 * @param {!Object} values
 * @return {undefined}
 */
function drawAvgSpectrogram(string, values) {;
  let a = $('[avg-spectrogram="' + string + '"]')[0];
  let options = a['getContext']("2d");
  options['fillStyle'] = 'rgb(0, 0, 0)';
  options['fillRect'](0, 0, a["width"], a['height']);
  /** @type {number} */
  options['lineWidth'] = 1;
  options['strokeStyle'] = 'rgb(140, 140, 140)';
  options['beginPath']();
  /** @type {number} */
  var j = 0;
  for (; j < values[0]['length']; j++) {
    /** @type {number} */
    var diff = 0;
    /** @type {number} */
    var i = 0;
    for (; i < values["length"]; i++) {
      diff = diff + values[i][j];
    }
    /** @type {number} */
    var backoffDelay = diff / values['length'];
    /** @type {number} */
    var backoffDelaySeconds = backoffDelay / 128;
    /** @type {number} */
    var xhr = a['height'] - backoffDelaySeconds * a['height'] / 2;
    /** @type {number} */
    var datum = j / values[0]['length'] * a['width'];
    if (j === 0) {
      options['moveTo'](datum, xhr);
    } else {
      options['lineTo'](datum, xhr);
    }
  }
  options['stroke']();
}
/**
 * @param {?} elems
 * @return {?}
 */
function getSpectrogramDiff(elems) {;
  /** @type {number} */
  var articleArea = 255 * elems['length'];
  /** @type {number} */
  var childFloatArea = 0;
  return $['each'](elems, function(canCreateDiscussions, jArr) {
    var dv = childCount;
    let nCatCount = 0;
    $["each"](jArr, function(canCreateDiscussions, n) {
      nCatCount = nCatCount + n;
    });
    childFloatArea = childFloatArea + nCatCount / elems[dv("0xbd")];
  }), childFloatArea / articleArea * 100;
}
/**
 * @param {number} canCreateDiscussions
 * @return {undefined}
 */
function keyIsPressed(canCreateDiscussions) {;
  if (canCreateDiscussions == 32) {
    if (!eq['answerSubmitted']) {
      ConfirmSettings();
    } else {
      GoNext();
    }
  }
  if (canCreateDiscussions == 38) {
    handleQ("down", 0.1);
  }
  if (canCreateDiscussions == 40) {
    handleQ("up", 0.1);
  }
  if (canCreateDiscussions == 37) {
    SwitchEQ('original');
  }
  if (canCreateDiscussions == 39) {
    SwitchEQ("yours");
  }
  if (canCreateDiscussions == 66) {
    Bypass();
  }
}
/**
 * @return {?}
 */
function getAccuracy() {;
  /** @type {number} */
  var __highlight_line_start = 0;
  /** @type {number} */
  var __highlight_line_end = 2E4;
  /** @type {number} */
  var symbolMatch = 0;
  /** @type {number} */
  var symbolOffset = 0;
  /** @type {number} */
  var secondsPerYear = 1;
  for (; secondsPerYear <= eq['samples']; secondsPerYear++) {
    /** @type {number} */
    var interestEfold = secondsPerYear / eq['samples'];
    var __line_number = positionToHz(interestEfold);
    /** @type {number} */
    var waitBeforeReconnect = 0;
    /** @type {number} */
    var daysLoaded = 0;
    if (__line_number >= __highlight_line_start && __line_number <= __highlight_line_end) {
      $['each'](eq['yourBands'], function(canCreateDiscussions, map) {
        if (map['state'] == "on") {
          var mmaCalendarDaysInterval = map["filter"]['log_result'](__line_number);
          if (mmaCalendarDaysInterval < -16) {
            /** @type {number} */
            mmaCalendarDaysInterval = -16;
          }
          if (mmaCalendarDaysInterval > 16) {
            /** @type {number} */
            mmaCalendarDaysInterval = 16;
          }
          daysLoaded = daysLoaded + mmaCalendarDaysInterval;
        }
      });
      $['each'](eq['originalBands'], function(canCreateDiscussions, map) {
        if (map['state'] == "on") {
          var reconnectTimeIncrease = map["filter"]['log_result'](__line_number);
          if (reconnectTimeIncrease < -16) {
            /** @type {number} */
            reconnectTimeIncrease = -16;
          }
          if (reconnectTimeIncrease > 16) {
            /** @type {number} */
            reconnectTimeIncrease = 16;
          }
          waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
        }
      });
      symbolOffset = symbolOffset + Math["abs"](waitBeforeReconnect - daysLoaded);
    }
  }
  return symbolOffset < deviation && (symbolMatch = 100 - symbolOffset / deviation * 100), symbolMatch['toFixed'](0);
}
/**
 * @param {number} meterInfo
 * @param {string} json
 * @return {undefined}
 */
function updateMeter(meterInfo, json) {;
  /** @type {number} */
  var _FOO_ = 180 + meterInfo * 180 / 100;
  $('[meter="' + json + '"]')['find']('.needle')['css']("transform", 'rotate(' + _FOO_ + 'deg)');
  $('[meter="' + json + '"]')['find']('.meter-value')["html"](meterInfo + '% accurate');
}
/**
 * @return {undefined}
 */
function resetMeter() {;
  /** @type {number} */
  var nb_numbers = percentAccuracy * 180 / 100;
  /** @type {number} */
  var range = perfectPercent * 180 / 100;
  $(".yk-meter")['find']('.needle')['css']("transform", 'rotate(180deg)');
  $('.yk-meter')["find"]('.meter-correct')['css']('transform', 'rotate(' + nb_numbers + 'deg)');
  $('.yk-meter')['find'](".meter-perfect")["css"]('transform', 'rotate(' + range + 'deg)');
}
/**
 * @param {?} dayNames
 * @return {undefined}
 */
function CompareResult(dayNames) {;
  if ($(dayNames)['attr']('side') == "left") {
    SwitchEQ('yours');
  } else {
    SwitchEQ('original');
  }
}
/**
 * @return {undefined}
 */
function Bypass() {;
  if ($('#bypass-btn')['attr']('bypass') == 'off') {
    SwitchEQ('bypass');
    $('#bypass-btn')['attr']('bypass', "on");
  } else {
    SwitchEQ(eq["activeFilter"]);
    $("#bypass-btn")['attr']('bypass', 'off');
  }
}
/**
 * @param {?} elem
 * @return {undefined}
 */
function UseHint(elem) {;
  /** @type {!Array} */
  var PL$24 = [];
  if (hints <= 0) {
    $(".hint-btn")["attr"]('active', "no");
    return;
  }
  $['each'](eq['yourBands'], function(PL$60, rpm_traffic) {
    var now = target;
    if (!rpm_traffic['hint']) {
      PL$24["push"](PL$60);
    }
  });
  if (PL$24['length'] < 2) {
    $(elem)["attr"]('banned', "yes");
    setTimeout(function() {
      var now = target;
      $(elem)["attr"]('banned', "no");
    }, 200);
  } else {
    var currentParam = getArrayRandomElements(PL$24, 1)[0];
    eq['yourBands'][currentParam] = eq['originalBands'][currentParam];
    /** @type {boolean} */
    eq['yourBands'][currentParam]['hint'] = !![];
    SwitchEQ('yours');
    updateKnobValues();
    $('[band="' + currentParam + '"]')['attr']('hint', 'yes');
    hints--;
    $('[hints]')['text'](hints);
    if (hints <= 0) {
      $(elem)["attr"]('active', "no");
    }
  }
}
/**
 * @return {undefined}
 */
function ConfirmSettings() {;
  if ($('#confirm-settings')['attr']('active') == "no") {
    return;
  }
  $('#confirm-settings')['attr']('active', "no");
  $('#go-next-btn')['attr']('active', 'yes');
  $('.game-helper-panel')['attr']('show', "no");
  $('.yk-meter')['show']();
  $('.game-compare-panel')['attr']('show', "yes");
  $('[eq]')['attr']("original", 'off');
  if ($("#game-panel-body")["attr"]('state') === 'wait') {
    return;
  }
  $('#game-panel-body')['attr']('state', 'wait');
  /** @type {boolean} */
  eq['answerSubmitted'] = !![];
  var artistTrack = getAccuracy();
  drawMidLineGap();
  submitEqMirrorResult(artistTrack);
}
/**
 * @return {undefined}
 */
function GoNext() {;
  if ($('#go-next-btn')['attr']('active') == "no") {
    return;
  }
  var artistTrack = gameContext['currentTime'];
  eq['gameOriginalGain']['gain']["setValueAtTime"](0, artistTrack);
  eq["gameBypassGain"]['gain']['setValueAtTime'](0, artistTrack);
  eq['gameYourGain']["gain"]["setValueAtTime"](0, artistTrack);
  CustomGoNext();
}
/**
 * @param {!Object} premium_info
 * @return {?}
 */
function getRandomFrequencyBetween(premium_info) {
  /** @type {number} */
  var amount_in_currency_value = 0;
  for (; amount_in_currency_value < premium_info[0] || amount_in_currency_value > premium_info[1];) {
    amount_in_currency_value = getRandomFrequency();
  }
  return amount_in_currency_value;
}
/**
 * @param {!Object} props
 * @return {?}
 */
function getWholeBetween(props) {;
  return Math['floor'](Math["random"]() * (Math["floor"](props[1]) - Math["ceil"](props[0]) + 1)) + Math['ceil'](props[0]);
}
/**
 * @param {!Object} canCreateDiscussions
 * @return {?}
 */
function getFloatBetween(canCreateDiscussions) {;
  return parseFloat((Math['random']() * (canCreateDiscussions[1] - canCreateDiscussions[0]) + canCreateDiscussions[0])['toFixed'](1));
}
/**
 * @param {?} prop
 * @return {undefined}
 */
function createQuestion(prop) {;
  /** @type {!Array} */
  eq['originalBands'] = [];
  /** @type {!Array} */
  eq["yourBands"] = [];
  /** @type {number} */
  var length = 1;
  $['each'](prop, function(newWayId, result) {
    var name = short[result["filter_name"]];
    var id = name == 'peaking' ? 'peaking' + length : name;
    var data = dBands[id];
    var sampleRate = getRandomFrequencyBetween(result['freq']);
    var queryStr2 = getFloatBetween(result["q"]);
    var gain = getFloatBetween(result['gain']);
    eq['originalBands']["push"]({
      id : newWayId,
      band_id : id,
      state : "on",
      color : data['color'],
      border : data["border"],
      filter_name : name,
      filter_id : data["filter_id"],
      freq : sampleRate,
      gain : gain,
      q : queryStr2,
      chart : {},
      filter : {},
      hint : ![]
    });
    eq['yourBands']["push"]({
      id : newWayId,
      band_id : id,
      state : "on",
      color : data['color'],
      border : data["border"],
      filter_name : name,
      filter_id : data["filter_id"],
      freq : data["freq"],
      gain : data['gain'],
      q : data["q"],
      chart : {},
      filter : {},
      hint : ![]
    });
    if (name == "peaking") {
      length++;
    }
  });
}
/**
 * @param {?} mname
 * @return {undefined}
 */
function loadNext(mname) {;
  /** @type {boolean} */
  eq['answerSubmitted'] = ![];
  $('.game-cover')['removeClass']("active");
  $('#game-panel-body')['attr']('state', 'play');
  resetMeter();
  createQuestion(mname);
  updateKnobValues();
  $('#question')["hide"]();
  $("[band]")["attr"]("state", "off")['attr']('show', "no");
  $('.yk-meter')['hide']();
  $('#go-next-btn')['attr']('active', "no");
  $("#confirm-settings")['attr']('active', 'yes');
  startEQ();
}
/**
 * @return {undefined}
 */
function setGame() {;
  resetKeyboardKeys();
  activateKeyboardKeys('game-panel-body');
  activateKeyboardKeys('game-panel-footer');
  showLives();
  getNextBands();
}
;








