/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/


var CONFIG = {
   customTheme: CUSTOM_THEMES.TRANSPARENT, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: "https://kilian-eller.duckdns.org:8123",
   wsUrl: "wss://kilian-eller.duckdns.org:8123/api/websocket",
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   debug: false, // Prints entities and state change info to the console.

   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         padding: '30px 130px 0',
         fontSize: '28px'
      },
      right: [],
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         }
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
      {
         title: 'Main page',
         bg: 'images/bg5.jpg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: 'First group',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     type: TYPES.IFRAME,
                     id: {},
                     width: 3,
                     height: 3,
                     url: 'https://embed.windy.com/embed2.html?lat=50.507&lon=9.682&zoom=11&level=surface&overlay=temp&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=true&detailLat=50.566&detailLon=9.676&metricWind=default&metricTemp=default&radarRange=-1'
                  }
               ]
            },

            {
               title: 'Temperatures',
               width: 1,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     title: 'Schlafzimmer',
                     id: "climate.danfoss_devolo_home_control_radiator_thermostat_heating_1",
                     type: TYPES.CLIMATE,
                     unit: 'C',
                     state: function (item, entity) {
                        return 'Current '
                           + entity.attributes.current_temperature
                           + 'C';
                     }
                  },
                  {
                     position: [0, 1],
                     title: 'Wohnzimmer',
                     id: "climate.danfoss_devolo_home_control_radiator_thermostat_heating_1_2",
                     type: TYPES.CLIMATE,
                     unit: 'C',
                     state: function (item, entity) {
                        return 'Current '
                           + entity.attributes.current_temperature
                           + 'C';
                     }
                  },
               ]
            },

            {
               title: 'third group',
               width: 3,
               height: 3,
               items: [
                  {
                    position: [0, 0],
                    width: 2,
                    height: 2,
                    id: 'media_player.spotify',
                    type: TYPES.MEDIA_PLAYER_CUSTOM,
                    hideSource: false,
                    hideMuteButton: true,
                    hideVolumeSlider : false,
                    //state: '@attributes.media_title',
                    subtitle: '@attributes.media_title',
                    bgSuffix: '@attributes.entity_picture',
                },
               ]
            },
            {
               title: 'TV',
               width: 1,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.MEDIA_PLAYER_TOGGLE,
                     id: "media_player.sony_bravia_tv",
                     states: {
                        on: "ON",
                        off: "OFF"
                    },
                     title: 'TV',
                     icon: "mdi-television",
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     type: TYPES.SCRIPT,
                     bg: 'icons/icon-netflix.png',
                     id: "script.startnetflix",
                     state: false,
                     title: 'Netflix',
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.SCRIPT,
                     bg: 'icons/icon-netflix.png',
                     id: "script.openspotifyontv",
                     state: false,
                     title: 'Spotify On TV',
                  }
                  
               ]
            }

         ]
      },
      {
         title: 'Second page',
         bg: 'images/bg2.png',
         icon: 'mdi-numeric-2-box-outline',
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [
               ]
            },
         ]
      }
   ],
}
