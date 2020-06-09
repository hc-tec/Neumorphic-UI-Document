const postDataFormat = (data: any) => {
  let dataString = '';
  const keys = Object.keys(data);
  const len = keys.length;
  keys.forEach((el) => {
    if (el !== keys[len - 1]) {
      dataString += `${el}=${data[el]}&`;
    } else {
      dataString += `${el}=${data[el]}`;
    }
  });
  return dataString;
};

// 字典合并
// tslint:disable-next-line:variable-name
// const mergeDict = (dict_1: any, dict_2: any) => {
//   const mergeList = [...Object.keys(dict_1), ...Object.keys(dict_2)];
//   const mergeObject = {};
//   for (const el of mergeList) {
//     mergeObject[el] = dict_1[el] || dict_2[el];
//   }
//   return mergeObject;
// };

const GetDateTimeToString = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();
    if (month < 10) { month = '0' + month; }
    if (day < 10) { day = '0' + day; }

    let hours: string | number = date.getHours();
    let mins: string | number = date.getMinutes();
    let secs: string | number = date.getSeconds();
    const msecs = date.getMilliseconds();
    if (hours < 10) { hours = '0' + hours; }
    if (mins < 10) { mins = '0' + mins; }
    if (secs < 10) { secs = '0' + secs; }
    if (msecs < 10) { secs = '0' + msecs; }
    return `${year}/${month}/${day} ${hours}:${mins}:${secs}`;
};

const DateTimeDiff = (PrevDate: string, NextDate: string) => {
  // 格式为 2020/05/21 16:32:10
  const getDateDetails = (Date: string) => {
    return [...Date.split(' ')[0].split('/'), ...Date.split(' ')[1].split(':')];
  };
  // tslint:disable-next-line:no-shadowed-variable
  const initRequire = (preYear: string, preMonth: string,
                       // tslint:disable-next-line:no-shadowed-variable
                       preDay: string, nowYear: string, nowMonth: string, nowDay: string) => {
    return preYear === nowYear &&
           preMonth === nowMonth &&
           preDay === nowDay;
  };

  const [preYear, preMonth, preDay, preHour, preMinute] = getDateDetails(PrevDate);
  const [nowYear, nowMonth, nowDay, nowHour, nowMinute] = getDateDetails(NextDate);

  if (initRequire(preYear, preMonth, preDay, nowYear, nowMonth, nowDay)) {
    // tslint:disable-next-line:radix
    const nowMinutes = parseInt(nowHour) * 60 + parseInt(nowMinute);
    // tslint:disable-next-line:radix
    const preMinutes = parseInt(preHour) * 60 + parseInt(preMinute);
    return nowMinutes - preMinutes <= 5;
  }
  return false;
};

export { postDataFormat, GetDateTimeToString, DateTimeDiff };
