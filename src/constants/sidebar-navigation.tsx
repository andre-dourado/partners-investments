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
  },
  Investments: {
    icon: <BiDollarCircle />,
  },
  Career: {
    icon: <BiTrendingUp />,
  },
  Wallet: {
    icon: <BiWallet />,
  },
  News: {
    icon: <BiNews />,
  },
  Settings: {
    icon: <BiWrench />,
  },
  Support: {
    icon: <BiSupport />,
  },
} as const;
