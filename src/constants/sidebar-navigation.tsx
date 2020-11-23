import React from 'react';

import {
  BiHomeAlt,
  BiDollarCircle,
  BiTrendingUp,
  BiWallet,
  BiNews,
  BiWrench,
  BiSupport,
} from 'react-icons/bi';

export default {
  Dashboard: {
    icon: <BiHomeAlt />,
    isSelected: true,
    isAccordion: false,
  },
  Investments: {
    icon: <BiDollarCircle />,
    isSelected: false,
    isAccordion: false,
  },
  Career: {
    icon: <BiTrendingUp />,
    isSelected: false,
    isAccordion: false,
  },
  Wallet: {
    icon: <BiWallet />,
    isSelected: false,
    isAccordion: false,
  },
  News: {
    icon: <BiNews />,
    isSelected: false,
    isAccordion: false,
  },
  Settings: {
    icon: <BiWrench />,
    isSelected: false,
    isAccordion: true,
  },
  Support: {
    icon: <BiSupport />,
    isSelected: false,
    isAccordion: false,
  },
} as const;
