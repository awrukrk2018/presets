let NumberRange = (lowEnd, highEnd) => {  let list = [];  for (let i = lowEnd; i <= highEnd; i++) { list.push(i);}  return (list)}; const clickArray = [11, 108, 178, NumberRange(210, 214), NumberRange(216, 217)]; function select() {  clickArray.flat().forEach(e => {    document.getElementsByClassName('VfPpkd-muHVFf-bMcfAe')[e].click(); });} function reset() {  for (var i = 0; i < 2; i++) {    document.getElementsByClassName('VfPpkd-muHVFf-bMcfAe')[0].click();    document.getElementsByClassName('VfPpkd-muHVFf-bMcfAe')[105].click();    document.getElementsByClassName('VfPpkd-muHVFf-bMcfAe')[127].click(); document.getElementsByClassName('VfPpkd-muHVFf-bMcfAe')[207].click();}} function notify() {alert("Settings applied\nSave to review or Reload page to apply new settings");} reset(); setTimeout(select, 1000); setTimeout(notify, 2000);
