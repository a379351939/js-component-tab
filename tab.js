function Tab (node){
  this.$tab = node.querySelectorAll('.tab')
  this.$panel = node.querySelectorAll('.panel')
  this.init()
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
      this.bind()
    },
    bind: function(){
      var _this= this
      _this.$tab.forEach(function(node){
        node.addEventListener('click', function(){
          var index
          _this.$tab.forEach(function(tab, id){
            if(tab === node) {
              index = id
            }
            tab.classList.remove('active')
          })
          node.classList.add('active')
          _this.$panel.forEach(function(pancel){
            pancel.classList.remove('active')
          })
          _this.$panel[index].classList.add('active')
        })
      })
    }
}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);