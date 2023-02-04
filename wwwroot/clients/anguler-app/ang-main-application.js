var myApp = angular.module('myModule', ['angularUtils.directives.dirPagination', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
myApp.controller('myController', function ($scope, $http, $uibModal, $log, $document) {
    // default value 
    $scope.query = 'default';   
    $scope.dataList = []; // default 

    // Initial Function
    $scope.init = function () {
        $(document).ready(function () { });
        getdefaultdata();        
    } 

    /// start 
    var $ctrl = this;   
    $ctrl.animationsEnabled = true;

    $ctrl.ShowVisitingCard = function ($encid) {
        $ctrl.items = [];
        $http.get('/Share/GetVisitingCard', { params: { "id": $encid } }).then(function (response) {
            if (response != null || response != "undefined") {                
                $ctrl.items.push(response.data.VisitingCardPicture);
            }
        })

        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'vcardmodel',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            //size: 'lg',                
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $ctrl.ShowReviewForm = function ($encid) {
        $ctrl.items = [];
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'reviewmodel',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: 'lg',                
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    /// end 
    //remove string 
    $scope.removeString = function (str, len) {
        if (str != null) {
            if (str.length > len) {
                str = str.substring(0, len) + "...";
                return str;
            }
            else {
                return str;
            }
        }
        else {
            return '';
        }
    }
    $scope.convertToIndian = function (num) {
        result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
        return result;
    }
    // Get  Encription
    $scope.getEncrypt = function ($ids) {
        //alert($ids)
        $http.get('/Share/GetEncrypt', { params: { "id": $ids } }).then(function (response) {
            if (response != null || response != "undefined") {
                $scope.Encrypt = response.data;
            }
        }) 
        return $scope.Encrypt;
    }
    // get get default data
    function getdefaultdata() {
        $http.get('/Share/GetDefaultData').then(function (response) {
            if (response != null || response != "undefined") {
                $scope.dataList = response.data;
            }
        })
    }  
    
    
});   


// Extra 

angular.module('myModule').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };

    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {        
        $uibModalInstance.dismiss('cancel');
    };
});