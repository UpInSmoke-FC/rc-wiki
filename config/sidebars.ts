/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Wiki main content sidebar
  wiki_nav_sidebar: [
    {type: 'autogenerated', dirName: 'wiki'},

  ],
  // Misc content sidebar
  misc_sidebar: [{type: 'autogenerated', dirName: 'misc'}],
  // Plugins Wiki sidebar
  plugins_wiki_rusty_connector: [
    {type: 'autogenerated', dirName: 'rusty-connector'}
  ],
  /**
   *  Do not use unless necessary !!!
   *  By default, Docusaurus generates a sidebar from the docs folder structure 
   **/
  //default_sidebar: [{type: 'autogenerated', dirName: '.'}],
};

module.exports = sidebars;
