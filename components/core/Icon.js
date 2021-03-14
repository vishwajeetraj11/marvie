import Icomoon, { iconList } from 'react-native-icomoon';
import json from '../../assets/fonts/selection.json';
import React from 'react';

iconList(json);

const Icon = ({ name, ...restProps }) => {
	return <Icomoon iconSet={json} name={name} {...restProps} />;
};

/* 
  Usage
  <Icon name={iconName} color={iconColor} size={20} />
 
 */

export default Icon;
