import {InstaServiceName} from './services';
export const DefaultCtrl = [	
	'$scope',
	InstaServiceName,
	class DefaultCtrl {
		constructor($scope, InstaService) {
			this.title = 'INSTAFEED';
			InstaService.getPosts()
				.then(posts => {
					console.log(posts);
					return posts.data.data;
				})
				.then(posts => {
					console.log(posts);
					$scope.posts = posts;
				});
		}
	}
];
