---
title: It is Getting Easier to Stay Up-to-Date With Pharmacy Informatics- New RSS Feed
description: Using our new blog site, we have implemented a feed that can be
  used with RSS readers as another means to stay current.
author: Barry McClain
date: 2023-02-10T05:04:51.249Z
featured_image:
  src: https://www.pharmacyinformatics.net/image/Feed-icon.svg.png
  alt: RSS Icon
  title: RSS Icon
tags:
  - pharmacyinformatics
---
Again, pharmacyinformatics.blog has developed our blog site (aka social media machine) using 11ty and Netlify CMS. The newest feature is this really simple syndication (RSS) feed, which is a fairly easy plugin that can be customized for your site and then validated through the [W3C RSS Validator](https://validator.w3.org/feed/):

![RSS Validation](/static/img/rss-validation.png "RSS Validation of pharmacyinformatics.blog")

RSS is not a super novel thing, but it is a valuable tool for any blog to supply feeds to those that use RSS readers or other tools that combine user specific feeds.  So hopefully it is useful to some out there!

A couple of items to note for those that are considering developing a similar build with a static site generator like 11ty:

1. For pulling in blog posts, instead of using "for post in collections.all", I applied a tag to my posts of "blogging" to filter out garbage that was collecting in it.  
2. I also focused on pulling in the post.data.description as the actual description of the blog, not the content.  I have seen examples doing this different ways.  

But here is what the nunjucks file ended up looking like:

![NJK file for RSS](/static/img/njk-file-for-rss-feed.png "NJK file for RSS")

H﻿appy Feeding!