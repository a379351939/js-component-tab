# js-component-tab
预览：https://a379351939.github.io/js-component-tab/sample.html

## 组件功能
  这是个tab组件，点击Tab选择器元素会给该元素增加active类名，并且在对应panel元素增加 active类名，并显示对应的内容元素。

## 组件实现方式
  此模块置于一个函数的块级作用域中，其中属性置于构建函数中，实现的function置于构建函数的prototype中。

## 如何使用
- 在HTML中添加tab相关元素。
```
  <div class="tab-container">
    <div class="header">
      <div class="tab active">1</div>
      <div class="tab">2</div>
      <div class="tab">3</div>
      <div class="tab">4</div>
    </div>
    <div class="content">
      <div class="panel active">panel1</div>
      <div class="panel">panel2</div>
      <div class="panel">panel3</div>
      <div class="panel">panel4</div>
    </div>
  </div>
```

- 引入JS文件，建立实例。
```
  <script src="tab.js"></script>
  <script>
    var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
    var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
  </script>
```