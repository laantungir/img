//  ██    ██ ████████ ██ ██      ██ ████████ ██ ███████ ███████
//  ██    ██    ██    ██ ██      ██    ██    ██ ██      ██
//  ██    ██    ██    ██ ██      ██    ██    ██ █████   ███████
//  ██    ██    ██    ██ ██      ██    ██    ██ ██           ██
//   ██████     ██    ██ ███████ ██    ██    ██ ███████ ███████

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  CONSTANTS
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
export const objMimeTypes = {
    html: "text/html",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    json: "application/json",
    js: "text/javascript",
    css: "text/css",
    ico: "image/x-icon",
    mp3: "audio/mp3",
    mjs: "text/javascript",
};

export const arrImageExt = [".apng", ".avif", ".gif", ".jpg", ".jpeg", ".jfif", ".pjpeg", ".pjp", ".png", ".svg", ".webp"];

export const htmlCenteringWrapper = `<!DOCTYPE html>
  <html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>#title#</title>

    <style>
      .clsMain {
        display: flex;
        justify-content: center;
        align-items: center;
        }
    </style>
  </head>

  <body>
    <div class="clsMain">
      #body#
    </div>
  </body>
</html>`;

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  TIME ROUTINES
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
export function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = pad(a.getHours(), 2);
    var min = pad(a.getMinutes(), 2);
    var sec = pad(a.getSeconds(), 2);
    var time = date + " " + month + " " + year + " " + hour + ":" + min + "." + sec;
    return time;
}

export function strTechDate(d) {
    return (
        ("0" + d.getFullYear()).slice(-2) +
        `.` +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        `.` +
        ("0" + d.getDate()).slice(-2) +
        " " +
        ("0" + d.getHours()).slice(-2) +
        `:` +
        ("0" + d.getMinutes()).slice(-2)
        // ("0" + d.getSeconds()).slice(-2)
    );
}

export function wait(ms) {
    var start = Date.now();
    now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

export function PythonTimestamp() {
    var ts = (new Date() / 1000).toFixed(0);
    return Number(ts);
}

export function intTimestampSeconds() {
    var ts = (new Date() / 1000).toFixed(0);
    return Number(ts);
}

export function JSTimestamp() {
    var ts = new Date().toFixed(0);
    return Number(ts);
}

export function JSTimestampMidnight() {
    var d = new Date();
    var Day = d.getDate();
    var Month = d.getMonth() + 1;
    var Year = d.getFullYear();
    var ToDay = new Date(Year + "-" + Month + "-" + Day);
    // var ts = (ToDay / 1000).toFixed(0) // For seconds
    // console.log('Midnight',Year,Month,Day)
    return Number(ToDay);
}

export const DaysBetweenDates = (dteDate1, dteDate2) => {
    let d1 = new Date(dteDate1);
    let d2 = new Date(dteDate2);

    if (d1 instanceof Date && d2 instanceof Date) {
        return Math.floor((d2 - d1) / 86400000);
    } else {
        return `error`;
    }
};

export const HoursBetweenDates = (dteDate1, dteDate2) => {
    let d1 = new Date(dteDate1);
    let d2 = new Date(dteDate2);

    if (d1 instanceof Date && d2 instanceof Date) {
        return Math.floor((d2 - d1) / 3600000);
    } else {
        return `error`;
    }
};

export const strCountdown = (numSeconds) => {
    var d = Math.floor(numSeconds / (3600 * 24));
    var h = Math.floor((numSeconds % (3600 * 24)) / 3600);
    var m = Math.floor((numSeconds % 3600) / 60);
    var s = Math.floor(numSeconds % 60);

    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);

    return `${d}:${h}:${m}:${s}`;
};

Date.prototype.addDays = function (h) {
    this.setTime(this.getTime() + h * 24 * 60 * 60 * 1000);
    return this;
};

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
};

Date.prototype.addMinutes = function (h) {
    this.setTime(this.getTime() + h * 60 * 1000);
    return this;
};

Date.prototype.addSeconds = function (h) {
    this.setTime(this.getTime() + h * 1000);
    return this;
};

export const secHourAgo = () => {
    const Now = Math.floor(Date.now() / 1000);
    return Now - 60 * 60;
};

export const secDayAgo = () => {
    const Now = Math.floor(Date.now() / 1000);
    return Now - 60 * 60 * 24;
};

export const secWeekAgo = () => {
    const Now = Math.floor(Date.now() / 1000);
    return Now - Now - 60 * 60 * 24 * 7;
};

export const secMonthAgo = () => {
    const Now = Math.floor(Date.now() / 1000);
    return Now - 60 * 60 * 24 * 30;
};

