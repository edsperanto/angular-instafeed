export const InstaServiceName = 'InstagramService';
export const InstaService = [
	'$http',
	class InstaService {
		constructor($http) {
			this.$http = $http;
			this.endpoint = '/api/instafeed';
		}
		getPosts() {
			return this.$http.get(this.endpoint);
		}
	}
]
