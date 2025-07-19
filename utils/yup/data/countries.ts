import { CountryCode } from '@/core/shared/service/enum/country-code';

const COUNTRIES = {
  AF: {
    name: 'Afghanistan',
    dialCode: '93',
  },
  AX: {
    name: 'Aland Islands',
    dialCode: '358',
  },
  AL: {
    name: 'Albania',
    dialCode: '355',
  },
  DZ: {
    name: 'Algeria',
    dialCode: '213',
  },
  AS: {
    name: 'American Samoa',
    dialCode: '1-684',
  },
  AD: {
    name: 'Andorra',
    dialCode: '376',
  },
  AO: {
    name: 'Angola',
    dialCode: '244',
  },
  AI: {
    name: 'Anguilla',
    dialCode: '1-264',
  },
  AQ: {
    name: 'Antarctica',
    dialCode: '672',
  },
  AG: {
    name: 'Antigua and Barbuda',
    dialCode: '1-268',
  },
  AR: {
    name: 'Argentina',
    dialCode: '54',
  },
  AM: {
    name: 'Armenia',
    dialCode: '374',
  },
  AW: {
    name: 'Aruba',
    dialCode: '297',
  },
  AU: {
    name: 'Australia',
    dialCode: '61',
  },
  AT: {
    name: 'Austria',
    dialCode: '43',
  },
  AZ: {
    name: 'Azerbaijan',
    dialCode: '994',
  },
  BS: {
    name: 'Bahamas',
    dialCode: '1-242',
  },
  BH: {
    name: 'Bahrain',
    dialCode: '973',
  },
  BD: {
    name: 'Bangladesh',
    dialCode: '880',
  },
  BB: {
    name: 'Barbados',
    dialCode: '1-246',
  },
  BY: {
    name: 'Belarus',
    dialCode: '375',
  },
  BE: {
    name: 'Belgium',
    dialCode: '32',
  },
  BZ: {
    name: 'Belize',
    dialCode: '501',
  },
  BJ: {
    name: 'Benin',
    dialCode: '229',
  },
  BM: {
    name: 'Bermuda',
    dialCode: '1-441',
  },
  BT: {
    name: 'Bhutan',
    dialCode: '975',
  },
  BO: {
    name: 'Bolivia',
    dialCode: '591',
  },
  BA: {
    name: 'Bosnia and Herzegovina',
    dialCode: '387',
  },
  BW: {
    name: 'Botswana',
    dialCode: '267',
  },
  BV: {
    name: 'Bouvet Island',
    dialCode: '47',
  },
  BR: {
    name: 'Brazil',
    dialCode: '55',
  },
  IO: {
    name: 'British Indian Ocean Territory',
    dialCode: '246',
  },
  BN: {
    name: 'Negara Brunei Darussalam',
    dialCode: '673',
  },
  BG: {
    name: 'Bulgaria',
    dialCode: '359',
  },
  BF: {
    name: 'Burkina Faso',
    dialCode: '226',
  },
  BI: {
    name: 'Burundi',
    dialCode: '257',
  },
  KH: {
    name: 'Cambodia',
    dialCode: '855',
  },
  CM: {
    name: 'Cameroon',
    dialCode: '237',
  },
  CA: {
    name: 'Canada',
    dialCode: '1',
  },
  CV: {
    name: 'Cape Verde',
    dialCode: '238',
  },
  BQ: {
    name: 'Caribbean Netherlands',
    dialCode: '599',
  },
  KY: {
    name: 'Cayman Islands',
    dialCode: '1-345',
  },
  CF: {
    name: 'Central African Republic',
    dialCode: '236',
  },
  TD: {
    name: 'Chad',
    dialCode: '235',
  },
  CN: {
    name: 'China',
    dialCode: '86',
  },
  CL: {
    name: 'Chile',
    dialCode: '56',
  },
  CX: {
    name: 'Christmas Island',
    dialCode: '61',
  },
  CC: {
    name: 'Cocos (Keeling) Islands',
    dialCode: '61',
  },
  CO: {
    name: 'Colombia',
    dialCode: '57',
  },
  KM: {
    name: 'Comoros',
    dialCode: '269',
  },
  CD: {
    name: 'Democratic Republic of the Congo',
    dialCode: '243',
  },
  CG: {
    name: 'Republic of the Congo',
    dialCode: '242',
  },
  CK: {
    name: 'Cook Islands',
    dialCode: '682',
  },
  CR: {
    name: 'Costa Rica',
    dialCode: '506',
  },
  CI: {
    name: "Cote D'Ivoire",
    dialCode: '225',
  },
  HR: {
    name: 'Croatia (Hrvatska)',
    dialCode: '385',
  },
  CU: {
    name: 'Cuba',
    dialCode: '53',
  },
  CW: {
    name: 'Curacao',
    dialCode: '599',
  },
  CY: {
    name: 'Cyprus',
    dialCode: '357',
  },
  CZ: {
    name: 'Czech Republic',
    dialCode: '420',
  },
  DK: {
    name: 'Denmark',
    dialCode: '45',
  },
  DJ: {
    name: 'Djibouti',
    dialCode: '253',
  },
  DM: {
    name: 'Dominica',
    dialCode: '1-767',
  },
  DO: {
    name: 'Dominican Republic',
    dialCode: '1-809',
  },
  EC: {
    name: 'Ecuador',
    dialCode: '593',
  },
  EG: {
    name: 'Egypt',
    dialCode: '20',
  },
  SV: {
    name: 'El Salvador',
    dialCode: '503',
  },
  GQ: {
    name: 'Equatorial Guinea',
    dialCode: '240',
  },
  ER: {
    name: 'Eritrea',
    dialCode: '291',
  },
  EE: {
    name: 'Estonia',
    dialCode: '372',
  },
  SZ: {
    name: 'Swaziland',
    dialCode: '268',
  },
  ET: {
    name: 'Ethiopia',
    dialCode: '251',
  },
  FK: {
    name: 'Falkland Islands (Malvinas)',
    dialCode: '500',
  },
  FO: {
    name: 'Faroe Islands',
    dialCode: '298',
  },
  FJ: {
    name: 'Fiji',
    dialCode: '679',
  },
  FI: {
    name: 'Finland',
    dialCode: '358',
  },
  FR: {
    name: 'France',
    dialCode: '33',
  },
  GF: {
    name: 'French Guiana',
    dialCode: '594',
  },
  PF: {
    name: 'French Polynesia',
    dialCode: '689',
  },
  TF: {
    name: 'French Southern Territories',
    dialCode: '262',
  },
  GA: {
    name: 'Gabon',
    dialCode: '241',
  },
  GM: {
    name: 'Gambia',
    dialCode: '220',
  },
  GE: {
    name: 'Georgia',
    dialCode: '995',
  },
  DE: {
    name: 'Germany',
    dialCode: '49',
  },
  GH: {
    name: 'Ghana',
    dialCode: '233',
  },
  GI: {
    name: 'Gibraltar',
    dialCode: '350',
  },
  GR: {
    name: 'Greece',
    dialCode: '30',
  },
  GL: {
    name: 'Greenland',
    dialCode: '299',
  },
  GD: {
    name: 'Grenada',
    dialCode: '1-473',
  },
  GP: {
    name: 'Guadeloupe',
    dialCode: '590',
  },
  GU: {
    name: 'Guam',
    dialCode: '1-671',
  },
  GT: {
    name: 'Guatemala',
    dialCode: '502',
  },
  GG: {
    name: 'Guernsey',
    dialCode: '44',
  },
  GN: {
    name: 'Guinea',
    dialCode: '224',
  },
  GW: {
    name: 'Guinea-Bissau',
    dialCode: '245',
  },
  GY: {
    name: 'Guyana',
    dialCode: '592',
  },
  HT: {
    name: 'Haiti',
    dialCode: '509',
  },
  HM: {
    name: 'Heard Island and McDonald Islands',
    dialCode: '672',
  },
  VA: {
    name: 'Vatican City State (Holy See)',
    dialCode: '379',
  },
  HN: {
    name: 'Honduras',
    dialCode: '504',
  },
  HK: {
    name: 'Hong Kong',
    dialCode: '852',
  },
  HU: {
    name: 'Hungary',
    dialCode: '36',
  },
  IS: {
    name: 'Iceland',
    dialCode: '354',
  },
  IN: {
    name: 'India',
    dialCode: '91',
  },
  ID: {
    name: 'Indonesia',
    dialCode: '62',
  },
  IR: {
    name: 'Iran (Islamic Republic of)',
    dialCode: '98',
  },
  IQ: {
    name: 'Iraq',
    dialCode: '964',
  },
  IE: {
    name: 'Ireland',
    dialCode: '353',
  },
  IM: {
    name: 'Isle of Man',
    dialCode: '44',
  },
  IL: {
    name: 'Israel',
    dialCode: '972',
  },
  IT: {
    name: 'Italy',
    dialCode: '39',
  },
  JM: {
    name: 'Jamaica',
    dialCode: '1-876',
  },
  JP: {
    name: 'Japan',
    dialCode: '81',
  },
  JE: {
    name: 'Jersey',
    dialCode: '44',
  },
  JO: {
    name: 'Jordan',
    dialCode: '962',
  },
  KZ: {
    name: 'Kazakhstan',
    dialCode: '7',
  },
  KE: {
    name: 'Kenya',
    dialCode: '254',
  },
  KI: {
    name: 'Kiribati',
    dialCode: '686',
  },
  KP: {
    name: 'North Korea',
    dialCode: '850',
  },
  KR: {
    name: 'South Korea',
    dialCode: '82',
  },
  XK: {
    name: 'Kosovo',
    dialCode: '383',
  },
  KW: {
    name: 'Kuwait',
    dialCode: '965',
  },
  KG: {
    name: 'Kyrgyzstan',
    dialCode: '996',
  },
  LA: {
    name: "Lao People's Democratic Republic",
    dialCode: '856',
  },
  LV: {
    name: 'Latvia',
    dialCode: '371',
  },
  LB: {
    name: 'Lebanon',
    dialCode: '961',
  },
  LS: {
    name: 'Lesotho',
    dialCode: '266',
  },
  LR: {
    name: 'Liberia',
    dialCode: '231',
  },
  LY: {
    name: 'Libya',
    dialCode: '218',
  },
  LI: {
    name: 'Liechtenstein',
    dialCode: '423',
  },
  LT: {
    name: 'Lithuania',
    dialCode: '370',
  },
  LU: {
    name: 'Luxembourg',
    dialCode: '352',
  },
  MO: {
    name: 'Macau',
    dialCode: '853',
  },
  MK: {
    name: 'Macedonia',
    dialCode: '389',
  },
  MG: {
    name: 'Madagascar',
    dialCode: '261',
  },
  MW: {
    name: 'Malawi',
    dialCode: '265',
  },
  MY: {
    name: 'Malaysia',
    dialCode: '60',
  },
  MV: {
    name: 'Maldives',
    dialCode: '960',
  },
  ML: {
    name: 'Mali',
    dialCode: '223',
  },
  MT: {
    name: 'Malta',
    dialCode: '356',
  },
  MH: {
    name: 'Marshall Islands',
    dialCode: '692',
  },
  MQ: {
    name: 'Martinique',
    dialCode: '596',
  },
  MR: {
    name: 'Mauritania',
    dialCode: '222',
  },
  MU: {
    name: 'Mauritius',
    dialCode: '230',
  },
  YT: {
    name: 'Mayotte',
    dialCode: '262',
  },
  MX: {
    name: 'Mexico',
    dialCode: '52',
  },
  FM: {
    name: 'Micronesia',
    dialCode: '691',
  },
  MD: {
    name: 'Moldova',
    dialCode: '373',
  },
  MC: {
    name: 'Monaco',
    dialCode: '377',
  },
  MN: {
    name: 'Mongolia',
    dialCode: '976',
  },
  ME: {
    name: 'Montenegro',
    dialCode: '382',
  },
  MS: {
    name: 'Montserrat',
    dialCode: '1-664',
  },
  MA: {
    name: 'Morocco',
    dialCode: '212',
  },
  MZ: {
    name: 'Mozambique',
    dialCode: '258',
  },
  MM: {
    name: 'Myanmar',
    dialCode: '95',
  },
  NA: {
    name: 'Namibia',
    dialCode: '264',
  },
  NR: {
    name: 'Nauru',
    dialCode: '674',
  },
  NP: {
    name: 'Nepal',
    dialCode: '977',
  },
  NL: {
    name: 'Netherlands',
    dialCode: '31',
  },
  NC: {
    name: 'New Caledonia',
    dialCode: '687',
  },
  NZ: {
    name: 'New Zealand',
    dialCode: '64',
  },
  NI: {
    name: 'Nicaragua',
    dialCode: '505',
  },
  NE: {
    name: 'Niger',
    dialCode: '227',
  },
  NG: {
    name: 'Nigeria',
    dialCode: '234',
  },
  NU: {
    name: 'Niue',
    dialCode: '683',
  },
  NF: {
    name: 'Norfolk Island',
    dialCode: '672',
  },
  MP: {
    name: 'Northern Mariana Islands',
    dialCode: '1-670',
  },
  NO: {
    name: 'Norway',
    dialCode: '47',
  },
  OM: {
    name: 'Oman',
    dialCode: '968',
  },
  PK: {
    name: 'Pakistan',
    dialCode: '92',
  },
  PW: {
    name: 'Palau',
    dialCode: '680',
  },
  PS: {
    name: 'Palestine',
    dialCode: '970',
  },
  PA: {
    name: 'Panama',
    dialCode: '507',
  },
  PG: {
    name: 'Papua New Guinea',
    dialCode: '675',
  },
  PY: {
    name: 'Paraguay',
    dialCode: '595',
  },
  PE: {
    name: 'Peru',
    dialCode: '51',
  },
  PH: {
    name: 'Philippines',
    dialCode: '63',
  },
  PN: {
    name: 'Pitcairn',
    dialCode: '870',
  },
  PL: {
    name: 'Poland',
    dialCode: '48',
  },
  PT: {
    name: 'Portugal',
    dialCode: '351',
  },
  PR: {
    name: 'Puerto Rico',
    dialCode: '1',
  },
  QA: {
    name: 'Qatar',
    dialCode: '974',
  },
  RE: {
    name: 'Reunion',
    dialCode: '262',
  },
  RO: {
    name: 'Romania',
    dialCode: '40',
  },
  RU: {
    name: 'Russian Federation',
    dialCode: '7',
  },
  RW: {
    name: 'Rwanda',
    dialCode: '250',
  },
  BL: {
    name: 'Saint Barthelemy',
    dialCode: '590',
  },
  SH: {
    name: 'Ascension Island',
    dialCode: '290',
  },
  KN: {
    name: 'Saint Kitts and Nevis',
    dialCode: '1-869',
  },
  LC: {
    name: 'Saint Lucia',
    dialCode: '1-758',
  },
  MF: {
    name: 'Saint Martin',
    dialCode: '590',
  },
  PM: {
    name: 'St. Pierre and Miquelon',
    dialCode: '508',
  },
  VC: {
    name: 'Saint Vincent and the Grenadines',
    dialCode: '1-784',
  },
  WS: {
    name: 'Samoa',
    dialCode: '685',
  },
  SM: {
    name: 'San Marino',
    dialCode: '378',
  },
  ST: {
    name: 'Sao Tome and Principe',
    dialCode: '239',
  },
  SA: {
    name: 'Saudi Arabia',
    dialCode: '966',
  },
  SN: {
    name: 'Senegal',
    dialCode: '221',
  },
  RS: {
    name: 'Serbia',
    dialCode: '381',
  },
  SC: {
    name: 'Seychelles',
    dialCode: '248',
  },
  SL: {
    name: 'Sierra Leone',
    dialCode: '232',
  },
  SG: {
    name: 'Singapore',
    dialCode: '65',
  },
  SX: {
    name: 'Sint Maarten (Netherlands)',
    dialCode: '721',
  },
  SK: {
    name: 'Slovakia (Slovak Republic)',
    dialCode: '421',
  },
  SI: {
    name: 'Slovenia',
    dialCode: '386',
  },
  SB: {
    name: 'Solomon Islands',
    dialCode: '677',
  },
  SO: {
    name: 'Somalia',
    dialCode: '252',
  },
  ZA: {
    name: 'South Africa',
    dialCode: '27',
  },
  GS: {
    name: 'South Georgia and the South Sandwich Islands',
    dialCode: '500',
  },
  SS: {
    name: 'South Sudan',
    dialCode: '211',
  },
  ES: {
    name: 'Spain',
    dialCode: '34',
  },
  LK: {
    name: 'Sri Lanka',
    dialCode: '94',
  },
  SD: {
    name: 'Sudan (the)',
    dialCode: '249',
  },
  SR: {
    name: 'Suriname',
    dialCode: '597',
  },
  SE: {
    name: 'Sweden',
    dialCode: '46',
  },
  CH: {
    name: 'Switzerland',
    dialCode: '41',
  },
  SY: {
    name: 'Syrian Arab Republic',
    dialCode: '963',
  },
  TW: {
    name: 'Taiwan',
    dialCode: '886',
  },
  TJ: {
    name: 'Tajikistan',
    dialCode: '992',
  },
  TZ: {
    name: 'Zanzibar',
    dialCode: '255',
  },
  TH: {
    name: 'Thailand',
    dialCode: '66',
  },
  TL: {
    name: 'Timor-Leste',
    dialCode: '670',
  },
  TG: {
    name: 'Togo',
    dialCode: '228',
  },
  TK: {
    name: 'Tokelau',
    dialCode: '690',
  },
  TO: {
    name: 'Tonga',
    dialCode: '676',
  },
  TT: {
    name: 'Trinidad and Tobago',
    dialCode: '1-868',
  },
  TN: {
    name: 'Tunisia',
    dialCode: '216',
  },
  TR: {
    name: 'Turkiye',
    dialCode: '90',
  },
  TM: {
    name: 'Turkmenistan',
    dialCode: '993',
  },
  TC: {
    name: 'Turks and Caicos Islands',
    dialCode: '1-649',
  },
  TV: {
    name: 'Tuvalu',
    dialCode: '688',
  },
  UG: {
    name: 'Uganda',
    dialCode: '256',
  },
  UA: {
    name: 'Ukraine',
    dialCode: '380',
  },
  AE: {
    name: 'United Arab Emirates',
    dialCode: '971',
  },
  GB: {
    name: 'United Kingdom',
    dialCode: '44',
  },
  US: {
    name: 'United States',
    dialCode: '1',
  },
  UY: {
    name: 'Uruguay',
    dialCode: '598',
  },
  UZ: {
    name: 'Uzbekistan',
    dialCode: '998',
  },
  VU: {
    name: 'Vanuatu',
    dialCode: '678',
  },
  VE: {
    name: 'Venezuela',
    dialCode: '58',
  },
  VN: {
    name: 'Vietnam',
    dialCode: '84',
  },
  VG: {
    name: 'Virgin Islands (British)',
    dialCode: '1-284',
  },
  VI: {
    name: 'Virgin Islands (U.S.)',
    dialCode: '1-340',
  },
  WF: {
    name: 'Wallis And Futuna Islands',
    dialCode: '681',
  },
  YE: {
    name: 'Yemen',
    dialCode: '967',
  },
  ZM: {
    name: 'Zambia',
    dialCode: '260',
  },
  ZW: {
    name: 'Zimbabwe',
    dialCode: '263',
  },
} satisfies Record<CountryCode, { name: string; dialCode: string }>;

export default COUNTRIES;
