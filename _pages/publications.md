---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% assign publication_tag_candidates = "robotic manipulation|robotic navigation|motion planning and control|autonomous driving" | split: "|" %}

<div class="publication-tabs" role="tablist" aria-label="Publication categories">
  <button class="publication-tabs__tab is-active" type="button" role="tab" aria-selected="true" data-publication-tag="all">All Papers</button>
  {% for candidate in publication_tag_candidates %}
    {% assign tagged_publications = site.publications | where_exp: "item", "item.tags contains candidate" %}
    {% if tagged_publications.size > 0 %}
      <button class="publication-tabs__tab" type="button" role="tab" aria-selected="false" data-publication-tag="{{ candidate | slugify }}">{{ candidate }}</button>
    {% endif %}
  {% endfor %}
</div>

<div class="publication-list">
  {% assign sorted_publications = site.publications | sort: "date" %}
  {% for post in sorted_publications reversed %}
    {% capture tag_slugs %}{% if post.tags %}{% for tag in post.tags %}{{ tag | slugify }}{% unless forloop.last %} {% endunless %}{% endfor %}{% endif %}{% endcapture %}
    {% assign tag_slugs = tag_slugs | strip %}
    {% if tag_slugs != "" %}
      {% assign tag_attribute = "all " | append: tag_slugs %}
    {% else %}
      {% assign tag_attribute = "all" %}
    {% endif %}
    <div class="publication-list__item" data-publication-tags="{{ tag_attribute }}">
      {% include archive-single.html %}
    </div>
  {% endfor %}
</div>
