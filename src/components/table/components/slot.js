export default {
  name: 'y-table-slot',
  inject: ['tableRoot'],
  props: {
    row: Object,
    col: Object,
    index: Number,
  },
  render(h) {
    return h('div', this.tableRoot.$scopedSlots[this.col.key]({
      row: this.row,
      index: this.index,
      col: this.col
    }))
  },
}