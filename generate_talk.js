//defind function random(array)
function random(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}

//定義 function generateTalk
function generateTalk(options) {
  //設定對象、工作內容、結束語句
  const target = {
    developer: '工程師',
    designer: '設計師',
    founder: '創業家',
  }
  const task = {
    developer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!options.target) {
    return '選一個想說垃圾話的對象吧~'
  }

  //依據使用者選擇的對象隨機產生句子
  let collection = `身為一個${target[options.target]}，${random(task[options.target])}，${random(phrase)}吧!`


  //回傳句子
  return collection
}

//執行function
module.exports = generateTalk 