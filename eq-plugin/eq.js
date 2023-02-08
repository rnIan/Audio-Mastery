// MAIN EQ VARIABLE
var eq = {
    bandsArray : [],
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
    samples : 1000,
    lastHz : 22E3,
    canvasWidth : 0,
    canvasHeight : 0,
    offsetX : 0,
    offsetY : 0,
    bandOnFocus : 0,
    isDown : ![],
    isTouchdown : ![],
    filtersArray : {},
    gameYourGain : null,
    yourAnalyser : null,
    freqDataMap : {
      your : [],
      diff : []
    },
    freqRunner : {
      timegap : 10,
      count : 300
    },
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

var dbMax = 16;
var minHZscale = 16;
var totalOctavas = 10.5;
var canvas;
var ctx;
var meter;
var result;
var totalSections = 12;
var peakingLength = 1;

var full_band_name = {
  LC : 'highpass',
  LS : "lowshelf",
  PK : 'peaking',
  HS : "highshelf",
  HC : 'lowpass'
};

// Bands default parameters
var bands_definitions = {
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
    freq : 1000,
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
    freq : 9000,
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
    freq : 16000,
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

var gridLinesColor = "#85694b";
var gridLineWidth = 0.75;
var gridFontStyle = 'normal 11px Arial';

function AudioStart() {
  if (typeof gameSourceNode == "undefined") {
    loadEqPlugin();
  }

  if (gameContext.state === 'suspended') {
    gameContext.resume();
  }

  if (playing == false) {
    audioElement.play();
    playing=true;  
  }
}

function AudioStop() {
  if (playing == true) {
    audioElement.pause();
    playing=false;  
  }
}

// set up window.AudioContext
function loadAudioContext() {
  gameContext = new (window["AudioContext"] || window["webkitAudioContext"]);
  gameMasterGain = gameContext.createGain();

  // Load song from html audio element
  audioElement = document.querySelector('#song1');
  console.log(audioElement)
  gameSourceNode = gameContext.createMediaElementSource(audioElement);
  
  gameMasterGain["gain"].setValueAtTime(defaultGameVolume, gameContext["currentTime"]);
}

function connectFilters() {
  // Check if there are filters added already
  if(Object.keys(eq['filtersArray']).length !== 0) {

    gameSourceNode.disconnect()
    gameSourceNode.connect(eq['filtersArray'][0]);

    for (var i = 0; i < eq["bandsArray"]["length"] - 1; i++) {
      // Connect every filter to the next filter
      eq['filtersArray'][i].connect(eq['filtersArray'][i + 1]);
    }
    // Connect last filter to gain
    eq['filtersArray'][eq['bandsArray']["length"] - 1].connect(eq['gameYourGain']);
  }
  else {
    gameSourceNode.connect(eq['gameYourGain']);
  }
}

function createFilters(currentTime) {
    // Go through array of bands
    for (var i = 0; i < eq['bandsArray']["length"]; i++) {
      // set up AudioContext equalizer
      eq['filtersArray'][i] = gameContext.createBiquadFilter();
      eq['filtersArray'][i]['type'] = eq['bandsArray'][i]["state"] == "on" ? eq['bandsArray'][i]['filter_name'] : "allpass";
      eq['filtersArray'][i]['frequency'].setValueAtTime(eq["bandsArray"][i]['freq'], currentTime);
      eq['filtersArray'][i]["Q"].setValueAtTime(eq['bandsArray'][i]["q"], currentTime);
      eq['filtersArray'][i]["gain"].setValueAtTime(eq['bandsArray'][i]["gain"], currentTime);
    }
}

// Create equalizers in AudioContext
function connectAudioNodes() {
  var currentTime = gameContext["currentTime"];

  createFilters(currentTime);

  gameMasterGain = gameContext.createGain();

  eq['gameYourGain'] = gameContext.createGain();

  gameMasterGain['gain'].setValueAtTime(1, currentTime);
  eq['gameYourGain']['gain'].setValueAtTime(1, currentTime);
  
  connectFilters();

  eq['gameYourGain'].connect(gameMasterGain);

  gameMasterGain.connect(gameContext["destination"]);

  eq['yourAnalyser'] = gameContext.createAnalyser();
  eq['gameYourGain'].connect(eq['yourAnalyser']);
}

function buildKnobs(bands) {
  $('[bands]').html("");

  $.each(bands, function(key, value) {
    var params = bands_definitions[value["band_id"]];
    var escapedEmail = "";
    var sitesusers = '<div class="empty-knob-panel"></div>';
    var siteName = '<div class="empty-knob-panel"></div>';
    escapedEmail = '<div class="knob-panel" knob="freq" state="inactive" sensitivity="' + params["sensitivity_freq"] + '" y="0" min="20" max="19100" base="' + params['freq'] + '" start="' + params["freq"] + '>" value="' + params['freq'] + '" ondblclick="knobBase(this);" onMouseDown="knobActivate(this, event);">' + '<div class="knob-controller" style="transform: rotate(' + params["angle_freq"] + 'deg)"><i class="fa fa-circle"></i></div>' + '<div class="knob-value" contentEditable="true" onBlur="knobValueBlur(this);" onFocus="knobValueFocus(this);" onKeyDown="knobKeydown(this, event);">' + params['freq'] + "</div>" + '<div class="knob-label">FREQ</div>' + "</div>";

    if (params['knobs']['includes']('gain')) {
      sitesusers = '<div class="knob-panel" knob="gain" state="inactive" sensitivity="0.05" y="0" min="-18" max="18" base="' + params['gain'] + '" start="' + params['gain'] + '" value="' + params['gain'] + '"ondblclick="knobBase(this);"onMouseDown="knobActivate(this, event);">' + '<div class="knob-controller" style="transform: rotate(' + params['angle_gain'] + 'deg)"><i class="fa fa-circle"></i></div>' + '<div class="knob-value" contentEditable="true" onBlur="knobValueBlur(this);" onFocus="knobValueFocus(this);" onKeyDown="knobKeydown(this, event);">' + params['gain'] + '</div>' + '<div class="knob-label">GAIN</div>' + '</div>';
    }

    if (params['knobs']['includes']("q")) {
      siteName = '<div class="knob-panel" knob="q" state="inactive" sensitivity="0.2" y="0" min="0.5" max="3" base="' + params["q"] + '" start="' + params["q"] + '" value="' + params["q"] + '" ondblclick="knobBase(this);" onMouseDown="knobActivate(this, event);">' + '<div class="knob-controller" style="transform: rotate(' + params["angle_q"] + 'deg)"><i class="fa fa-circle"></i></div>' + '<div class="knob-value" contentEditable="true" onBlur="knobValueBlur(this);" onFocus="knobValueFocus(this);" onKeyDown="knobKeydown(this, event);">' + params["q"] + '</div>' + '<div class="knob-label">Q</div>' + '</div>';
    }
    var scrollbarHelpers = '<div band="' + key + '" state="' + value['state'] + '">' + '<div toggle-band onclick="toggleBand(' + key + ');">' + '<div toggle-band-btn style="background: rgb(' + params["color"] + ')"></div>' + '<img toggle-band-img src="../eq-plugin/img/icons/figma-icons/' + params['filter_name'] + '.svg"/>' + "</div>" + '<div class="controllers">' + escapedEmail + sitesusers + siteName + "</div>" + '</div>';
    $('[bands]').append(scrollbarHelpers);
  });
}

function drawYGrid() {;
  ctx.beginPath();
  ctx['font'] = gridFontStyle;
  ctx["textAlign"] = 'right';

  ctx['fillStyle'] = gridLinesColor;
  ctx['strokeStyle'] = gridLinesColor;
  ctx["lineWidth"] = gridLineWidth;

  ctx['fontWeight'] = 100;
  ctx.setLineDash([]);

  var which = [18, 12, 6, 0, -6, -12, -18];
  $.each(which, function(key, text) {
    ctx.moveTo(xOnCanvas(0), yOnCanvas(text));
    ctx.lineTo(eq["canvasWidth"] - 20, yOnCanvas(text));
    console.log(text)
    ctx.fillText(text, eq['canvasWidth'], yOnCanvas(text) + 3);
  });
  ctx.stroke();
}

function drawXGrid() {
  ctx.beginPath();
  ctx['font'] = gridFontStyle;
  ctx['textAlign'] = 'center';

  ctx["fillStyle"] = gridLinesColor;
  ctx['lineWidth'] = gridLineWidth;
  ctx['strokeStyle'] = gridLinesColor;

  ctx['fontWeight'] = 100;
  ctx.setLineDash([]);

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
  $.each(which, function(left, key) {
    var orig = eq['canvasWidth'] * hzToPosition(left) / 100 + eq['gap'];
    if (key) {
      ctx.fillText(formatHzLabel(left), orig, eq["canvasHeight"] - 7);
    }
    ctx.moveTo(orig, 20);
    ctx.lineTo(orig, eq['canvasHeight'] - 20);
  });
  ctx.stroke();
}

function redrawGrid() {
  ctx.clearRect(0, 0, eq['canvasWidth'], eq['canvasHeight']);
  drawYGrid();
  drawXGrid();
}

function handleMouseDown(e, clientX, clientY) {;
  e.preventDefault();
  e.stopPropagation();

  var clientX_border = parseInt(clientX - eq['offsetX']);
  var clientY_border = parseInt(clientY - eq['offsetY']);
  var value = -1;

  // check if eq was clicked on some eq band circle
  $.each(eq["bandsArray"], function(key, band_value) {
    if (clientX_border >= band_value["x"] - eq['pointerRadius'] && clientX_border <= band_value["x"] + eq["pointerRadius"] && clientY_border >= band_value["y"] - eq['pointerRadius'] && clientY_border <= band_value["y"] + eq['pointerRadius']) {
      return value = key, ![];
    }
  });

  if (value >= 0) {
    // which band is being dragged
    eq['pointerDrag'] = value;
    // true
    eq["isDown"] = !![];
  }
}

function handleMouseMove(event, clientX, clientY) {
  // return if the mouse was not clicked before dragging
  if (!eq['isDown']) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  var axisX = positionToHz(parseInt(clientX - eq['offsetX']) / eq['canvasWidth']);
  var axisY = positionToDB(parseInt(clientY - eq['offsetY']) / eq['canvasHeight']);

  if (axisX > 20 && axisX < 19500) {
    eq["bandsArray"][eq['pointerDrag']]['freq'] = axisX;
  }

  if (eq["bandsArray"][eq['pointerDrag']]['filter_name'] != 'highpass' && eq['bandsArray'][eq["pointerDrag"]]['filter_name'] != "lowpass" && axisY < 12.5 && axisY > -12.5) {
    eq["bandsArray"][eq['pointerDrag']]["gain"] = axisY;
  }

  SwitchEQ("yours");
  updateKnobValues();
}

function handleMouseUp(event) {;
  event.preventDefault();
  event.stopPropagation();
  eq["isDown"] = ![];
}

function handleQ(directionCode, partKeys) {;
  if (!eq['isDown'] || eq['bandsArray'][eq['pointerDrag']]['band_id'] == 'highpass' || eq['bandsArray'][eq["pointerDrag"]]["band_id"] == 'lowpass') {
    return;
  }
  if (directionCode == "up" && eq["bandsArray"][eq["pointerDrag"]]["q"] < 5.9) {
    eq["bandsArray"][eq['pointerDrag']]["q"] += partKeys;
  }
  if (directionCode == "down" && eq['bandsArray'][eq['pointerDrag']]["q"] > 0.2) {
    eq["bandsArray"][eq['pointerDrag']]["q"] -= partKeys;
  }
  SwitchEQ('yours');
  updateKnobValues();
}

// setup mouse click handler functions
function drawGrid() {

  canvas = document.createElement('canvas');

  eq['canvasWidth'] = canvasWidth;
  eq["canvasHeight"] = canvasHeight;

  canvas['width'] = eq['canvasWidth'];
  canvas['height'] = eq['canvasHeight'];

  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, eq['canvasWidth'], eq['canvasHeight']);
  canvas.addEventListener("wheel", handleMouseWheel);

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
    
      var value = event['originalEvent']['touches'][1]['clientX'] - event['originalEvent']['touches'][0]["clientX"];
      if (eq["touchTwoFingerStartValue"] == -1) {
      
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
  
    eq["touchTwoFingerStartValue"] = -1;
    handleMouseUp(event);
  });

  drawYGrid();
  drawXGrid();

  $("#eqCanvas").html(canvas);
  eq["offsetX"] = $(canvas).offset()['left'];
  eq["offsetY"] = $(canvas).offset()['top'];
}

