// add avatars to each node

var msgNodeListHtml = ''
$0.childNodes.forEach((node, idx) => {
  // check if it's a time node!
  if (node.tagName === 'H4') {
    const timeNode = document.createElement('div')
    timeNode.className = 'chat-message-time'
    timeNode.innerText = node.innerText
    msgNodeListHtml += timeNode.outerHTML
    return
  }

  const messageContainerNode = document.createElement('div')
  messageContainerNode.className = 'chat-message-container clearfix'
  if (node.innerText.split('\n')[0] === 'Adam') {
    messageContainerNode.className += ' adam'
  } else {
    messageContainerNode.className += ' other'
  }

  node.querySelectorAll('.direction_ltr').forEach(node => {
    const msgNodeItem = document.createElement('div')
    msgNodeItem.className = 'chat-message'

    // sticker
    const stickerNode = node.querySelector('[data-testid=sticker]')
    if (stickerNode) {
      stickerNode.style['background-image'] = stickerBackgroundImage(stickerNode.style['background-image'])
      msgNodeItem.appendChild(stickerNode)
      messageContainerNode.appendChild(msgNodeItem)
      return
    }

    // image
    const imageNode = node.querySelector('[role=presentation]')
    if (imageNode) {
      imageNode.className = 'chat-message-image'
      msgNodeItem.appendChild(imageNode)
      messageContainerNode.appendChild(msgNodeItem)
      return
    }

    // pure emoticon msg
    if (!node.innerText && node.querySelector('img')) {
      msgNodeItem.innerHTML = node.querySelector('img').outerHTML
      messageContainerNode.appendChild(msgNodeItem)
      return
    }

    // msg with emoticon
    if (node.querySelector('._aok span span')) {
      msgNodeItem.innerHTML += node.querySelector('._aok span span').innerHTML
      messageContainerNode.appendChild(msgNodeItem)
      return
    }

    // pure text
    msgNodeItem.innerHTML += node.innerText
    messageContainerNode.appendChild(msgNodeItem)
  })

  msgNodeListHtml += messageContainerNode.outerHTML
})

prompt('', msgNodeListHtml)

function stickerBackgroundImage(imageFbUrl) {
  if (imageFbUrl.match(443281065778538)) { return 'url(http://res.cloudinary.com/goldylucks/image/upload/v1504165088/stickers/sticker-crock-magic.png)' }
  if (imageFbUrl.match(126362187548578)) { return 'url(http://res.cloudinary.com/goldylucks/image/upload/v1504164954/stickers/sticker-tounge.png)' }
}
