import MarkdownIt from 'markdown-it'

const handlePlugin = (plugin) => plugin.default || plugin

export default ({ app }, inject) => {
  const md = new MarkdownIt('default', {"breaks":true,"html":true,"linkify":true,"typography":true})

  inject('md', md)
}