function setupEqPlugin() {
  $('.eqCover').removeClass("active");
  eq["bandsArray"] = [];
  
  $("#confirm-settings").attr('active', 'yes');

  connectAudioNodes();

  initKnobs();

  // Add html for knobs in the lower pane
  buildKnobs(eq['bandsArray']);

  drawGrid();
  SwitchEQ('yours');
 
  // eq['bandsArray']["push"]({
  //   id : PK,
  //   band_id : peaking,
  //   state : "on",
  //   color : data['color'],
  //   border : data["border"],
  //   filter_name : name,
  //   filter_id : data["filter_id"],
  //   freq : data["freq"],
  //   gain : data['gain'],
  //   q : data["q"],
  //   chart : {},
  //   filter : {},
  //   hint : ![]
  // });
  eqSetup(eq['bandsArray'], 'transparent');
}

function waitForStatus() {
  triggerInterval = setInterval(function() {
    try {
      // Audio files are loaded
      if (typeof gameSourceNode !== "undefined") {
        clearInterval(triggerInterval);
        setupEqPlugin();
      }
    } catch (previousState) {
      console["error"](previousState);
    }
  }, 300);
}

function loadEqPlugin() {
  $(".eqCover").removeClass("active");
  $("#eqLoader").addClass("active");

  // Load AudioContext 
  loadAudioContext();

  setTimeout(function() {
    waitForStatus();
  }, 800);
}

// Add new band of given type
function SelectBand(bandName, source) {
  $(".selected", "#bandsAdd").children().attr("src",`../eq-plugin/img/icons/figma-icons/${currentlySelectedBand}.svg`);
  $(".selected", "#bandsAdd").removeClass("selected");

  $(source).addClass("selected")
  $(source).children().attr("src",`../eq-plugin/img/icons/figma-icons/${bandName}-active.svg`);

  currentlySelectedBand = bandName
}