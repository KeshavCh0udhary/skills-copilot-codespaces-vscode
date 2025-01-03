function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/member.html',
        controller: 'skillsMemberController',
        controllerAs: 'vm',
        transclude: true,
        bindToController: true,
        scope: {
            skills: '='
        }
    };
}