angular.module('contactsApp')
.filter('favorite', function() {
	return function(state) {
		return state ? 'icon-starred' : 'icon-star';
	};
});