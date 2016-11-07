/**
 * @file main.js
 * @author Daniel Miller
 */
require(["Dropdown", "Subject", "ThemeImage", "ThemeTitle", "ThemePosts"], function(Dropdown, Subject, ThemeImage, ThemeTitle, ThemePosts){

  var themeImage = new ThemeImage('theme-image');
  var themeTitle = new ThemeTitle('theme-title');
  var themePosts = new ThemePosts('theme-posts');
  var observers = [themeImage, themeTitle, themePosts];
  var dropdown = new Dropdown('theme-select', observers);
});
