import { ADD_THUMBNAILS, CURRENT_THUMBNAIL } from "../actions";

const initialState = {
  currentThumbnailIdx: 0,
  allThumbnails: [
    "https://shahidstatic3.akamaized.net/mediaObject/New-Thumbs/Karim2020-33/Saheb-Mokaam-logo/original/Saheb-Mokaam-logo.png?height=auto&width=400&croppingPoint=&version=1&type=png",
    "https://shahidstatic4.akamaized.net/mediaObject/slider/Ihsan/Thumbs-5/devil-kingdom-logo-season-2/original/devil-kingdom-logo-season-2.png?height=auto&width=400&croppingPoint=&version=1&type=png",
    "https://shahidstatic1.akamaized.net/mediaObject/april/semary/EN/EN1/otroq_logo0/original/otroq_logo0.png?height=auto&width=400&croppingPoint=&version=1&type=png",
    "https://shahidstatic3.akamaized.net/mediaObject/2020/abdul/elharamy_Logo/original/elharamy_Logo.png?height=auto&width=400&croppingPoint=&version=1&type=png",
    "https://shahidstatic3.akamaized.net/mediaObject/New-Thumbs/Karim2020-22/zemheri-logo/original/zemheri-logo.png?height=auto&width=400&croppingPoint=&version=1&type=png",
    "https://shahidstatic2.akamaized.net/mediaObject/2020/disney/safwan/omar/lel-hob-jinon/greys/baywatch/moga_harra/logo_Dawini_A_N/original/logo_Dawini_A_N.png?height=auto&width=400&croppingPoint=&version=1&type=png",
    "https://shahidstatic3.akamaized.net/mediaObject/2020/disney/safwan/omar/lel-hob-jinon/greys/Afoor/kabeer_logo/original/kabeer_logo.png?height=auto&width=400&croppingPoint=&version=1&type=png",
    "https://shahidstatic2.akamaized.net/mediaObject/2020/abdul/alsherka_logo/original/alsherka_logo.png?height=auto&width=400&croppingPoint=&version=1&type=png",
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_THUMBNAILS:
      return {
        ...state,
        allThumbnails: action.payload.thumbnails,
      };

    case CURRENT_THUMBNAIL:
      return {
        ...state,
        currentThumbnailIdx: action.payload.thumbnailIdx,
      };
    default:
      return {
        ...state,
      };
  }
}