export const secYearAgo = () => {
    const Now = Math.floor(Date.now() / 1000);
    return Now - 60 * 60 * 24 * 365;
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  MATH ROUTINES
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
export const hash53 = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    r1 = 4294967296 * (2097151 & h2) + (h1 >>> 0);
    return r1.toString(16);
};

// PAD A NUMBER WITH LEADING ZEROES
export const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  FILE ROUTINES
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export const arrAllFilesInSubdirectories = async (dir) => {
    // import { resolve } from 'path'
    // import { readdir } from 'fs/promises'

    const dirents = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirents.map((dirent) => {
            const res = resolve(dir, dirent.name);
            return dirent.isDirectory() ? arrAllFilesInSubdirectories(res) : res;
        })
    );
    return Array.prototype.concat(...files);
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  GEO LOCATION
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

export const objCountryCode = {
    AF: "Afghanistan",
    AX: "Aland Islands",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua And Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia And Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CD: "Congo, Democratic Republic",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: 'Cote D"Ivoire',
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands (Malvinas)",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island & Mcdonald Islands",
    VA: "Holy See (Vatican City State)",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran, Islamic Republic Of",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle Of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KR: "Korea",
    KP: "North Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: 'Lao People"s Democratic Republic',
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libyan Arab Jamahiriya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia, Federated States Of",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    AN: "Netherlands Antilles",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestinian Territory, Occupied",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RU: "Russian Federation",
    RW: "Rwanda",
    BL: "Saint Barthelemy",
    SH: "Saint Helena",
    KN: "Saint Kitts And Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin",
    PM: "Saint Pierre And Miquelon",
    VC: "Saint Vincent And Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome And Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia And Sandwich Isl.",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard And Jan Mayen",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad And Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks And Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UM: "United States Outlying Islands",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Virgin Islands, British",
    VI: "Virgin Islands, U.S.",
    WF: "Wallis And Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  HTML ROUTINES
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// USED TO PROCESS SOCIAL POSTS FROM TEXT TO HTML
export const htmlFormatText = (txt) => {
    var rgxURL = /\bhttp?s?:?\S*/gi;
    var rgxImg = /(.png|.jpg|.jpeg|.gif|.png|.svg|.webp)\b/i;

    let arrLinks = [];
    arrLinks = txt.match(rgxURL);

    if (arrLinks) {
        for (let EachLink of arrLinks) {
            if (rgxImg.test(EachLink)) {
                //it's an image
                txt = txt.replace(EachLink, `<img src="${EachLink}">`);
            } else {
                //its a hyperlink
                txt = txt.replace(EachLink, `<a href="${EachLink}" target="_blank">${EachLink}</a>`);
            }
        }
    }
    return txt;
};

export const arrImageLinks = async (htmlSearch) => {
    // Return a list of image links from an HTML string

    let setImg = new Set([]);
    let linkStart = 0;
    let linkEnd = 0;
    let strStartTag = "src=";
    let strEndTag = '"';

    if (htmlSearch) {
        let strHTML = htmlSearch.replace(/'/g, '"'); //replace all single q's w doubles
        linkStart = strHTML.indexOf(strStartTag);

        while (linkStart > 0) {
            strHTML = strHTML.slice(linkStart + strStartTag.length + 1);
            linkEnd = strHTML.indexOf(strEndTag);
            setImg.add(strHTML.slice(0, linkEnd));
            linkStart = strHTML.indexOf(strStartTag);
        } onclick="ToggleFullScreen()"
    }
    return Array.from(setImg); //remove duplicates
};

export const RemoveTagContent = (strHTML, strStartTag, strEndTag) => {
    while (strHTML.indexOf(strStartTag) > 0 && strHTML.indexOf(strEndTag) > strHTML.indexOf(strStartTag)) {
        strHTML = strHTML.slice(0, strHTML.indexOf(strStartTag)) + strHTML.slice(strHTML.indexOf(strEndTag) + strEndTag.length);
    }
    return strHTML;
};

// GET THE QUERY STRING FROM THE URL OF A WEB PAGE AND RETURN IT IN AN OBJECT
export const objQueryStr = async () => {
    let output = {};
    if (window.location.search) {
        var queryParams = window.location.search.substring(1);
        var listQueries = queryParams.split("&");
        for (var query in listQueries) {
            if (listQueries.hasOwnProperty(query)) {
                var queryPair = listQueries[query].split("=");
                output[queryPair[0]] = decodeURIComponent(queryPair[1] || "");
            }
        }
    }
    return output;
};

export const CopyValToClipboard = async (val) => {
    navigator.clipboard.writeText(val);
};

//SELECT ALL CONTENT WHEN EDITABLE DIV GETS FOCUS
export const SelAllContent = async (id) => {
    var div = document.getElementById(id);
    window.setTimeout(function () {
        var sel, range;
        if (window.getSelection && document.createRange) {
            range = document.createRange();
            range.selectNodeContents(div);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(div);
            range.select();
        }
    }, 10);
};

export const ToggleFullScreen = async () => {
    let IsFullScreen = false;

    console.log(
        window.outerHeight,
        window.innerHeight,
        window.screen.height,
        window.innerWidth,
        screen.width,
        window.innerHeight / screen.height,
        window.innerWidth / screen.width
    );

    if (window.innerHeight / screen.height > 0.9 && window.innerWidth / screen.width > 0.9) {
        IsFullScreen = true;
    }

    if ((window.outerHeight == window.innerHeight) == screen.height) {
        IsFullScreen = true;
    }
    console.log("Is full")
    console.log(IsFullScreen)

    if (IsFullScreen) {
        document.exitFullscreen();
        document.getElementById("divFullScreen").innerHTML = `<div  id="divFullScreen"  class="divHeaderButtons">
        <svg  class="svgHeaderButtons" viewBox="0 0 10 10">
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="5" y2="8" />
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="3" y2="4" />
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="7" y2="4" />
        </svg>
      </div>`;
    } else {
        let elem = document.documentElement;
        elem.requestFullscreen();
        document.getElementById("divFullScreen").innerHTML = `<div  id="divFullScreen"  class="divHeaderButtons">
        <svg  class="svgHeaderButtons" viewBox="0 0 10 10">
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="5" y2="8" />
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="7" y1="6" x2="5" y2="8" />
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="3" y1="6" x2="5" y2="8" />
        </svg>
      </div>`;
    }
};

export const ToggleSpellCheck = async () => {
    console.log("Spell check");
    let SpellCheck = !divBody.spellcheck;
    divBody.spellcheck = SpellCheck;

    SpellCheck = !taNote.spellcheck;
    taNote.spellcheck = SpellCheck;

    if (SpellCheck) {
        document.getElementById("svgCheckPath").setAttribute("stroke", "black");
    } else {
        document.getElementById("svgCheckPath").setAttribute("stroke", "lightgray");
    }
};

export const ConvertStringToType = async (str) => {
    if (typeof str == "undefined") {
        str = "";
    } else if (!isNaN(str)) {
        str = parseFloat(str);
    } else if (str == "true") {
        str = true;
    } else if (str == "false") {
        str = false;
    }

    //CHECK FOR ARRAYS
    else if (str.slice(0, 1) == "[" && str.slice(-1) == "]") {
        str = JSON.parse(str);
    }

    //CHECK FOR OBJECTS
    else if (str.slice(0, 1) == "{" && str.slice(-1) == "}") {
        str = JSON.parse(str);
    }

    //REMOVE LEADING AND TRAILING QUOTES IF IT HAS THEM
    else if (str.slice(0, 1) == '"' && str.slice(-1) == '"') {
        str = str.slice(1, -1);
    }

    return str;
};

// MEASURE THE WIDTH OF SOME TEXT
// font = "30px Arial"
export const displayTextWidth = async (text, font) => {
    let canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  DOM ELEMENT CREATION
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// CREATE AN SELECT ELEMENT CONTAINING THE FIELDS FROM THE GIVEN DATABASE
export const selDBFields = async (db = objDB, optFirst = "", IncludeSysFields = false) => {
    //GET A SET OF ALL THE FIELD NAMES, CHECKING EVERY ROW.
    let setFields = new Set([]);

    for (let Each of objDB.rows) {
        for (let KeyName of Object.keys(Each))
            try {
                setFields.add(KeyName);
            } catch {}
    }

    let arrFld = Array.from(setFields);
    arrFld.sort();

    //REMOVE SYS FIELDS IF REQUESTED
    if (!IncludeSysFields) {
        var i = arrFld.length;
        while (i--) {
            if (arrFld[i].slice(0, 1) == `_`) {
                arrFld.splice(i, 1);
            }
        }
    }

    //CREATE THE SELECT ELEMENT
    let SelOut = document.createElement(`select`);

    //IF THERE IS TO BE A SPECIAL FIRST 'TITLE' OPTION, WITH NO VALUE
    if (optFirst != "") {
        let opt = document.createElement(`option`);
        opt.innerHTML = optFirst;
        opt.value = "";
        SelOut.appendChild(opt);
    }

    //ADD ALL THE FIELDS TO THE SELECT ELEMENT
    for (Each of arrFld) {
        let opt = document.createElement(`option`);
        opt.value = Each;
        opt.innerHTML = Each;
        SelOut.appendChild(opt);
    }

    return SelOut;
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  OBJECT AND ARRAY ROUTINES
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// FOR AN ARRAY OF OBJECTS, GET THE VALUE OF THE OBJECT THAT HAS A
// PARTICULAR KEY
// Example
// arrObj =[{"id":"svg01"},{"cx":5},{"cy":5},{"r":4},{"stroke":"black"}]
// Key = "id"
// The function will return "svg01"

export const ValInArr = async (arrObj, Key) => {
    console.log(arrObj);
    for (let Ob of arrObj) {
        if (Object.keys(Ob)[0] == Key) {
            return Ob[Object.keys(Ob)[0]];
        }
    }

    return "";
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  SORTING
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export const arrOfObjSort = async (arr, key, asc = true) => {
    //CHECK IF THIS KEY IS NUMERIC OR A STRING. ALSO LOOK FOR UNDEFINED
    let Numeric = true;
    for (let Each of arr) {
        if (typeof Each[key] != "undefined") {
            if (isNaN(Each[key])) {
                Numeric = false;
                break;
            }
        }
    }

    if (Numeric && asc) {
        arr.sort((a, b) => {
            if (typeof a[key] == "undefined") {
                return -1;
            }
            if (typeof b[key] == "undefined") {
                return 1;
            }
            return a[key] - b[key];
        });
    } else if (Numeric && !asc) {
        arr.sort((a, b) => {
            if (typeof a[key] == "undefined") {
                return 1;
            }
            if (typeof b[key] == "undefined") {
                return -1;
            }
            return b[key] - a[key];
        });
    } else if (asc) {
        arr.sort((a, b) => {
            if (typeof a[key] == "undefined") {
                return 1;
            }
            if (typeof b[key] == "undefined") {
                return -1;
            }

            let fa = a[key].toLowerCase(),
                fb = b[key].toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
    } else {
        arr.sort((a, b) => {
            if (typeof a[key] == "undefined") {
                return -1;
            }
            if (typeof b[key] == "undefined") {
                return 1;
            }

            let fa = a[key].toLowerCase(),
                fb = b[key].toLowerCase();

            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;
        });
    }

    return arr;
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  UTILITIES
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
export function basex(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256); // log(BASE) / log(256), rounded up
    var iFACTOR = Math.log(256) / Math.log(BASE); // log(256) / log(BASE), rounded up
    function encode(source) {
        if (source instanceof Uint8Array) {
        } else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
            return "";
        }
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = ((pend - pbegin) * iFACTOR + 1) >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while (pbegin !== pend) {
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i = 0;
            for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
                carry += (256 * b58[it1]) >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = (carry / BASE) >>> 0;
            }
            if (carry !== 0) {
                throw new Error("Non-zero carry");
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while (it2 !== size && b58[it2] === 0) {
            it2++;
        }
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") {
            throw new TypeError("Expected String");
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = ((source.length - psz) * FACTOR + 1) >>> 0; // log(58) / log(256), rounded up.
        var b256 = new Uint8Array(size);
        // Process the characters.
        while (source[psz]) {
            // Decode character
            var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
            if (carry === 255) {
                return;
            }
            var i = 0;
            for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
                carry += (BASE * b256[it3]) >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = (carry / 256) >>> 0;
            }
            if (carry !== 0) {
                throw new Error("Non-zero carry");
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while (it4 !== size && b256[it4] === 0) {
            it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j = zeroes;
        while (it4 !== size) {
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode,
    };
}

const BASE02 = `01`;
const BASE06 = `123456`;
const BASE08 = `01234567`;
const BASE10 = `0123456789`;
const BASE16 = `0123456789abcdef`;
const BASE58 = `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`;
// No 0, I, O, l
const BASE64 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;

export const bs02 = basex(BASE02);
export const bs06 = basex(BASE06);
export const bs08 = basex(BASE08);
export const bs10 = basex(BASE10);
export const bs16 = basex(BASE16);
export const bs58 = basex(BASE58);
export const bs64 = basex(BASE64);

// Examples
// decoded = bs58.decode('5Kd3')

// input must be a Uint8Array, Buffer, or an Array. It returns a string.
// encoded = bs16.encode(decoded))

export const BaseEncodeDecode = async (Val, Base, Enc = true) => {
    //ENCODE
    if (Enc) {
        switch (Base) {
            case `bs02`:
                return bs02.encode(Val);

            case `bs06`:
                return bs06.encode(Val);

            case `bs08`:
                return bs08.encode(Val);

            case `bs10`:
                return bs10.encode(Val);

            case `bs16`:
                return bs16.encode(Val);

            case `bs58`:
                return bs58.encode(Val);

            case `bs64`:
                return bs64.encode(Val);

            case `utf8`:
                let Dec = new TextDecoder("utf-8");
                return Dec.decode(Val);
        }
    }
    //DECODE
    else {
        switch (Base) {
            case `bs02`:
                return bs02.decode(Val);

            case `bs06`:
                return bs06.decode(Val);

            case `bs08`:
                return bs08.decode(Val);

            case `bs10`:
                return bs10.decode(Val);

            case `bs16`:
                return bs16.decode(Val);

            case `bs58`:
                return bs58.decode(Val);

            case `bs64`:
                return bs64.decode(Val);

            case `utf8`:
                let Enc = new TextEncoder();
                return Enc.encode(Val);
        }
    }
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  PAD JSON DB ROUTINES SERVER
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export const objReadJSONFile = async (docPath) => {
    const data = await fs.promises.readFile(docPath, "utf8");
    return JSON.parse(data);
};

export const objWriteJSONFile = async (docPath, objData) => {
    await fs.promises.writeFile(docPath, JSON.stringify(objData, null, 2));
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  SVG
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

{
    /* <svg id="SVG-51" viewBox="0 0 10 10" _index="0" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" >
<line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="5" y2="8" />
<line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="2" y1="5" x2="8" y2="5" />
</svg>  */
}

export const svgIcon = async (Type) => {
    // DownArrow, UpArrow, DownCarrot, RightCarrot, X, Play, Pause, Plus,
    // Hamburger, HamburgerV, Circle

    let xmlns = "http://www.w3.org/2000/svg";

    const svgEle = document.createElementNS(xmlns, "svg");

    svgEle.setAttributeNS(null, "viewBox", "0 0 10 10");
    svgEle.setAttributeNS(null, "stroke-width", 2);
    svgEle.setAttributeNS(null, "stroke-linecap", `round`);
    svgEle.setAttributeNS(null, "stroke-linejoin", `round`);
    svgEle.setAttributeNS(null, "fill-opacity", 0);

    if (Type == `Plus`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 5);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 5);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);

        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 2);
        svgLine2.setAttributeNS(null, "y1", 5);
        svgLine2.setAttributeNS(null, "x2", 8);
        svgLine2.setAttributeNS(null, "y2", 5);
        svgEle.appendChild(svgLine2);

        return svgEle;
    }

    if (Type == `X`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 2);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 8);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);

        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 8);
        svgLine2.setAttributeNS(null, "y1", 2);
        svgLine2.setAttributeNS(null, "x2", 2);
        svgLine2.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine2);

        return svgEle;
    }

    if (Type == `Minus`) {
        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 2);
        svgLine2.setAttributeNS(null, "y1", 5);
        svgLine2.setAttributeNS(null, "x2", 8);
        svgLine2.setAttributeNS(null, "y2", 5);
        svgEle.appendChild(svgLine2);

        return svgEle;
    }

    if (Type == `Play`) {
        const svgPolygon = document.createElementNS(xmlns, "polygon");
        svgPolygon.setAttributeNS(null, "points", (points = "2,8 8,5 2,2 "));
        svgEle.appendChild(svgPolygon);

        return svgEle;
    }

    if (Type == `1`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 5);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 5);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);
        return svgEle;
    }

    if (Type == `2`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 3);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 3);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);

        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 7);
        svgLine2.setAttributeNS(null, "y1", 2);
        svgLine2.setAttributeNS(null, "x2", 7);
        svgLine2.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine2);
        return svgEle;
    }

    if (Type == `3`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 2);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 2);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);

        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 5);
        svgLine2.setAttributeNS(null, "y1", 2);
        svgLine2.setAttributeNS(null, "x2", 5);
        svgLine2.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine2);

        const svgLine3 = document.createElementNS(xmlns, "line");
        svgLine3.setAttributeNS(null, "x1", 8);
        svgLine3.setAttributeNS(null, "y1", 2);
        svgLine3.setAttributeNS(null, "x2", 8);
        svgLine3.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine3);
        return svgEle;
    }

    if (Type == `carrot_down`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", "M2,2 L5,7 L8,2");
        svgEle.appendChild(svgPath);
        return svgEle;
    }

    if (Type == `carrot_right`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", "M2,2 L8,5 L2,8");
        svgEle.appendChild(svgPath);
        return svgEle;
    }

    if (Type == `carrot_up`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", "M2,8 L5,2 L8,8");
        svgEle.appendChild(svgPath);
        return svgEle;
    }

    if (Type == `carrot_left`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", "M8,2 L2,5 L8,8");
        svgEle.appendChild(svgPath);
        return svgEle;
    }

    if (Type == `pencil`) {
        const svgPolygon = document.createElementNS(xmlns, "polygon");
        svgPolygon.setAttributeNS(null, "points", "2,8 2,6 6,2 8,4 4,8");
        // svgPolygon.setAttributeNS(null, 'points', points="2,8 2,6 6,2 8,4 4,8")
        svgEle.appendChild(svgPolygon);
        return svgEle;
    }

    if (Type == `check`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", (points = "M2,6 L4,8 L8,2"));
        svgEle.appendChild(svgPath);
        return svgEle;
    }

    if (Type == `arrow_up_right`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", (points = "M2,8 L8,2 L5,2 L8,2 L8,5"));
        svgEle.appendChild(svgPath);
        return svgEle;
    }

    if (Type == `box`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", (points = "M2,2 L8,2 L8,8 L2,8 L2,2 L2,2 L8,2 L8,8 L2,8 L2,2"));
        svgEle.appendChild(svgPath);
        return svgEle;
    }
};

