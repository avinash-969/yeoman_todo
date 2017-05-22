import * as angular from 'angular';
import 'todomvc-app-css/index.css!';

import {TodoService} from './app/todos/todos.ts';
import {App} from './app/containers/App.ts';
import {Header} from './app/components/Header.ts';
import {MainSection} from './app/components/MainSection.ts';
import {TodoTextInput} from './app/components/TodoTextInput.ts';
import {TodoItem} from './app/components/TodoItem.ts';
import {Footer} from './app/components/Footer.ts';
import 'angular-ui-router';
import routesConfig from './routes.ts';

angular
  .module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routesConfig])
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
