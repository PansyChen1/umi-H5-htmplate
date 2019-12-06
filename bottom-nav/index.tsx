import React from 'react';
import router from 'umi/router';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

const BottomBar = () => {

  const bottomBarData = [
    {
      'id': 'home',
      'name': 'Home',
      'icon': require('../../assets/Home.png'),
      'url': '/home',
    },
    {
      'id': 'support',
      'name': 'Support',
      'icon': require('../../assets/Email.png'),
      'url': '/home',
    },
    {
      'id': 'loans',
      'name': 'Loans',
      'icon': require('../../assets/Money-bag.png'),
      'url': '/home',
    },
    {
      'id': 'account',
      'name': 'Account',
      'icon': require('../../assets/More.png'),
      'url': '/home',
    },
  ];

  return (

    <TabBar
      barTintColor="#fff"
      tintColor="#ef5f55"
    >
      {
        bottomBarData.map(item => {
          return (
            <TabBar.Item
              key={item.id}
              title={item.name}
              icon={<div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${item.icon})`,
                }}
              />
              }
              onPress={() => {
                router.push(item.url)
              }}
            />
          );
        })
      }
    </TabBar>
  );
};

export default BottomBar;