export const htmlFromObjSVG = async (objSVG) => {
    let htmlOut = `<svg `;

    // console.log(objSVG.attributes)
    for (let key in objSVG.attributes) {
        htmlOut += `${key}="${objSVG.attributes[key]}" `;
    }
    htmlOut += xmlSVGTagHeader;
    htmlOut += `> \n`;

    for (let Ele of objSVG.elements) {
        htmlOut += `<${Ele._element_type} `;

        // console.log("Ele", Ele)
        for (let key in Ele) {
            if (key.slice(0, 1) != "_") {
                htmlOut += `${key}="${Ele[key]}" `;
            }
        }
        htmlOut += `/> \n`;
    }
    htmlOut += `</svg> `;
    return htmlOut;
};

//////////////////////////////////////////////////////////////////////////////
//  HASHTAGS
//////////////////////////////////////////////////////////////////////////////

//  RETURN ALL THE USED HASHTAGS
export const objHashtags = async (db = DB) => {
    let arrOut = [];
    let objOut = {};
    for (let Row of db.rows) {
        arrOut = arrOut.concat(Row.hashtags);
    }
    arrOut = [...new Set(arrOut)];
    arrOut.sort();

    for (let H of arrOut) {
        objOut[H] = { Enabled: false };
    }

    return objOut;
};

