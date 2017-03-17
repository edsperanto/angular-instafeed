import angular from 'angular';
import uiRouter from 'angular-ui-router';

import '../style/app.css';
import {DefaultState, DefaultCtrl} from './default';

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
	.config(($stateProvider) => {
		$stateProvider
			.state(DefaultState.name, DefaultState)
			;
	})
	.run($state => $state.go('Default'))
  .directive('app', app)
	.controller('DefaultCtrl', DefaultCtrl)
	;

export default MODULE_NAME;
