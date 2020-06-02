export default {
  name: 'y-table-render',
  props: {
    row: Object,
    col: Object,
    index: Number
  },
  render(h) {
    if (typeof this.col.render == 'function') {
      return this.col.render(h, {
        row: this.row,
        col: this.col,
        index: this.index
      })
    } else {
      return h('div', this.row[this.col.key])
    }
  },
}