export const ToggleHashtags = async (hashtag, row, db = DB) => {
    if (hashtag.slice(0, 1) != `#`) {
        hashtag = `#${hashtag}`;
    }

    //REMOVE HASHTAG
    if (db.rows[row].hashtags.includes(hashtag)) {
        var i = db.rows[row].hashtags.length;
        while (i--) {
            if (db.rows[row].hashtags[i] == hashtag) {
                db.rows[row].hashtags.splice(i, 1);
            }
        }
    }
    //ADD HASHTAG
    else {
        db.rows[row].hashtags.push(hashtag);
    }
};

//////////////////////////////////////////////////////////////////////////////
//  NOSTR
//////////////////////////////////////////////////////////////////////////////

export const objNostrEvents = [
    { 0: { name: "Metadata" } },
    { 1: { name: "Short Text Note" } },
    { 2: { name: "Recommend Relay" } },
    { 3: { name: "Contacts" } },
    { 4: { name: "Encrypted Direct Messages" } },
    { 5: { name: "Event Deletion" } },
    { 6: { name: "Repost" } },
    { 7: { name: "Reaction" } },
    { 8: { name: "Badge Award" } },
    { 16: { name: "Generic Repost" } },
    { 40: { name: "Channel Creation" } },
    { 41: { name: "Channel Metadata" } },
    { 42: { name: "Channel Message" } },
    { 43: { name: "Channel Hide Message" } },
    { 44: { name: "Channel Mute User" } },
    { 1063: { name: "File Metadata" } },
    { 1311: { name: "Live Chat Message" } },
    { 1984: { name: "Reporting" } },
    { 1985: { name: "Label" } },
    { 4550: { name: "Community Post Approval" } },
    { 9734: { name: "Zap Request" } },
    { 9735: { name: "Zap" } },
    { 10000: { name: "Mute List" } },
    { 10001: { name: "Pin List" } },
    { 10002: { name: "Relay List Metadata" } },
    { 13194: { name: "Wallet Info" } },
    { 22242: { name: "Client Authentication" } },
    { 23194: { name: "Wallet Request" } },
    { 23195: { name: "Wallet Response" } },
    { 24133: { name: "Nostr Connect" } },
    { 27235: { name: "HTTP Auth" } },
    { 30000: { name: "Categorized People List" } },
    { 30001: { name: "Categorized Bookmark List" } },
    { 30008: { name: "Profile Badges" } },
    { 30009: { name: "Badge Definition" } },
    { 30017: { name: "Create or update a stall" } },
    { 30018: { name: "Create or update a product" } },
    { 30023: { name: "Long-form Content" } },
    { 30024: { name: "Draft Long-form Content" } },
    { 30078: { name: "Application-specific Data" } },
    { 30311: { name: "Live Event" } },
    { 30402: { name: "Classified Listing" } },
    { 30403: { name: "Draft Classified Listing" } },
    { 31922: { name: "Date-Based Calendar Event" } },
    { 31923: { name: "Time-Based Calendar Event" } },
    { 31924: { name: "Calendar" } },
    { 31925: { name: "Calendar Event RSVP" } },
    { 31989: { name: "Handler recommendation" } },
    { 31990: { name: "Handler information" } },
    { 34550: { name: "Community Definition" } },
];

