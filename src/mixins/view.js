import scrolling from '@/directive/scrolling'
export default {
  directives: { scrolling },
  computed: {
    getNav() {
      return id => {
        return this.navList.find(nav => nav.id == id)
      }
    },
    filterVersion() {
      return list => {
        return list.filter(item => !item.version || item.version <= this.version)
      }
    },
    version() {
      return this.$store.state.version;
    },
    compareVersion() {
      return id => {
        return this.getNav(id).version <= this.version
      }
    }
  },
}