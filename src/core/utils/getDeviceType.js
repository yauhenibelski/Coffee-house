const getDeviceType = () => {
  if (navigator.userAgentData) {
    return navigator.userAgentData.mobile ? 'mobile' : 'desktop';
  }
};
export default getDeviceType;
