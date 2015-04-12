'use strict';

var styles            = require('./application/styles/styles');
var TodoListContainer = require('./application/components/TodoListContainer');
var React             = require('react-native');

var {
  AppRegistry,
  NavigatorIOS,
  Component
} = React;

class TodoApp extend Component {
  render() {
    return (
      <NavigatorIOS
        style={style.navigator}
        initialRoute={{component: TodoListContainer, title: 'To Do\'s'}} />
    );
  }
}

AppRegistry.registerComponet('TodoApp', () => TodoApp);
