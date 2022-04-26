export const getTime = (str) => {
  return str.split(" ")[1].slice(0, 5);
};

export const converter = (time) => {
  return Math.ceil((Number(time) - 32) * 0.56) / 6;
};

export const isActive =({isActive})=>isActive ? 'active' : 'myactive'
