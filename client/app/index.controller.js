/*
 * Copyright 2015,2016 Daniel Schlager, Christian Kawalar
 *
 * This file is part of allevios.io
 *
 * allevios.io is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * allevios.io is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with allevios.io.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

'use strict';

angular.module('alleviosServerApp')
    .controller('IndexCtrl', function ($scope, $state, Auth) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
    }];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function () {
            Auth.logout();
            $state.go('login');
        };

        $scope.isActive = function (route) {
            return route === $state.current;
        };

        $scope.showSidebarRight = function () {
            var position = $('.sidebar-left').css('left');
            var positionInt = parseInt(position);
            $('.sidebar-left').show();
            if (positionInt == 0) {
                //   $('.sidebar-left').hide();
            } else {
                //    $('.sidebar-left').show();
            }
        };

        $scope.showSidebarLeft = function () {
            var position = $('.sidebar-right').css('right');
            var positionInt = parseInt(position);
            $('.sidebar-left').hide();
            if (positionInt == 0) {
                //    $('.sidebar-right').hide();
            } else {
                //    $('.sidebar-right').show();
            }

        };

        $('#calendar').datepicker({});

        $(document).on('click', 'ul.nav li.parent > a > span.icon', function () {
            $(this).find('em:first').toggleClass('glyphicon-minus');
        });

        $('.sidebar span.icon').find('em:first').addClass('glyphicon-plus');

    });
