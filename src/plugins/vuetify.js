import Vue from "vue";
import Vuetify from "vuetify/lib";

import PhoneLinkIcon from "../icon/PhoneLinkIcon";
import SoundIcon from "../icon/SoundIcon";
import ChatIcon from "../icon/ChatIcon";
import AssignmentIcon from "../icon/AssignmentIcon";
import ArrowRightIcon from "../icon/ArrowRightIcon";
import TrophyIcon from "../icon/TrophyIcon";
import PersonIcon from "../icon/PersonIcon";
import ArrowDownIcon from "../icon/ArrowDownIcon";
import LiveTvIcon from "../icon/LiveTvIcon";
import ExpandIcon from "../icon/ExpandIcon";
import CloseButton from "../icon/CloseButton";
import LinkIcon from "../icon/LinkIcon";
import SoccerIcon from "../icon/SoccerIcon";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#EBF5FF", // #E53935
        secondary: "#AABBD0", // #FFCDD2
        accent: "#31FEF9", // #3F51B5
        primaryBg: "#03132e",
        darkCardBg: "#000B1D",
        // gradientLinear: "linear-gradient(#37aee1, #197f7d)",
      },

      dark: {
        background: "#31FEF9",
      },
    },
  },
  icons: {
    values: {
      phoneLink: {
        component: PhoneLinkIcon,
      },

      soundUp: {
        component: SoundIcon,
      },
      chat: {
        component: ChatIcon,
      },
      assignment: {
        component: AssignmentIcon,
      },
      arrowRight: {
        component: ArrowRightIcon,
      },
      trophy: {
        component: TrophyIcon,
      },

      person: {
        component: PersonIcon,
      },

      arrowDown: {
        component: ArrowDownIcon,
      },

      tv: {
        component: LiveTvIcon,
      },

      expand: {
        component: ExpandIcon,
      },

      close: {
        component: CloseButton,
      },

      link: {
        component: LinkIcon,
      },

      soccer: {
        component: SoccerIcon,
      },
    },
  },
});