export const arrNostrEvents = [
    [0, "Metadata"],
    [1, "Short Text Note"],
    [2, "Recommend Relay"],
    [3, "Contacts"],
    [4, "Encrypted Direct Messages"],
    [5, "Event Deletion"],
    [6, "Repost"],
    [7, "Reaction"],
    [8, "Badge Award"],
    [16, "Generic Repost"],
    [40, "Channel Creation"],
    [41, "Channel Metadata"],
    [42, "Channel Message"],
    [43, "Channel Hide Message"],
    [44, "Channel Mute User"],
    [1063, "File Metadata"],
    [1311, "Live Chat Message"],
    [1984, "Reporting"],
    [1985, "Label"],
    [4550, "Community Post Approval"],
    [9734, "Zap Request"],
    [9735, "Zap"],
    [10000, "Mute List"],
    [10001, "Pin List"],
    [10002, "Relay List Metadata"],
    [13194, "Wallet Info"],
    [22242, "Client Authentication"],
    [23194, "Wallet Request"],
    [23195, "Wallet Response"],
    [24133, "Nostr Connect"],
    [27235, "HTTP Auth"],
    [30000, "Categorized People List"],
    [30001, "Categorized Bookmark List"],
    [30008, "Profile Badges"],
    [30009, "Badge Definition"],
    [30017, "Create or update a stall"],
    [30018, "Create or update a product"],
    [30023, "Long-form Content"],
    [30024, "Draft Long-form Content"],
    [30078, "Application-specific Data"],
    [30311, "Live Event"],
    [30402, "Classified Listing"],
    [30403, "Draft Classified Listing"],
    [31922, "Date-Based Calendar Event"],
    [31923, "Time-Based Calendar Event"],
    [31924, "Calendar"],
    [31925, "Calendar Event RSVP"],
    [31989, "Handler recommendation"],
    [31990, "Handler information"],
    [34550, "Community Definition"],
];

