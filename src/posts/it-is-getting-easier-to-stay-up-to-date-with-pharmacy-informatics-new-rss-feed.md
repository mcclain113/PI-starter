---
title: It is Getting Easier to Stay Up-to-Date With Pharmacy Informatics- New RSS Feed
description: Using our new blog site, we have implemented a feed that can be
  used with RSS readers as another means to stay current.
author: Barry McClain
date: 2023-02-10T03:23:48.838Z
tags:
  - Tags
---
Again, pharmacyinformatics.blog has developed our blog site (aka social media machine) using 11ty and Netlify CMS.  The newest feature is this really simple syndication (RSS) feed, which is a fairly easy plugin that can be customized for your site and then validated through  the [W3C Feed Validation Service.](https://validator.w3.org/feed/)

![RSS Validation](/static/img/rss-validation.png "RSS Validation")

R﻿SS is not a super novel thing, but it is a valuable tool for any blog to supply feeds to those that use RSS readers or other tools that combine user specific feeds.  So hopefully it is useful to some out there!

A﻿ couple of items to note for those that are considering developing a similar build with a static site generator like 11ty:

1﻿) For pulling in blog posts, instead of using "for post in collections.all", I applied a tag to my posts of "blogging" to filter out garbage that was collecting in it.  I also focused on pulling in the post.data.description as the actual description of the blog, not the content.  I have seen examples doing this different ways.  But here is what the nunjucks file ended up looking like:

```
---json
{
  "permalink": "feed.xml",
  "eleventyExcludeFromCollections": true,
  "metadata": {
    "title": "Pharmacy Informatics",
    "subtitle": "Premium Pharmacy Informatics Resources",
    "url": "https://pharmacyinformatics.blog/",
    "feedUrl": "https://pharmacyinformatics.blog/feed.xml",
    "author": {
      "name": "Barry McClain",
      "email": "accessrealitytechnology@gmail.com"
    }
  }
}
---
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xml:base="{{ metadata.url }}" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ metadata.title }}</title>
    <link>{{ metadata.url }}</link>
    <atom:link href="{{ permalink | absoluteUrl(metadata.feedUrl) }}" rel="self" type="application/rss+xml" />
    <description>{{ metadata.subtitle }}</description>
    <language>en</language>
    {%- for post in collections.blogging | reverse %}
        {% set absolutePostUrl %}{{ post.url | url | absoluteUrl(metadata.url) }}{% endset %}
        <item>
            <title>{{ post.data.title }}</title>
            <link>{{ absolutePostUrl }}</link>
            <description>{{ post.data.description }}</description>
            <pubDate>{{ post.date | dateToRfc822 }}</pubDate>
            <dc:creator>{{ metadata.author.name }}</dc:creator>
            <guid>{{ absolutePostUrl }}</guid>
        </item>
    {%- endfor %}
  </channel>
</rss>
```

H﻿appy RSSing!