import {InstaServiceName} from './services';
export const DefaultCtrl = [	
	'$scope',
	InstaServiceName,
	class DefaultCtrl {
		constructor($scope, InstaService) {
			this.title = 'Instagram';
			InstaService.getPosts()
				.then(({data: {data: posts}}) => {
					console.log(posts);
					$scope.posts = posts;
				});
		}
	}
];