export const arrNostrStandardizedTags = [
    ["e", "event id (hex)", ["relay URL", " marker"]],
    ["p", "pubkey (hex)", ["relay URL", " petname"]],
    ["a", "coordinates to an event", ["relay URL"]],
    ["d", "identifier", []],
    ["alt", "Alt tag", []],
    ["g", "geohash", []],
    ["i", "identity", ["proof"]],
    ["k", "kind number (string)", []],
    ["l", "label, label namespace", ["annotations"]],
    ["L", "label namespace", []],
    ["r", "a reference (URL, etc)", ["petname"]],
    ["r", "relay url", ["marker"]],
    ["t", "hashtag", []],
    ["amount", "millisatoshis, stringified", []],
    ["bolt11", "bolt11 invoice", []],
    ["challenge", "challenge string", []],
    ["content-warning", "reason", []],
    ["delegation", "pubkey, conditions, delegation token", []],
    ["description", "badge description", []],
    ["description", "invoice description", []],
    ["emoji", "shortcode, image URL", []],
    ["expiration", "unix timestamp (string)", []],
    ["image", "image URL", ["dimensions in pixels"]],
    ["lnurl", "bech32 encoded lnurl", []],
    ["location", "location string", []],
    ["name", "badge name", []],
    ["nonce", "random", []],
    ["preimage", "hash of bolt11 invoice", []],
    ["price", "price", ["currency", " frequency"]],
    ["proxy", "external ID", ["protocol"]],
    ["published_at", "unix timestamp (string)", []],
    ["relay", "relay url", []],
    ["relays", "relay list", []],
    ["subject", "subject", []],
    ["summary", "article summary", []],
    ["thumb", "badge thumbnail", ["dimensions in pixels"]],
    ["title", "article title", []],
    ["zap", "pubkey (hex), relay URL", ["weight"]],
];

