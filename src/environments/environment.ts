// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host', 
  XRapidAPIHostHeaderValue: 'community-open-weather-map.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '2603d3e71amsh2e9d002944dc21bp18ff2fjsn520abb127fd8'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
