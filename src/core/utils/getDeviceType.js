const getDeviceType = () => {
  return navigator.userAgentData.mobile ? 'mobile' : 'desktop';
};
export default getDeviceType;