export const objNip11 = async (Relay) => {
    let Addr = `https:${Relay.slice(4)}`;

    try {
        const myInit = {
            method: "GET",
            headers: { Accept: "application/nostr+json" },
            mode: "cors",
            // cache: "default",
            signal: AbortSignal.timeout(5000),
        };

        let response = await fetch(Addr, myInit);
        let objOut = await response.json();
        objOut.timestamp = intTimestampSeconds();
        return await objOut;
    } catch {
        let objOut = {};
        objOut.timestamp = intTimestampSeconds();
        return objOut;
    }
};

export const objRelaysFromNostrWatch = async () => {
    let Addr = `https://api.nostr.watch/v1/online`;

    try {
        const myInit = {
            method: "GET",
            headers: { Accept: "application/nostr+json" },
            mode: "cors",
            // cache: "default",
            signal: AbortSignal.timeout(5000),
        };

        let response = await fetch(Addr, myInit);
        let objOut = await response.json();
        objOut.timestamp = intTimestampSeconds();
        return objOut;
    } catch {}
};

// FIND THE HIGHEST INTEGER IN THE _id FIELD
export const numMax_id = async (db = DB) => {
    let MaxNum = 0;
    for (let Row of db) {
        if (!isNaN(Row.id)) {
            if (Row.id > MaxNum) {
                MaxNum = Row.id;
            }
        }
    }
    return Number(MaxNum);
};

