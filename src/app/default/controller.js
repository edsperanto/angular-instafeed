import {InstaServiceName} from './services';
export const DefaultCtrl = [	
	'$scope',
	InstaServiceName,
	class DefaultCtrl {
		constructor($scope, InstaService) {
			this.title = 'INSTAFEED';
			this.accessToken = window.location.hash.split('#!/').join('');
			if(this.accessToken == '') {
				window.location = "https://api.instagram.com/oauth/authorize/?client_id=ce44ce84e0af4674a9c0bc0eda5f45c4&redirect_uri=http://localhost:8080&response_type=token";
			} else {
				this.accessToken = this.accessToken.split('#!#').join('');
				InstaService.getPosts(this.accessToken)
					.then(posts => {
						return posts.data.data;
					})
					.then(posts => {
						$scope.posts = posts;
					});
			}
		}
	}
];
