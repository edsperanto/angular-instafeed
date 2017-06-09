export const InstaServiceName = 'InstagramService';
export const InstaService = [
	'$http',
	class InstaService {
		constructor($http) {
			this.$http = $http;
			this.endpoint = aT => `/api/instafeed?${aT}`;
		}
		getPosts(accessToken) {
			return this.$http.get(this.endpoint(accessToken));
		}
	}
]