//////////////////////////////////////////////////////////////////////////////
//  COMPRESSION
//////////////////////////////////////////////////////////////////////////////

export const lzw_encode = async (s) => {
  var dict = {};
  var data = (s + '').split('');
  var out = [];
  var currChar;
  var phrase = data[0];
  var code = 256;
  
  for (var i = 1; i < data.length; i++) {
    currChar = data[i];
    if (dict[phrase + currChar] != null) {
      phrase += currChar;
    } else {
      out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
      dict[phrase + currChar] = code;
      code++;
      phrase = currChar;
    }
  }
  out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
  for (var i = 0; i < out.length; i++) {
    out[i] = String.fromCharCode(out[i]);
  }
  return out.join('');
}


export const lzw_decode = async (s) => {
  var dict = {};
  var data = (s + '').split('');
  var currChar = data[0];
  var oldPhrase = currChar;
  var out = [currChar];
  var code = 256;
  var phrase;
  for (var i = 1; i < data.length; i++) {
    var currCode = data[i].charCodeAt(0);
    if (currCode < 256) {
      phrase = data[i];
    } else {
      phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
    }
    out.push(phrase);
    currChar = phrase.charAt(0);
    dict[code] = oldPhrase + currChar;
    code++;
    oldPhrase = phrase;
  }
  return out.join('');
}


export const gzip_to_b64 = async (str) => {
    // Use a browsers inbuilt CompressionStream to gzip
    console.log("Uncompressed length", str.length)
    const stream = new Blob([str], {
        type: "application/json",
    }).stream();

    const compressedReadableStream = stream.pipeThrough(new CompressionStream("gzip"));
    const compressedResponse = await new Response(compressedReadableStream);

    const blob = await compressedResponse.blob();
    const buffer = await blob.arrayBuffer();
    console.log("Compressed length", buffer.byteLength)
    // convert ArrayBuffer to base64 encoded string
    // const compressedBase64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
    const compressedBase64 = btoa(
        new Uint8Array(buffer).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, "")
    );
    console.log("Compressed length B64", compressedBase64.length)
    return compressedBase64;
};

export const ungzip_from_b64 = async (b64) => {
    // Ungzip from this routine: gzip_to_b64()

    function b64decode(str) {
        const binary_string = window.atob(str);
        const len = binary_string.length;
        const bytes = new Uint8Array(new ArrayBuffer(len));
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    }

    // base64 encoding to Blob
    const stream = new Blob([b64decode(b64)], {
        type: "application/json",
    }).stream();

    const compressedReadableStream = stream.pipeThrough(new DecompressionStream("gzip"));
    const resp = await new Response(compressedReadableStream);
    const blob = await resp.blob();
    const data = await blob.text();
    return data;
};


